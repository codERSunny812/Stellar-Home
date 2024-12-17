
import Logo from '../../assets/Logo.png'
import './Header.css'

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className="h-container">
            <img src={Logo} alt="" width={130}/>

            <div className="h-menu">
                <ul>
                    <li>residence</li>
                    <li>our values</li>
                    <li>contact us</li>
                    <li>get started</li>
                </ul>
                <button type="button">
                    <button>contact</button>
                </button>
            </div>
        </div>

    </section>
  )
}

export default Header