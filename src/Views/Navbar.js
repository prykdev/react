import React from "react";
import Routing from "../Routing/Routing";
import { mydata } from "../Views/Data";
import { useState, useEffect } from "react";

const Navbar = () => {
  // alert(window.location.href.includes('/About'))

  const [c, setc] = React.useState({
    sendData: mydata,
    searchvalue: "",
  });

  const handleInput = (e) => {
    setc({ ...c, ["searchvalue"]: e.target.value });

    // if (e.target.value === "" || e.target.value == null) {
    //   setc({ ...c, ["sendData"]: mydata });
    // }
  };
  useEffect(() => {
    if (c.searchvalue.length === 0) {
      setc({ ...c, ["sendData"]: mydata });
    }
  }, [c.searchvalue]);

  const handleButton = (e) => {
    e.preventDefault();
    if (c.searchvalue === "") {
      alert("Please enter a valid id");
    } else {
      var u = c.sendData;
      const result = u.filter((element) => element.id == c.searchvalue);
      setc({ ...c, ["sendData"]: result });
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            style={{
              color: window.location.href.includes("/Home") ? "red" : "blue",
            }}
            href="/"
          >
            <h6
              style={{
                color: window.location.href.includes("/Home") ? "red" : "blue",
              }}
            >
              Navbar
            </h6>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Home">
                  <h6
                    style={{
                      color: window.location.href.includes("/Home")
                        ? "red"
                        : "blue",
                    }}
                  >
                    Home
                  </h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Login">
                  <h6
                    style={{
                      color: window.location.href.includes("/Home")
                        ? "red"
                        : "blue",
                    }}
                  >
                    Login
                  </h6>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/About">
                  <h6
                    style={{
                      color: window.location.href.includes("/About")
                        ? "red"
                        : "blue",
                    }}
                  >
                    About
                  </h6>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/Table">
                  <h6
                    style={{
                      color: window.location.href.includes("/Table")
                        ? "red"
                        : "blue",
                    }}
                  >
                    Table
                  </h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Page3">
                  <h6
                    style={{
                      color: window.location.href.includes("/Page3")
                        ? "red"
                        : "blue",
                    }}
                  >
                    Table
                  </h6>
                </a>
              </li>



            
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                value={c.searchvalue}
                type="number"
                onChange={handleInput}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" onClick={handleButton}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routing getdata={c.sendData} />
    </>
  );
};
export default Navbar;
