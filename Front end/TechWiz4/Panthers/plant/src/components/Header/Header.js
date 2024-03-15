import React, { useRef, useEffect } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Logo from "../../images/logo/logo.jpg";
import userIcon from "../../images/Icon/userIcon.png";
import { motion } from "framer-motion";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "foodmain",
    display: "FoodMain",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "menufoodpage",
    display: "MenuFoodPage",
  },
];
function Header(props) {

  let headerRef = useRef(null);
  let totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  let menuRef=useRef(null);

  let menuTonggle=()=>menuRef.current.classList.toggle("active_menu")
  let stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunction();
    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              {/* <img src={Logo} alt="logo" /> */}
              <div>
                <h1>Foods Order Online</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuTonggle}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="cart_icon">
                <Link to="/cart"><i class="ri-shopping-bag-line"></i></Link>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className="mobile_menu">
                <span onClick={menuTonggle}>
                  <i class="ri-menu-line"></i>
                </span> 
              </div>
            </div>


          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
