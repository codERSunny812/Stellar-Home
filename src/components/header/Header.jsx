import Logo from '../../assets/site.png';
import { GiHamburgerMenu } from "react-icons/gi";
import './Header.css';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth h-container">
        <img src={Logo} alt="logo" width={110} />

        <OutsideClickHandler
        onOutsideClick={()=> setShowMenu(false)}>

        <div className={`h-menu ${showMenu ? 'open' : ''}`}>
          <ul className="flexCenter">
            <li>residence</li>
            <li>our values</li>
            <li>contact us</li>
            <li>get started</li>
            <button type="button" className="button">
              contact
            </button>
          </ul>
        </div>

        </OutsideClickHandler>


        <div className="menu-icon" onClick={toggleMenu}>
          <GiHamburgerMenu size={35} />
        </div>
      </div>
    </section>
  );
};

export default Header;
