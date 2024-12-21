
import Logo from '../../assets/site.png'
import './Header.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className="flexCenter  innerWidth h-container  ">
            <img src={Logo} alt="logo" width={110}/>

            <div className="h-menu flexCenter paddings">
                <ul className='flexCenter'>
                    <li>residence</li>
                    <li>our values</li>
                    <li>contact us</li>
                    <li>get started</li>
                </ul>
                <button type="button" className='button'>
                    contact
                </button>
            </div>
        </div>

    </section>
  )
}

export default Header