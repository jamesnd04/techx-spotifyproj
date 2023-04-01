import axios from "axios";
import { useState } from "react";

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
    <div>
      <h1 className="text-lg">Welcome to DJ Spotify!</h1>
      <button
        onClick={getData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click to get data
      </button>
      <p>{data ? data["myattribute"] : "No data yet"}</p>
    </div>
  );
}

export default App;
