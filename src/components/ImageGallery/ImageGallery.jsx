import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../../API/gallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import s from './ImageGallery.module.css';

// import { Audio } from 'react-loader-spinner';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    per_page: 12,
    q: '',
    totalHits: null,
    modal: false,
    url: null,
  };

  async componentDidMount() {
    // const { per_page, q, page } = this.state;
    // try {
    //   this.setState({ isLoading: true });
    // const { hits, totalHits } = await getImages({ q, per_page, page });
    // this.setState({ images: hits, totalHits });
    // console.log(this.state.images[0].previewURL);
    // console.log(this.state.images[0].tags);
    // } catch (error) {
    //   console.log(error.message);
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  async componentDidUpdate(_, prevState) {
    const { per_page } = this.state;
    if (prevState.q === this.state.q && prevState.page !== this.state.page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await getImages({
          q: this.state.q,
          per_page,
          page: this.state.page,
        });
        // this.setState({ images: hits, totalHits });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits,
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    } else if (
      prevState.q !== this.state.q
      // prevState.page !== this.state.page
      // (this.state.q && prevState.page !== this.state.page)
    ) {
      try {
        this.setState({ isLoading: true });
        const { hits } = await getImages({
          q: this.state.q,
          per_page,
          page: 1,
        });
        this.setState({ images: hits, page: 1 });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearchText = text => {
    this.setState({ q: text, images: [], page: 1 });
  };

  handleLoadMore = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = url => {
    this.setState({ url, modal: true });
    window.addEventListener('keydown', this.onWindowEscape);
  };
  onWindowEscape = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      this.closeModal();
      window.removeEventListener('keydown', this.onWindowEscape);
    }
  };
  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { images, isLoading, url, per_page } = this.state;
    return (
      <div>
        {this.state.modal && <Modal url={url} close={this.closeModal} />}
        <Searchbar onSubmit={this.handleSearchText} />
        {isLoading && (
          <Loader />
          // <Audio
          //   height="80"
          //   width="80"
          //   radius="9"
          //   color="green"
          //   ariaLabel="three-dots-loading"
          //   // wrapperStyle
          //   // wrapperClass
          // />
        )}
        <ul className={s.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              previewURL={image.previewURL}
              tags={image.tags}
              url={image.largeImageURL}
              openModal={this.openModal}
            />
          ))}
        </ul>

        {images.length >= per_page && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
// || (images.length >= per_page && page === +1)
