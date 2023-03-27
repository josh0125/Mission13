import React from 'react';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img src="./logo192.png" alt="companyLogo"></img>
        </div>

        <div className="col align-self-center">
          <h1>Podcast {props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
