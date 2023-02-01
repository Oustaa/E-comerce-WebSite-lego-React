import React from "react";
import { Link } from "react-router-dom";

function navBAr() {
  return (
    <>
      <header className="bg-dark fixed-top">
        <div className="container d-flex justify-content-between py-1">
          <ul className="nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link text-light">
                <img src="./Imgs/logo_lego.jpg" alt="" width={20} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link text-light">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Cart"} className="nav-link text-light">
                Cart <i className="bi bi-cart-fill"></i>
              </Link>
            </li>
          </ul>
          <div>
            <button
              type="button"
              className="btn text-light text-light-hover"
              data-bs-toggle="modal"
              data-bs-target="#LogIn"
            >
              <i className="bi bi-person-fill"></i> log in
            </button>
            <button
              type="button"
              className="btn text-light text-light-hover"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-person-fill"></i> Sign in
            </button>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign in
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="main.php" method="POST" className="form">
                <div className="row">
                  <div className="col-12 col-lg-4 mb-3">
                    <input
                      type="text"
                      maxLength={20}
                      pattern={"[A-Za-z]{6,20}"}
                      name="firstname"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-3">
                    <input
                      type="text"
                      maxLength={20}
                      pattern={"[A-Za-z]{6,20}"}
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-3">
                    <input
                      type="text"
                      maxLength={8}
                      pattern={"[A-Za-z]{1,2}[0-9]{6}"}
                      name="id"
                      className="form-control"
                      placeholder="Id"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      type="email"
                      name="firstname"
                      pattern={"[A-Za-z0,9]{5,}@[A-Za-z]{3,7}.[A-Za-z]{2,3}"}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      type="password"
                      name="lastname"
                      pattern={".{8,}"}
                      className="form-control"
                      placeholder="PassWord"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign In"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="LogIn"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="LogIn">
                Log In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form">
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default navBAr;

{
  /* <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> */
}
