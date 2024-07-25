import React from 'react';
import Pet from './Pet';
import { Helmet } from 'react-helmet';

function Result() {
  let pets = JSON.parse(window.localStorage.getItem('pets')) || [];

  return (
    <>
      <Helmet>
        <title> pets result</title>
        <link
          rel="icon"
          type="image/png"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXw9JnTSonFTcng3PHat1pDNX4DanGg9iSQ&s"
        />
      </Helmet>
      <div className=" mt-3 g-3 mx-auto container row row-cols-1 row-cols-md-3 g-4">
        {pets.length === 0 ? (
          <h2>No pets found</h2>
        ) : (
          pets.map((ele) => (
            <Pet
              name={ele.name}
              key={ele.id}
              id={ele.id}
              animal={ele.animal}
              breed={ele.breed}
              images={ele.images}
              location={`${ele.city}, ${ele.state}`}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Result;
