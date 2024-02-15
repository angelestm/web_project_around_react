import PopupWithForm from "./PopupWithForm";
import {useState} from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  
  function handleChange(evt) {
    if (evt.target.name === "name") {
      setName(evt.target.value);
    }else  {
      setLink(evt.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }
  
  return(
      <PopupWithForm
          id={"pop-up2"}
          name={"new-place"}
          isOpen={isOpen}
          title={"Nuevo Lugar"}
          onClose={onClose}
      >
        <form className="form" id="form2" onSubmit={handleSubmit} noValidate>
          <input
              className="form__input"
              id="title"
              type="text"
              placeholder="Titulo"
              maxLength="30"
              minLength="2"
              required
              name="name"
              onChange={handleChange}
          />
          <span className="title-error"></span>
          <input
              className="form__input"
              id="image-link"
              type="url"
              placeholder="Enlace a la imagen"
              required
              name="link"
              onChange={handleChange}
          />
          <span className="image-link-error"></span>
          <button type="submit" className="button">Crear</button>
        </form>
      </PopupWithForm>
  )
}

export default AddPlacePopup;