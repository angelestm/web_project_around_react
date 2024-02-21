import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import {useEffect, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUSer] = useState(null);
  const [cards, setCards] = useState([]);
  
  
  useEffect(() => {
    api.getURL("/users/me").then((userInfo) => {
      setCurrentUSer(userInfo);
    });
  }, []);
  
  useEffect(() => {
    api.getURL("/cards").then((cards) => {
      setCards(cards);
    });
  }, []);
  
  useEffect(() => {
    function handleKeyDown (event) {
      if (event.key === "Escape") {
        setSelectedCard(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  
  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if (isLiked) {
      api
          .deleteURL(`/cards/likes/${card._id}`)
          .then((newCard => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
          }));
    } else {
      api
          .updateURL("PUT", `/cards/likes/${card._id}`)
          .then((newCard => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
          }));
    }
  }
  
  function handleCardDelete(card) {
    api.deleteURL(`/cards/${card._id}`)
        .then(() => {
          const newCards = cards.filter((c) => c._id !== card._id)
          setCards(newCards);
        })
  }
  
  function handleAddPlaceSubmit(card) {
    api.updateURL("POST", "/cards", card)
        .then((newCard => {
          setCards([newCard, ...cards]);
          setIsAddPlacePopupOpen(false);
        }))
  }
  
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  
  function handleUpdateUser(data) {
    api.updateURL("PATCH",
        "/users/me",
        data
    ).then(() => {
      setCurrentUSer({
        ...currentUser,
        ...data,
      });
      setIsEditProfilePopupOpen(false);
    })
  }
  
  function handleUpdateAvatar(data) {
    api.updateURL("PATCH", "/users/me/avatar", data)
        .then((userData) => {
          setCurrentUSer(userData);
          setIsEditAvatarPopupOpen(false);
        })
  }
  
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  
  return (
      <div className="root">
        <div className="page">
          <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main
                onEditAvatarClick={handleEditAvatarClick}
                onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick}
                isEditAvatarPopupOpen={isEditAvatarPopupOpen}
                isAddPlacePopupOpen={isAddPlacePopupOpen}
                isEditProfilePopupOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onCardClick={handleCardClick}
                selectedCard={selectedCard}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            >
              <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
              />
              <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}/>
              <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
              />
              <ImagePopup
                  title={selectedCard?.name || ""}
                  image={selectedCard?.link || ""}
                  isOpen={!!selectedCard}
                  onClose={closeAllPopups}
              />
            </Main>
            <Footer />
          </CurrentUserContext.Provider>
        </div>
      </div>
  );
}

export default App;
