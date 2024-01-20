import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import closeButton from "../images/CloseIcon.png"
function App() {
  
  function handleEditAvatarClick () {
    document.querySelector("#pop-up5").classList.toggle("popup_opened");
  }
  function handleEditProfileClick () {
    document.querySelector(".popup_type_edit-profile").classList.toggle("popup_opened");
  }
  
  function handleAddPlaceClick () {
    document.querySelector(".popup_type_new-place").classList.toggle("popup_opened");
  }
  
  return (
      <>
    <div className="root">
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />
    </div>
    
    <div>
      <div className="pop-up popup_type_edit-profile" id="pop-up1">
        <div className="pop-up__container">
          <img alt="Icono de cerrar" className="pop-up__close-button pop-up__close" id="close-button1" src={closeButton}/>
          <h2 className="pop-up__title">Editar perfil</h2>
          <form className="form" id="form1" noValidate>
            <input
                className="form__input"
                id="user-name"
                type="text"
                placeholder="Nombre"
                maxLength="40"
                minLength="2"
                value="Jacques Cousteau"
                required
                name="name"
            />
            <span className="user-name-error"></span>
            <input
                className="form__input" id="user-about"
                type="text"
                placeholder="Acerca de mí"
                maxLength="200"
                minLength="2"
                value="Explorador"
                required
                name="about"
            />
            <span className="user-about-error"></span>
            <button type="submit" className="button">Guardar</button>
          </form>
        </div>
      </div>
      <div className="pop-up popup_type_new-place" id="pop-up2">
        <div className="pop-up__container">
          <img alt="Icono de cerrar" className="pop-up__close-button pop-up__close" id="close-button2" src={closeButton} />
          <h2 className="pop-up__title">Nuevo Lugar</h2>
          <form className="form" id="form2" noValidate>
            <input
                className="form__input"
                id="title"
                type="text"
                placeholder="Titulo"
                maxLength="30"
                minLength="2"
                required
                name="name"
            />
            <span className="title-error"></span>
            <input
                className="form__input"
                id="image-link"
                type="url"
                placeholder="Enlace a la imagen"
                required
                name="link"
            />
            <span className="image-link-error"></span>
            <button type="submit" className="button">Crear</button>
          </form>
        </div>
      </div>
      <div id="pop-up3" className="pop-up popup_type_image">
        <div className="zoom-pop-up">
          <img id="image-popUp" className="zoom-pop-up__image" />
          <img alt="Icono de cerrar" className="zoom-pop-up__close-button pop-up__close" id="close-button3" src={closeButton}/>
          <h2 id="popUP-img-title" className="zoom-pop-up__title"></h2>
        </div>
      </div>
      <div className="pop-up" id="pop-up4">
        <div className="pop-up__delete-container">
          <img alt="Icono de cerrar" className="pop-up__close-button pop-up__close" id="close-button4" />
          <h2 className="pop-up__delete-title">¿Estás seguro?</h2>
          <button type="submit" className="button">Sí</button>
        </div>
      </div>
      <div className="pop-up popup_type_edit-avatar" id="pop-up5">
        <div className="pop-up__image-container">
          <img alt="Icono de cerrar" className="pop-up__close-button pop-up__close" id="close-button5" />
          <h2 className="pop-up__title">Cambiar foto de perfil</h2>
          <form className="form" id="form3" noValidate>
            <input
                className="form__input"
                id="image-profile"
                type="url"
                placeholder="Enlace a la imagen"
                required
                name="link"
            />
            <span className="image-link-error"></span>
            <button type="submit" className="button">Guardar</button>
          </form>
        </div>
      </div>
    </div>

    
    
    </div>
    </>
  );
}

export default App;
