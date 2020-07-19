import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function App() {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    Axios.get("https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo")
      .then(res => {
        //console.log(res.data.hits)
        setImages(res.data.hits)
      })
  }, [])

  function prevButton() {
    if (index !== 0) setIndex(index - 1)
    else setIndex(images.length - 1)
  }
  function nextButton() {
    if (index !== images.length - 1) setIndex(index + 1)
    else setIndex(0)
  }
  console.log(images[0])
  return (
    <div className="container-fluid">
      <h1 className="test-header">Carousel Test</h1>

      <div className="row mt-5 body">
        <div className="col-lg-2 image-col">
          {
            images[index - 2] &&
            <img className="owl-image" src={(images[index - 2] || 1).webformatURL}></img>
          }
        </div>
        <div className="col-lg-2 image-col">
          {
            images[index - 1] &&
            <img className="owl-image" src={(images[index - 1] || 1).webformatURL}></img>
          }
        </div>

        <div className="col-lg-4 nopadding image-col-middle">
          <img className="owl-image" src={(images[index] || 1).webformatURL}></img>
          <h4></h4>
        </div>

        <div className="col-lg-2 image-col">
          {
            images[index + 1] &&
            <img className="owl-image" src={(images[index + 1] || 1).webformatURL}></img>
          }
        </div>
        <div className="col-lg-2 image-col">
          {
            images[index + 2] &&
            <img className="owl-image" src={(images[index + 2] || 1).webformatURL}></img>
          }
        </div>
      </div>

      <div className="row mt-5 justify-content-center d-block d-sm-none mobile-button">
          <button className="prev" onClick={prevButton}> <img src="../arrow.svg"></img> </button>
          <button className="next" onClick={nextButton}><img src="../arrow.svg"></img></button>
      </div>
      <div className="row mt-5 justify-content-center navbar">
        <div className="col-2 text-right">
          <button onClick={prevButton}>Geri</button>
        </div>
        <div className="col-2 text-left">
          <button onClick={nextButton}>İleri</button>
        </div>
      </div>
    </div>
  )
}
