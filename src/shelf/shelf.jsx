import React from 'react';
import './shelf.css';

export function Shelf() {
  return (
    <main className="container-fluid text-center">
      <h1>Bookshelf</h1>

      <p>"I like good strong words that mean something..." - Louisa May Alcott, Little Women</p>

      <div id="bookshelf">
        <div className="row align-items-end">
          <div className="book col-1">
            <a className="spine" href="viewBook">Title</a>
          </div>
        </div>
        <div className="row align-items-end"></div>
        <div className="row align-items-end"></div>
      </div>
    </main>
  );
}