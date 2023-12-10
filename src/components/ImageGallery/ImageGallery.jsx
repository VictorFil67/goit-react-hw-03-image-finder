import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../../API/gallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

import { Audio } from 'react-loader-spinner';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    per_page: 12,
    q: '',
    totalHits: null,
  };

  async componentDidMount() {
    const { per_page, q, page } = this.state;
    try {
      const { hits, totalHits } = await getImages({ q, per_page, page });

      this.setState({ images: hits, totalHits });
      // console.log(this.state.images[0].previewURL);
      // console.log(this.state.images[0].tags);
    } catch (error) {
      console.log(error.message);
    }
  }

  async componentDidUpdate(_, prevState) {
    const { per_page } = this.state;
    // console.log(this.state.q);
    if (!this.state.q && prevState.page !== this.state.page) {
      try {
        const { hits, totalHits } = await getImages({
          // q: this.state.q,
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
      }
    }
    if (
      (this.state.q && prevState.q !== this.state.q) ||
      (this.state.q && prevState.page !== this.state.page)
    ) {
      try {
        const { hits } = await getImages({
          q: this.state.q,
          per_page,
          page: 1,
        });
        this.setState({ images: hits });
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  handleSearchText = text => {
    this.setState({ q: text });
  };

  handleLoadMore = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalHits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchText} />
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        <ul className="gallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              previewURL={image.previewURL}
              tags={image.tags}
            />
          ))}
        </ul>

        {images.length && images.length < totalHits ? (
          <Button handleLoadMore={this.handleLoadMore} />
        ) : null}
      </div>
    );
  }
}
// || (images.length >= per_page && page === +1)
