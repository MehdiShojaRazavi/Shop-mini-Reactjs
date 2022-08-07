import React, { Component } from 'react'
import styles from './Card.module.css';
class Card extends Component {
  render() {
    const { image, productName, price } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt="Card" />
        <h3>{productName}</h3>
        <p>{price}</p>
      </div>
    )
  }
}
export default Card;