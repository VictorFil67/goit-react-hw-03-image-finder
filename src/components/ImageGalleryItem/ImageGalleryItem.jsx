import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, previewURL, tags, url, openModal }) => {
  const handleClick = () => {
    openModal(url);
  };
  return (
    <li className={s.ImageGalleryItem} onClick={handleClick}>
      <img className={s.ImageGalleryItemImage} src={previewURL} alt={tags} />
    </li>
  );
};
