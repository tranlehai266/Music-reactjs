import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./TracklList";
import './App.css'



function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
