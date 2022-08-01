import React, { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li>Home Page</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
