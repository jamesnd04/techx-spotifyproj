import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  const extractSeeds = (recentlyPlayedData) => {
    const seedArtists = [];
    const seedTracks = [];

    recentlyPlayedData.items.forEach((item) => {
      const artistIds = item.track.artists.map((artist) => artist.id);

      seedArtists.push(...artistIds);

      seedTracks.push(item.track.id);
    });

    const uniqueSeedArtists = [...new Set(seedArtists)];
    const uniqueSeedTracks = [...new Set(seedTracks)];

    const seedLimit = 5;
    const seedArtistsLimit = Math.min(
      Math.floor(seedLimit / 2),
      uniqueSeedArtists.length
    );
    const seedTracksLimit = seedLimit - seedArtistsLimit;

    const limitedSeedArtists = uniqueSeedArtists.slice(0, seedArtistsLimit);
    const limitedSeedTracks = uniqueSeedTracks.slice(0, seedTracksLimit);

    return {
      seedArtists: limitedSeedArtists,
      seedTracks: limitedSeedTracks,
    };
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    const getUserInfo = async () => {
      if (token) {
        console.log(token);
        try {
          const { data } = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUserInfo();

    const getRecommendedSongs = async () => {
      if (token) {
        try {
          console.log("HERETOKEN:", token);
          const { data } = await axios.get(
            "https://api.spotify.com/v1/me/player/recently-played",
            {
              headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              params: {
                limit: 10,
                after: 1484811043508,
              },
            }
          );
          // console.log(data);
          const { seedTracks, seedArtists } = extractSeeds(data);

          // console.log("seed info:", seedInfo);

          const { data: recommendedSongs } = await axios.get(
            "https://api.spotify.com/v1/recommendations",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                seed_artists: seedArtists.join(","),
                seed_tracks: seedTracks.join(","),
                limit: 10,
              },
            }
          );
          console.log(recommendedSongs);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getRecommendedSongs();
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // const login = () => {
  //   // TODO: Login function using OUATH
  // };

  return (
    <div class="">
      <h1 class="h1">Welcome to DJ Spotify!</h1>
      <p1 class="p1">
        This API will recommend new songs to users based on what they've
        previously listened to.
      </p1>
      <div class="vertical-center-logo">
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/09/Spotify-Emblema.png"
          alt="Spotify Logo"
          style={{ width: "400px" }}
        ></img>
      </div>
      <a
        href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=user-read-recently-played%20user-top-read`}
      >
        <div class="loginButton">
          <button
            // onClick={login}
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded display:flex margin:auto"
          >
            Click to Login
          </button>
        </div>
      </a>
      <div class="logoutButton">
        <button
          onClick={logout}
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded display:flex margin:auto"
        >
          Click to logout
        </button>
      </div>
      <div class="audiobar">
        <audio controls>
          <source
            src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
            type="audio/mpeg"
          ></source>
        </audio>
      </div>
    </div>
  );
}

export default App;
