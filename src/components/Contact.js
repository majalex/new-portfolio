import '../Styles/Contact.scss';
import Navigation from './Navigation'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from './AnimatedLetters'
import { gsap } from "gsap";

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    document.body.style.backgroundColor = "#ffd03e"
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    gsap.from("p", { xPercent: -200, duration: 4})
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_u26l8jd', 'template_r1hi5it', form.current, '4sHT-Sh-lEbqcrJGA')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
            Do you heve any questions? Fell free to reach me out. Lets talk about it!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
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