import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import Product from './Product';
import EditProduct from './EditProduct';

class App extends Component {
  state = { product: {}, editing: false }

  componentDidMount() {
    $.ajax({
      url: 'http://challenge.eliteworks.com/product?api_key=taylorwu21@gmail.com',
      type: 'GET'
    }).done( res => {
      // Formatting Data string to an object
      const stringJSON = res.data.product.data.replace(/'/g, '"');
      res.data.product.data = JSON.parse(stringJSON);
      this.setState({ product: res.data.product })
    }).fail( data => {
      console.log(data);
    });
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  }

  handleSubmit = (name, description, imageUrl, price, category) => {
    $.ajax({
      url: 'http://challenge.eliteworks.com/product/set?api_key=taylorwu21@gmail.com',
      type: 'POST',
      dataType: 'JSON',
      data: { name, description, data: `{'imageUrl': '${imageUrl}', 'price': '${price}', 'category': '${category}'}` }
    }).done( res => {
      this.setState({ product: { name, description, data: {imageUrl, price, category} } });
      this.toggleEditing();
    }).fail( data => {
      console.log('fail', data);
    })
  }

  render() {
    return (
      <div>
        <nav className='blue'>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Elite Work</a>
          </div>
        </nav>
        <div className='row container'>
          <div className='col s12 m6'>
            <Product product={this.state.product} toggleEditing={this.toggleEditing} editing={this.state.editing} />
          </div>
          <div className='col s12 m6'>
            {
              this.state.editing
            ?
              <EditProduct product={this.state.product} handleSubmit={this.handleSubmit} toggleEditing={this.toggleEditing} />
            :
              ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
