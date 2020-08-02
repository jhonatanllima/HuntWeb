import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  componentDidMount(){ // usamospra quando queremos modificar o estado que veio
    this.loadProducts();
  }

  loadProducts = async () =>{
    const response = await api.get('/products'); 
    // usamos a flecha pra poder referenciar e utilizar exemplo o this.
    console.log(response.data.docs);
  };

  render () {
    return <h1>Hello JVB</h1>
  }
}