import React, { Component } from 'react';
import './TopMenu.css'



import Web from './Web.js'
import {Products} from '../pages/root'
class ICT extends Component{
    constructor(props){
        super(props);
        this.state={
          products:Products
          }
        
    }
    render(){
        return (

          <div>
          <h2 className='title'>Tin-ICT</h2>
            <Web products={this.state.products}/>
          </div>

        );
    }
};

export default ICT;