// import React, { useRef, useState } from 'react'
// import './Navbar.css'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { TiThMenu } from "react-icons/ti";
// import { RxCross1 } from "react-icons/rx";

// const Navbar = () => {
//   const[menu,setMenu]=useState("home");
//   const menuRef=useRef();

//   const openMenu=()=>{
//     menuRef.current.style.right="0";
//   }
//   const closeMenu=()=>{
//     menuRef.current.style.right="-350px";
//   }
//   return (
//     <div className='navbar'>
//       <h3>KHELAN SAHU</h3>
//       <TiThMenu onClick={openMenu}className='nav-mob-open'/>
//       <ul ref={menuRef} className="nav-menu">
//       {/* <TiThMenu /> */}
//       <RxCross1 onClick={closeMenu} className='nav-mob-close'/>
//         <li onClick={() => setMenu("home")} className={menu === "home" ? "nav-item active" : "nav-item"}><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
//         <li onClick={() => setMenu("about")} className={menu === "about" ? "nav-item active" : "nav-item"}><AnchorLink className='anchor-link' offset={50} href='#about'><p>About</p></AnchorLink></li>
//         <li onClick={() => setMenu("services")} className={menu === "services" ? "nav-item active" : "nav-item"}><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
//         <li onClick={() => setMenu("portfolio")} className={menu === "portfolio" ? "nav-item active" : "nav-item"}><AnchorLink className='anchor-link' offset={50} href='#mywork'>
//         <p>Portfolio</p></AnchorLink></li>
//         <li onClick={() => setMenu("contact")} className={menu === "contact" ? "nav-item active" : "nav-item"}><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
//       </ul>
      
//       <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
//     </div>
//   )
// }

// export default Navbar

import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // NEW
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setMenuOpen(true); // set open state
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-250px";
    setMenuOpen(false); // set closed state
  };

  const handleMenuClick = (item) => {
    setMenu(item);
    closeMenu();
  };

  return (
    <div className='navbar'>
      <h3>KHELAN SAHU</h3>

      {!menuOpen && (
        <TiThMenu onClick={openMenu} className='nav-mob-open' />
      )}

      <ul ref={menuRef} className="nav-menu">
        <RxCross1 onClick={closeMenu} className='nav-mob-close' />
        <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "nav-item active" : "nav-item"}>
          <AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("about")} className={menu === "about" ? "nav-item active" : "nav-item"}>
          <AnchorLink className='anchor-link' offset={50} href='#about'><p>About</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("services")} className={menu === "services" ? "nav-item active" : "nav-item"}>
          <AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("portfolio")} className={menu === "portfolio" ? "nav-item active" : "nav-item"}>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'><p>Portfolio</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("contact")} className={menu === "contact" ? "nav-item active" : "nav-item"}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

