import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours, setTours] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const fetchTours = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTours( data);
    console.log(data);
  }

  const deleteTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id)
    setTours(filteredTours)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchTours()
    setIsLoading(false)
  }, [])

  if(isLoading){
    return (
    <div className="main">
     <Loading />
    </div>
    )
  }
  if(tours.length > 0){
      return (
      <div className="main">
      <h2 className="title">Our Tours</h2>
        <Tours tours={tours} deleteTour={deleteTour} />
      </div>
    )
  } else {
    return (
      <div className="main">
      <p className='title'>No Tours to show!</p>
      <button className='btn' onClick={() => fetchTours()}>refresh</button>
      </div>
      )
    }
}

export default App
