import React, { Component } from 'react';

export default class Carsoul extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ['https://pets-v2.dev-apis.com/pets/none.jpg'],
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              src={image}
              className={index === active ? 'active' : ''}
              alt="animal"
              key={index}
              onClick={() => {
                this.setState({ active: index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
