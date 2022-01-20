/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import BangersLogo from '../assets/mikeloganaudio.jpg';
// import Soundcloud from '../assets/soundcloud.png';
// import Instagram from '../assets/instagram.png';
// import Twitter from '../assets/twitter.png';

import {
  StyledNavContainer,
  StyledNavBar,
  // StyledSocialButtons,
  StyledNavLinks,
  StyledMobileNav,
  StyledHamburger,
} from './Nav.styled';

// const SocialButton = ({ sitename, url, img }) => {
//   return (
//     <li>
//       <a href={url} target="_blank" rel="noreferrer">
//         <img src={img} alt={sitename} />
//       </a>
//     </li>
//   );
// };

// const NavSocialButtons = () => {
//   return (
//     <StyledSocialButtons>
//       <SocialButton
//         sitename="soundcloud"
//         url="https://soundcloud.com/mikeloganaudio"
//         img={Soundcloud}
//       />
//       <SocialButton
//         sitename="instagram"
//         url="https://www.instagram.com/mikeloganaudio/"
//         img={Instagram}
//       />
//       <SocialButton
//         sitename="twitter"
//         url="https://www.twitter.com/mikeloganaudio"
//         img={Twitter}
//       />
//     </StyledSocialButtons>
//   );
// };

const NavLinksContainer = ({ closeMenu }) => {
  return (
    <StyledNavLinks>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/music"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Music
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/activities"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Activities
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/decor-installations"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Decor & Installations
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/food"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tickets"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Tickets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/info"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Info
        </NavLink>
      </li>
    </StyledNavLinks>
  );
};

// className={() => {
//   if (isMenuOpen && scrolled) {
//     return `active navbar-scroll`;
//   }
//   if (isMenuOpen && !scrolled) {
//     return `active`;
//   }
//   if (!isMenuOpen && scrolled) {
//     return `navbar-scroll`;
//   }
//   if (!isMenuOpen && scrolled) {
//     return '';
//   }

const NavBar = ({ isMenuOpen, closeMenu, scrolled }) => {
  return (
    <StyledNavBar
      className={`${isMenuOpen ? 'active' : ''}`}
      style={{
        backgroundColor: scrolled
          ? 'var(--color-bg)'
          : 'rgba(0,0,0,0)',
      }}
    >
      <div className={scrolled ? 'navbar navbar-scroll' : 'navbar'}>
        <NavLinksContainer closeMenu={closeMenu} />
        {/* <NavLink exact to="/" className="logo">
           <img src={BangersLogo} alt="Mike Logan Audio Logo" /> 
        </NavLink> */}
        {/* <NavSocialButtons /> */}
      </div>
    </StyledNavBar>
  );
};

const MobileNav = ({ isMenuOpen, toggleMenu, scrolled }) => {
  return (
    <StyledMobileNav className={scrolled ? 'navbar-scroll' : ''}>
      <StyledHamburger
        type="button"
        onClick={toggleMenu}
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </StyledHamburger>
      <NavLink exact to="/">
        <div className="mobile-logo">
          {/* <img src={MikeLoganAudio2} alt="Mike Logan Audio Logo" /> */}
        </div>
      </NavLink>
    </StyledMobileNav>
  );
};

const Nav = () => {
  const [isMenuOpen, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });
  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <StyledNavContainer>
      <NavBar
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        scrolled={scrolled}
      />
      <MobileNav
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrolled={scrolled}
      />
    </StyledNavContainer>
  );
};

export default Nav;
