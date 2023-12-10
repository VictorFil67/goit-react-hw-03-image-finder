import s from './Modal.module.css';
export const Modal = ({ url, close }) => {
  const handleClick = e => {
    // console.log(e.target);
    if (e.target === e.currentTarget) {
      close();
    }
  };
  return (
    <div>
      <div
        className={s.Overlay}
        onClick={handleClick}
        // style={{
        //   backgroundColor: 'black',
        //   width: '100vw',
        //   height: '100vh',
        // }}
      >
        <div className={s.Modal}>
          <img src={url} alt="#" />
        </div>
      </div>
    </div>
  );
};
