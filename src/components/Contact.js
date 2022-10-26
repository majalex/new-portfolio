import '../Styles/Contact.scss';
import Navigation from './Navigation'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from './AnimatedLetters'
import { gsap } from "gsap";
import Form from './Functionalities/Form'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    document.body.style.backgroundColor = "#ffd03e"
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 1500)
    gsap.from("p", { xPercent: -200, duration: 4})
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])


  return (

    <div className='Contact'>
      <Navigation></Navigation>
      <div className="contact-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={1}
            />
          </h1>
          <p>
          Do you have any questions? Feel free to reach me out. Let's talk about it!
          </p>
          <Form />
        </div>
        <div className="map-wrap">
          <MapContainer center={[54.515, 18.54]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[54.515, 18.54]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          <div className="info-map">
            Aleksander Maj,
            <br />
            Gdynia, Poland
            <br />
            <span>majalex@outlook.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact