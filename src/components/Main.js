import profilePhoto from "../images/profile__photo.png"
import editButton from "../images/EditButton.png"
import addButton from "../images/AddButton.png"
function Main({onEditAvatarClick, onEditProfileClick,onAddPlaceClick}) {
  return (
      <main>
        <section className="profile">
          <div className="profile__photo-overlay"
               onClick={onEditAvatarClick}
          ></div>
          <img id="profilePhoto" alt="profile" className="profile__photo" src={profilePhoto} />
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
            <img id="deleteButton" alt="Delete-Button" className="element__delete-button" />
            <img src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
                 alt="Foto del Valle de Yosemite" className="element__image" />
            <div className="element__content"><p className="element__description">Valle de Yosemite</p>
              <div>
                <img id="likeButton" alt="Like-Button" className="element__like-button" />
                <p className="element__like-count">3</p>
              </div>
            </div>
          </div>
        </template>
      </main>
  );
}

export default Main;
