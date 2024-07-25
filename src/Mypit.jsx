import React, { useContext } from 'react';
import { PitContext } from './PitContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function Mypit() {
  let { myPitCon, setMyPitCon } = useContext(PitContext);
  console.log(myPitCon);
  return (
    <>
      <Helmet>
        <title>favourite pets</title>
        <link
          rel="icon"
          type="image/png"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXw9JnTSonFTcng3PHat1pDNX4DanGg9iSQ&s"
        />
      </Helmet>

      <h2 className="text-center favouriteh">My Favourite Pets</h2>
      <div className="mx-auto container  row">
        {myPitCon?.map((ele) => (
          <div className="mycard myp col-md-6 col-lg-4  p-3 ">
            <div className=" mybg cardhight">
              <img
                src={ele.images[0]}
                className="card-img-top rounded-top imghight"
                alt={ele.name}
              />
              <div className="card-body d-flex flex-column justify-content-between ">
                <h5 className="card-title ps-4 py-2"> {ele.name}</h5>
                <p className="card-text ps-4 pb-2">
                  {ele.animal} - {ele.breed} - {ele.city}
                </p>
                <button
                  className="btn btn-primary mb-3 m-4"
                  onClick={() => {
                    Swal.fire({
                      title: `Are you sure to delete ${ele.name} from favorite pets?`,

                      showClass: {
                        popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `,
                      },
                      hideClass: {
                        popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `,
                      },
                      text: "You won't be able to revert this!",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setMyPitCon(
                          myPitCon.filter((item) => item.id !== ele.id),
                        );
                        console.log(myPitCon);
                        Swal.fire({
                          title: 'Deleted!',
                          text: 'Your file has been deleted.',
                          icon: 'success',
                          timer: 1000,
                          timerProgressBar: true,
                        });
                      }
                    });
                  }}
                >
                  remove{' '}
                </button>
              </div>
            </div>
          </div>
        ))}
        {myPitCon.length == 0 ? (
          <h4 className="text-center pt-5">Not Pets are selected</h4>
        ) : null}
      </div>
    </>
  );
}

export default Mypit;
