import React from 'react';
import { useHistory } from 'react-router-dom';

const BookCard = ({ title, author, price, image }) => {
  const history = useHistory();

  const buyBook = () => {
    history.push('/cliente');
  };

  return (
    <div className="book-card">
      <img className="book-image" src={image} alt="Book cover" />
      <div className="book-details">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Price: R${price}</p>
        <button onClick={buyBook}>Buy</button>
      </div>
    </div>
  );
};

export default BookCard;
