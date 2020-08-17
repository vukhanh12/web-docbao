import React, { Component } from 'react';
import './TopMenu.css'
import {Products} from '../pages/root'


import Web from './Web.js'
class Genk extends Component{
    constructor(props){
        super(props);
        this.state={
          products:Products
        }
        
    }
    render(){
        return (

          <div>
          <h2 className='title'>Genk</h2>
            <Web products={this.state.products}/>
          </div>

        );
    }
};

export default Genk;