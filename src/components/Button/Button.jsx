import s from './Button.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <button className={s.Button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};
