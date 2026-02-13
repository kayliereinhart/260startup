import React from 'react';
import './addBook.css';

export function AddBook() {
  return (
    <main className="container-fluid text-center">
      <h1>Add Book</h1>

      <form method="get" action="shelf">
        <div className="input-group mb-3">
          <span className="input-group-text">Title</span>
          <input className="form-control" type="text" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Author</span>
          <input className="form-control" type="text" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Rating</span>
          <div className="rating">
            <input type="radio" name="rating" id="star5" value="5" />
            <label for="star5">★</label>

            <input type="radio" name="rating" id="star4" value="4" />
            <label for="star4">★</label>

            <input type="radio" name="rating" id="star3" value="3" />
            <label for="star3">★</label>

            <input type="radio" name="rating" id="star2" value="2" />
            <label for="star2">★</label>

            <input type="radio" name="rating" id="star1" value="1" />
            <label for="star1">★</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Review</span>
          <textarea className="form-control"></textarea>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Height</span>
          <input className="form-control" type="number" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Width</span>
          <input className="form-control" type="number" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Color</span>
          <select className="form-control" id="color" name="color">
            <option className="red">Red</option>
            <option className="orange">Orange</option>
            <option className="yellow">Yellow</option>
            <option className="green">Green</option>
            <option className="blue">Blue</option>
            <option className="purple">Purple</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
}