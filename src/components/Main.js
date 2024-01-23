import profilePhoto from "../images/profile__photo.png"
import editButton from "../images/EditButton.png"
import addButton from "../images/AddButton.png"
import closeButton from "../images/CloseIcon.png";
import PopupWithForm from "./PopupWithForm";

function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, isOpen, onClose}) {
  const [
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
  ] = isOpen;
  return (
    <main>
      <section className="profile">
        <div className="profile__photo-overlay"
             onClick={onEditAvatarClick}
        ></div>
        <img id="profilePhoto" alt="profile" className="profile__photo" src={profilePhoto}/>
        <div className="profile__info">
          <h2 className="profile__name">Jacques Cousteau</h2>
          <h2 className="profile__description">Explorador</h2>
          <img id="editButton" alt="Edit-Button" className="profile__edit-button" src={editButton}
               onClick={onEditProfileClick}
          />
        </div>
        <div className="profile__add-button-container">
          <img id="addButton" alt="Add-Button" className="profile__add-button" src={addButton}
               onClick={onAddPlaceClick}
          />
        </div>
      </section>
      <section className="elements">
      </section>

      <template className="card">
        <div className="element" id="card-0">
          <img id="deleteButton" alt="Delete-Button" className="element__delete-button"/>
          <img src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
               alt="Foto del Valle de Yosemite" className="element__image"/>
          <div className="element__content"><p className="element__description">Valle de Yosemite</p>
            <div>
              <img id="likeButton" alt="Like-Button" className="element__like-button"/>
              <p className="element__like-count">3</p>
            </div>
          </div>
        </div>
      </template>
      
      
      {/* Pop up Edit Profile */}
      <PopupWithForm
          id={"pop-up1"}
          name={"edit-profile"}
          isOpen={isEditProfilePopupOpen}
          title={"Editar perfil"}
          onClose={onClose}
      >
        <form className="form" id="form1" noValidate>
          <input
              className="form__input"
              id="user-name"
              type="text"
              placeholder="Nombre"
              maxLength="40"
              minLength="2"
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
              required
              name="about"
          />
          <span className="user-about-error"></span>
          <button type="submit" className="button">Guardar</button>
        </form>
      </PopupWithForm>

      {/* Pop up Add new place */}
      <PopupWithForm
          id={"pop-up2"}
          name={"new-place"}
          isOpen={isAddPlacePopupOpen}
          title={"Nuevo Lugar"}
          onClose={onClose}
      >
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
      </PopupWithForm>

      {/* Pop up With Image */}
      <div id="pop-up3" className="pop-up popup_type_image">
        <div className="zoom-pop-up">
          <img id="image-popUp" className="zoom-pop-up__image"/>
          <img alt="Icono de cerrar" className="zoom-pop-up__close-button pop-up__close" id="close-button3"
               src={closeButton}/>
          <h2 id="popUP-img-title" className="zoom-pop-up__title"></h2>
        </div>
      </div>

      {/* Pop up Are you sure? */}
      <div className="pop-up" id="pop-up4">
        <div className="pop-up__delete-container">
          <img alt="Icono de cerrar" className="pop-up__close-button pop-up__close" id="close-button4"/>
          <h2 className="pop-up__delete-title">¿Estás seguro?</h2>
          <button type="submit" className="button">Sí</button>
        </div>
      </div>

      {/* Pop up Edit Avatar */}
      <PopupWithForm
          id={"pop-up5"}
          name={"edit-avatar"}
          isOpen={isEditAvatarPopupOpen}
          title={"Cambiar foto de perfil"}
          onClose={onClose}
      >
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
      </PopupWithForm>
    </main>
  );
}

export default Main;
