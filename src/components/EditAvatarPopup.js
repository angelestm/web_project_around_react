import PopupWithForm from "./PopupWithForm";
import {useContext, useRef} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef(currentUser?.avatar ?? "");
  
  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
      <PopupWithForm
          id={"pop-up5"}
          name={"edit-avatar"}
          isOpen={isOpen}
          title={"Cambiar foto de perfil"}
          onClose={onClose}
      >
        <form className="form" id="form3" onSubmit={handleSubmit} noValidate>
          <input
              className="form__input"
              id="image-profile"
              type="url"
              placeholder="Enlace a la imagen"
              required
              name="link"
              ref={avatarRef}
          />
          <span className="image-link-error"></span>
          <button type="submit" className="button">Guardar</button>
        </form>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;