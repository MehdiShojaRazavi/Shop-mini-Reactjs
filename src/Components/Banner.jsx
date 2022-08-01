import React, { Component } from 'react'
import banner from '../image/banner.jpg';
import styles from './Banner.module.css';
class Banner extends Component {
  render() {
    return (
      <div>
        <img className={styles.Banner} src={banner} alt="banner" />
        <div className={styles.textContainer}>
          <h3>our web site</h3>
          <p>we're learning <span>React.js</span></p>
        </div>
      </div>
    )
  }
}
export default Banner;