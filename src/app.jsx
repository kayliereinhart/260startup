import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body">
        <header class="container-fluid">
            <nav class="navbar fixed-top">
                <div class="navbar-brand">
                    <td><img src="/bookstack.jpg" width="70" height="70" /></td>
                    <td><h1>My Bookshelf</h1></td>
                </div>
                <menu class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="shelf.html">Bookshelf</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="addBook.html">Add Book</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="viewBook.html">View Book</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="notifications.html">Notifications</a>
                    </li>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>

        <footer>
            <div class="container-fluid">
                <span class="text-reset">Kaylie Reinhart</span>
                <a class="text-reset" href="https://github.com/kayliereinhart/260startup.git">GitHub</a>
            </div>
        </footer>
    </div>
    );
}