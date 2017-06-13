import React, { Component } from 'react';

class EditProduct extends Component {

  submitForm = (e) => {
    e.preventDefault();
    const { name, description, imageUrl, price, category, form } = this.refs;
    this.props.handleSubmit(name.value, description.value, imageUrl.value, price.value, category.value);
    form.reset();
  }

  render() {
    const { name, description, data: { category, imageUrl, price } } = this.props.product;
    return(
      <form onSubmit={this.submitForm} ref='form'>
        <div className="input-field">
          <input
            id="name"
            type="text"
            className="validate"
            defaultValue={name}
            ref="name"
          />
          <label className='active' htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input
            id="description"
            type="text"
            className="validate"
            defaultValue={description}
            ref="description"
          />
          <label className='active' htmlFor="description">description</label>
        </div>
        <div className="input-field">
          <input
            id="imageUrl"
            type="text"
            className="validate"
            defaultValue={imageUrl}
            ref="imageUrl"
          />
          <label className='active' htmlFor="imageUrl">Image Url</label>
        </div>
        <div className="input-field">
          <input
            id="price"
            type="text"
            className="validate"
            defaultValue={price}
            ref="price"
          />
          <label className='active' htmlFor="price">Price</label>
        </div>
        <div className="input-field">
          <label>Category</label>
          <br />
          <br />
          <select className="browser-default" ref="category">
            <option value={`${category}`} disabled selected>{category}</option>
            <option value="Electronic">Electronic</option>
            <option value="Clothing">Clothing</option>
            <option value="Hardware">Hardware</option>
          </select>
        </div>
        <br />
        <button type='submit' className='btn'>Update Product</button>
        <button onClick={this.props.toggleEditing} className='btn red'>Cancel</button>
      </form>
    )
  }
}

export default EditProduct;
