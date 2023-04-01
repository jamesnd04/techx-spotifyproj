import axios from "axios";
import { useState } from "react";
import './App.css';


function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/");
      setData(response.data);
      console.log("fetched data");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="">
      <h1 class="h1">Welcome to DJ Spotify!</h1>
      <p1 class ="p1">This API will recommend new songs to users based on what they have previously listened to.</p1>
      <div class="vertical-center">
        <img src ="https://logosmarcas.net/wp-content/uploads/2020/09/Spotify-Emblema.png" alt="Spotify Logo" style={{width: '400px'}}></img>
      </div>  
      <div class="vertical-center1"><button
        onClick={getData}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded display:flex margin:auto"
        >
        Click to Login
      </button></div>
      <div class="vertical-center3">
        <p className="text-white">{data ? data["myattribute"] : "No data yet"}</p>
        </div>
    </div>
  );
}

export default App;
