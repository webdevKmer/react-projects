import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  
  const prevPerson = () => {
    if(index === 0) {
      setIndex(3)
    } else {
      setIndex(prev => prev - 1)
    }
  }
  
  const nextPerson = () => {
    if(index === 3) {
      setIndex(0)
    } else {
      setIndex(prev => prev + 1)
    }
  }
  
  const randomPerson = () => {
    setIndex(Math.floor(Math.random()*people.length))
  }
  const person = people[index]

  return (
      <div className="review" key={person.id}>
      <div className="img-container">
        <img src={person.image} alt="" className='person-img'/>
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h3 className="author">{person.name}</h3>
      <h3 className="job">{person.job}</h3>
      <p className="info">{person.text}</p>
      <div className="">
      <div className="">
      <FaChevronLeft onClick={prevPerson} className='prev-btn'/>
      <FaChevronRight onClick={nextPerson} className="next-btn"/>
      </div>
      </div>
      <button onClick={randomPerson} className='random-btn'>surprise me</button>
      </div>
    )}
  

export default Review;
