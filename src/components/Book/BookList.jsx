import React from 'react';
import BookCard from './BookCard';

const BookList = () => {
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 19.99,
      image: 'book1.jpg',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      price: 24.99,
      image: 'book2.jpg',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      price: 14.99,
      image: 'book3.jpg',
    },
    {
      title: 'Book 4',
      author: 'Author 4',
      price: 29.99,
      image: 'book4.jpg',
    },
  ];

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
};

export default BookList;
