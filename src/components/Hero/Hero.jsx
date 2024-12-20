import './Hero.css';
import image from '../../assets/Home_1.jpg'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings flexCenter innerWidth hero-container">

            {/* leftside */}

             <div className="flexColStart hero-content">
                
                <div className="hero-title">
                      <div className="orange-circle" />
                    <h1>
                        discover <br/> 
                        most suitable <br/>
                        property
                    </h1>

                </div>

                <div className="flexColStart hero-description">
                    <span className='secondaryText'>find a variety of properties that suits you very easily</span>
                    <span className='secondaryText ' >forgot all the difficulties in finding residence for you</span>
                </div>


                <div className="flexCenter hero-search-bar">
                  <HiLocationMarker color='var(--blue)' size={25}/>
                  <input type="text"/>
                  <button className="button">search</button>
                </div>


                <div className="flexCenter hero-stats">
                    {/* stats 1 */}
                      <div className="flexColCenter hero-stats-content">
                        <span>
                            <CountUp start={8000} end={9000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                premium products
                            </span>
                    </div>
                    {/* stats 2 */}
                      <div className="flexColCenter hero-stats-content">
                        <span>
                            <CountUp end={50} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                happy customers
                            </span>
                    </div>
                    {/* stats 3 */}
                     <div className="flexColCenter hero-stats-content">
                        <span>
                            <CountUp  end={100} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                award wining
                            </span>
                    </div>

                </div>

             </div>


             {/* right */}

             <div className="hero-image">
                <div className="image-container">
                    <img src={image} alt="" />
                </div>
             </div>


        </div>
    </section>
  )
}

export default Hero