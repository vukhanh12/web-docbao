import React, { Component } from 'react';
import {Products} from '../pages/root'
import './TopMenu.css'


import Web from './Web.js'
class Internet extends Component{
    constructor(props){
        super(props);
        this.state={
          products:Products
          }
        
    }
    render(){
        return (

          <div>
          <h2 className='title'>Internet</h2>
            <Web products={this.state.products}/>
          </div>

        );
    }
};

export default Internet;