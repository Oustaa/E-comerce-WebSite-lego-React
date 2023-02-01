import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark card-footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h5>
              <strong>LEGO WebStore</strong>
            </h5>
            <p className="text-muted">Maison de la Recherche Blaise Pascal</p>
            <p className="text-muted">50 rue Ferdinand Buisson</p>
            <p className="text-muted">62228, Calais.</p>
          </div>
          <div>
            <img
              width="50px"
              src="./Imgs/logo_lego.jpg"
              alt=""
              className="mt-4"
            />
            <p className="text-muted">WebStore</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
