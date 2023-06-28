import { useState } from "react";

const Tour = ({tour, deleteTour}) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="single-tour">
      <img src={tour.image} alt="tour photo" />
      <div className="tour">
        <h4>{tour.name}</h4>
        <div className="tour-price">{tour.price}</div>
      </div>
      <footer>{ readMore ? tour.info : `${tour.info.substring(0, 120)}` }<button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button></footer>
      <button className='delete-btn' onClick={() => deleteTour(tour.id)}>Not Interested</button>
    </div>
  );
};

export default Tour;
