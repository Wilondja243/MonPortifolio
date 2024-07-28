import * as React from 'react';
import { sculptureList } from './javaScript/data.js';
import './styleSheet/App.css';




export default function Gallery() {
  const [index, setIndex] = React.useState(0);
  const [showMore, setShowMore] = React.useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div className='gallery-container'>
      <button onClick={handleNextClick}>
        Suivant
      </button>
      <div className={`gallery ${showMore?'sho-more':''}`}>
        <h2>
          <i>{sculpture.name} </i>
          par {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} sur {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>{showMore?'Masquer':'Afficher'} les details</button>
        {showMore && <p>{sculpture.description}</p>}
        <img  src={sculpture.url} alt={sculpture.alt} />
      </div>
    </div>
  );
}

