import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'David',
      people: ['David','Christine']
    }
  };




  render() {
    return (
      <div>
        <Navbar myName={this.state.name}/>
        <Routes>
          <Route path='/' element={<Home />}/> {/* Path takes in the route and the element */}
          <Route path='/about' element={<About us={this.state.people}/>}/>
        </Routes>
        </div>
    )
  }
}