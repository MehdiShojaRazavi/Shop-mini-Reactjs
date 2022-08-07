import React, { Component } from 'react'
import Card from './Card';
import iphone1 from '../image/iphone13-1.jpg';
import iphone2 from '../image/iphone13-2.jpg';
import iphone3 from '../image/iphone13-3.jpg';
import iphone4 from '../image/iphone13-4.jpg';
import styles from './Cards.module.css';

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card 
          image={iphone1}
          productName="iphone 13 mini #1"
          price="3100 $"
        />
        <Card 
          image={iphone2}
          productName="iphone 13 mini #2"
          price="3200 $"
        />
        <Card 
          image={iphone3}
          productName="iphone 13 mini #3"
          price="3300 $"
        />
        <Card 
          image={iphone4}
          productName="iphone 13 mini #4"
          price="3400 $"
        />
      </div>
    )
  }
}
export default Cards;