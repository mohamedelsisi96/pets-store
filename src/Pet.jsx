import React from 'react';
import { Link } from 'react-router-dom';
const Pet = ({ name, animal, breed, images, location, id }) => {
  let animalImg = 'https://pets-images.dev-apis.com/pets/none.jpg';
  if (images && images.length > 0) {
    animalImg = images[0];
  }
  return (
    <>
      <div className="mycard myp col-md-6 col-lg-4  p-3 ">
        <div className=" mybg cardhight">
          <img
            src={animalImg}
            className="card-img-top rounded-top imghight"
            alt={name}
          />
          <div className="card-body d-flex flex-column justify-content-between ">
            <h5 className="card-title ps-4 py-2"> {name}</h5>
            <p className="card-text ps-4 pb-2">
              {animal} - {breed} - {location}
            </p>
            <Link to={`/detailes/${id}`}>
              <button className="btn btn-primary mb-3 ms-4">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pet;
