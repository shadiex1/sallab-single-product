import React, { Component } from "react";
import styles from "./menu.module.scss";
import {CartIcon,UserIcon,SearchIcon} from "../../svg/svg"
import {NavLink , Link} from "react-router-dom"
import logo from "../../assets/menu-image.png";
class Menu extends Component {
  
    render(){
        return (
          <div className={styles.menu}>           
          <div className={styles.navbar}>
            <div className={styles.logo}>
             
              <NavLink to={process.env.PUBLIC_URL+"/"}> <img src={logo} alt="logo" /></NavLink>
            </div>
           
            <div className={styles.icons}>
              <div className={styles.icon} onClick={this.ToggleSearchbar}>
              <SearchIcon />
              </div>
              <Link className={styles.usericon} to={process.env.PUBLIC_URL+"/signin"}>
              <UserIcon />
              </Link>
              <div className={styles.icon} onClick={this.ToggleCart}>
              <CartIcon />
              </div>
            </div>
          </div>
          <div className={styles.NavLinks}>
              <ul>
                  <li className={styles.navLink}>products</li>
                  <li className={styles.navLink}>brands</li>
                  <li className={styles.navLink}>collections </li>
              </ul>
          </div>
          </div>
        );
    }
}

export default Menu