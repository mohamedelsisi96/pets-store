import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fetchPetDetailes from './fetchPetDetailes';
import Carsoul from './Carsoul.jsx';
import { PitContext } from './PitContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function Detailes() {
  let { myPitCon, setMyPitCon } = useContext(PitContext);
  const { id } = useParams();
  const navigate = useNavigate();
  let result = useQuery(['detailes', id], fetchPetDetailes);
  console.log(result.data);
  console.log(myPitCon);

  let finalData = result?.data?.pets[0] || [];

  function addAdopt() {
    Swal.fire({
      title: `Do you want to add ${finalData.name}?`,
      text: `You can add ${finalData.name} to your favourite pets`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!',
    }).then((result) => {
      if (result.isConfirmed) {
        if (!myPitCon.includes(finalData)) {
          setMyPitCon((prev) => [...prev, finalData]);
          navigate('/');
          Swal.fire({
            title: 'Added',
            text: 'Adopt added to your cart.',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'this pet already added !',
          });
          navigate('/');
        }
      }
    });
  }
  if (result.isLoading) {
    return (
      <>
        <div className="loading-pane">
          <div class="loader"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>{finalData.name}</title>
        <link rel="icon" type="image/png" href={finalData.images[0]} />
      </Helmet>
      <div className="details">
        <Carsoul images={finalData.images} />
        <div>
          <h1>{finalData.name}</h1>
          <h2>
            {finalData.animal} - {finalData.breed} - {finalData.city} ,{' '}
            {finalData.state}{' '}
          </h2>
          <button
            className="padding5"
            onClick={() => {
              addAdopt();
            }}
          >
            Adopt {finalData.name}
          </button>
          <p>{finalData.description} </p>
        </div>
      </div>
    </>
  );
}

export default Detailes;
