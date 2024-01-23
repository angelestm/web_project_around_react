import closeButton from "../images/CloseIcon.png";

function PopupWithImage() {
  return (
      <div id="pop-up3" className="pop-up popup_type_image">
        <img id="image-popUp" className="zoom-pop-up__image"  alt="images"/>
        <img alt="Icono de cerrar" className="zoom-pop-up__close-button pop-up__close" id="close-button3" src={closeButton}/>
        <h2 id="popUP-img-title" className="zoom-pop-up__title"></h2>
      </div>  
        );
}

export default PopupWithImage;