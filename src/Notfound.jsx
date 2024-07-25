import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div>
      <a href="https://codepen.io/uiswarup/full/vYPxywO" target="_blank">
        <header className="top-header"></header>
        {/*dust particel*/}
        <div>
          <div className="starsec" />
          <div className="starthird" />
          <div className="starfourth" />
          <div className="starfifth" />
        </div>
        {/*Dust particle end-*/}
        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable" />
            <div className="cover" />
            <div className="in-cover">
              <div className="bulb" />
            </div>
            <div className="light" />
          </div>
        </div>
        {/* END Lamp */}
      </a>
      <section className="error">
        <div className="error__content">
          <div className=" ">
            <h1 className="fs-1">Page Not Found</h1>
          </div>

          <div className="error__nav e-nav">
            <Link to="/" className="fs-1">
              go to home page
            </Link>
          </div>
        </div>
        {/* END Content */}
      </section>
    </div>
  );
}

export default Notfound;
