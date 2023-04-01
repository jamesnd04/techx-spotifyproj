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

  const [playlist, setPlaylist] = useState(null);

  const getPlaylist = async () => {
    try {
      // recode so that this portion goes to the next page with all relevant information
      const response = await axios.get("http://127.0.0.1:8000/");
      setData(response.data);
      console.log("fetched data");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="">
     </div>
  );
}

export default Playlist;
