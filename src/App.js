import React from 'react';
import './App.css';
import PhotoSearch from './searchPhotos';


function App() {
  return (
    <div className="App">
         <div className="container">
        <h1 className="title">Photo Search</h1>
        <PhotoSearch />
      </div>
    </div>
  );
}

export default App;

