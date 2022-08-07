import React, { Component } from 'react'
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
      </div>
    )
  }
}
export default App;