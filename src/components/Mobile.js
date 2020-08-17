import React, { Component } from 'react';
import {Products} from '../pages/root'
import './TopMenu.css'


import Web from './Web.js'
class Mobile extends Component{
    constructor(props){
        super(props);
        this.state={
          products:Products
          }
        
    }
    render(){
        return (

          <div>
          <h2 className='title'>Mobile</h2>
            <Web products={this.state.products}/>
          </div>

        );
    }
};

export default Mobile;