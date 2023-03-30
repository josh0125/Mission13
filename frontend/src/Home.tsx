import React from 'react';

// Create the Home Page with the image and the description
function Home(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <img src="./JoelHiltonHeadshot.jpg" alt="companyLogo"></img>
        </div>

        <div className="col-6 align-self-center">
          <h3>This is a site for the Movie Collection of Joel Hilton</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
