import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Shelf } from './shelf/shelf';
import { AddBook } from './addBook/addBook';
import { ViewBook } from './viewBook/viewBook';
import { Notifications } from './notifications/notifications';

export default function App() {
    return (
        <BrowserRouter>
        <div className="body">
        <header className="container-fluid">
            <nav className="navbar fixed-top">
                <div className="navbar-brand">
                    <td><img src="/bookstack.jpg" width="70" height="70" /></td>
                    <td><h1>My Bookshelf</h1></td>
                </div>
                <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="shelf">Bookshelf</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="addBook">Add Book</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="viewBook">View Book</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="notifications">Notifications</NavLink>
                    </li>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/shelf' element={<Shelf />} />
            <Route path='/addBook' element={<AddBook />} />
            <Route path='/viewBook' element={<ViewBook />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Kaylie Reinhart</span>
                <a className="text-reset" href="https://github.com/kayliereinhart/260startup.git">GitHub</a>
            </div>
        </footer>
    </div>
    </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}