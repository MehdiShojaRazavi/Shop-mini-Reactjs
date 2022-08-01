import React, { Component } from 'react'
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    )
  }
}
export default App;