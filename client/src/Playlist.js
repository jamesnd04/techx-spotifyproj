import axios from "axios";
import { useState } from "react";
import './Playlist.css';


function Playlist() {
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
        <h1 class="h1">Your Playlist!</h1>
        <div class="newPlaylistC"><button
        onClick={getData}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-8 px-10 rounded display:flex margin:auto"
        >
        Get Playlist   
      </button></div>
        <div class="vertical-center3">
        <p className="text-white">{data ? data["myattribute"] : "No data yet"}</p>
        </div>
     </div>
  );
}

export default Playlist;
