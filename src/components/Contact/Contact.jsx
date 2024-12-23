import React from 'react'
import contactImage from '../../assets/contact.jpg'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsChatDotsFill} from 'react-icons/bs'
// import {hichatbubblebottomcenter} from 'react-icons/hi'
const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">

        {/* left */}
        <div className="flexColStart contact-left">
          <span className='orangeText'>
            our contact
          </span>
          <span className='primaryText'>
            easy to contact us
          </span>
          <span className='secondaryText'>
            we are always ready to help by providing the best service to you. we believe that a good place to live can make your life better.
          </span>


          <div className="flexColStart contactmodes">
            {/* first row */}
            <div className="flexStart row">


              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall  size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>
                    call</span>
                    <span className='secondaryText'>9991991991</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  call now
                </div>

              </div>


              {/* second mode  */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>
                      chat</span>
                    <span className='secondaryText'>9991991991</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  chat now
                </div>

              </div>


            </div>

            {/* second row  */}

            <div className="flexStart row">


              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>
                      video call</span>
                    <span className='secondaryText'>9991991991</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  video call now
                </div>

              </div>


              {/* second mode  */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>
                    message</span>
                    <span className='secondaryText'>9991991991</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  message now
                </div>

              </div>


            </div>



          </div>

        </div>

        <div className="contact-right">
          <div className="image-container">
            <img src={contactImage} alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact