import React from "react";

const Home = () => (
  <div className="row">
    <div className="col-md-4 col-xs-12"></div>
    <div className="col-md-4 col-xs-12 text-center">
      <img
        src="/images/adrian.jpg"
        alt="Adrian Santana"
        className="img img-thumbnail"
      />
      <h3>FooBro</h3>
      <h4>Powered by Reactjs 17.0.2</h4>
      <h5>FooBro is short for Info Browser, utilizing OMDB API, an open source API used to <br></br>retrieve info on all sorts of titles!</h5>
      <p>Developed by Adrian Santana. Copyright 2021.</p>
    </div>
    <div className="col-md-4 col-xs-12"></div>
  </div>
);

export default Home;