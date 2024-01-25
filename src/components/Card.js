import trashCan from "../images/trash-can.png";
import likeButton from "../images/LikeButton.png";

function Card ({card, id, onCardClick}) {
  const handleOnClick = () => {
    onCardClick(card);
  }
  
  return (
      <div className="card">
        <div className="element" id={id}>
          <img id="deleteButton" alt="Delete-Button" className="element__delete-button"
               src={trashCan}
          />
          <img
              src={card.link}
              alt={`Foto de ${card.name}`}
              className="element__image"
              onClick={handleOnClick}
          />
          <div className="element__content"><p className="element__description">{card.name}</p>
            <div>
              <img
                  id="likeButton"
                  alt="Like-Button"
                  className="element__like-button"
                  src={likeButton}
              />
              <p className="element__like-count">{card?.likes?.length || "" }</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;