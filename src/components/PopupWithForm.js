function PopupWithForm({name, title, id, children}) {
  return (
      <div className={`pop-up popup_type_${name}`}>
        <div className="pop-up__container">
          <img alt="Icono de cerrar" className="pop-up__close-button pop-up__close" id="close-button1" />
          <h2 className="pop-up__title">{title}</h2>
          <form className="form" id={id} noValidate name={name}>
            {children}
          </form>
        </div>
      </div>
  );
  
}

export default PopupWithForm;