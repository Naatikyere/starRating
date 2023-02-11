import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {FaStar} from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

//create star component
function Star({ selected = false, onSelect }) {
  return (
    <FaStar
      color={ selected ? 'Red' : 'gray' }
      onClick={onSelect}
    />
  );
}
function StarRating({ totalstars = 5 }) {
  // use the useState
  const [selectstars, setSelectstars] = useState(0)
  return createArray(totalstars).map((n, i) => (
    <Star key={ i }
      selected={ selectstars > i }
      onSelect={ () => setSelectstars(i + 1) }
    />
  ))
}

function App() {
  return (
    <StarRating  />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


