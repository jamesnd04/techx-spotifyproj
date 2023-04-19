import axios from "axios";
import { useState } from "react";
import './App.css';



function App() {
  const login = () => {
    // TODO: Login function using OUATH
  }

  return (
    <div class="">
      <h1 class="h1">Welcome to DJ Spotify!</h1>
      <p1 class ="p1">This API will recommend new songs to users based on what they've previously listened to.</p1>
      <div class="vertical-center-logo">
        <img src ="https://logosmarcas.net/wp-content/uploads/2020/09/Spotify-Emblema.png" alt="Spotify Logo" style={{width: '400px'}}></img>
      </div>  
      <div class="loginButton"><button
        onClick={login}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded display:flex margin:auto"
        >
        Click to Login
      </button></div>
      <div class="newPlaylistB">
        <button
        onClick={event =>  window.location.href='/Playlist'}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded display:flex margin:auto"
        >
        Playlist Page
      </button></div>
    </div>
  );
}

export default App;
