import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzas from '../data/pizza_data.json';
const Home = () => {


  return (
    <div className='bg-dark' style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Ancizar Serif, serif',

    }}>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/" role="button" style={{
            fontSize: '30px'
          }}>
            Pizza House
          </a>
          <div className="navbar-nav me-auto">
            <a className="nav-link px-4" href="/" role="button">Home</a>
            <a className="nav-link px-4" href="/" role="button">About Us</a>
            <a className="nav-link px-4" href="/" role="button">Contact</a>
          </div>
          <form className="d-flex" style={{ width: '400px', paddingRight: '40px' }}>
            <input className="form-control " type="search" placeholder="Search" />
            <button className="btn btn-outline-light" type="submit" style={{
              color: 'white',
              backgroundColor: '#C0073EFF',
              border: 'none',
              width: '50px',
              aspectRatio: '1/1',
              fontSize: '20px'
            }}>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="position-relative">
        <div style={{
          backgroundImage: "url('https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="position-absolute bottom-0 start-50 translate-middle text-center text-white">
            <h1>Neapolitan Pizza</h1>
            <p style={{
              fontSize: '26px',
            }}>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container my-5">
        <h2 className="text-start mb-4">Our Menu</h2>
        <div className="row">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <div className="position-relative">
                  {pizza.tag && (
                    <span className="position-absolute top-0 start-0 px-4" style={{
                      fontSize: '20px',
                      color: 'black',
                      fontWeight: 'bold',
                      backgroundColor: '#FFEE00FF',
                    }}>
                      {pizza.tag}
                    </span>
                  )}
                  <img
                    src={pizza.image}
                    className="card-img-top"
                    alt={pizza.name}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      aspectRatio: '1/1'
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{
                    fontFamily: 'Ancizar Serif, serif',
                    fontSize: '26px',
                  }}>{pizza.name}</h5>
                  <p className="card-text">
                    {pizza.oldPrice && (
                      <span className="text-decoration-line-through text-muted">
                        {pizza.oldPrice}
                      </span>
                    )}
                    <span className={pizza.oldPrice ? "text-warning ms-1" : "text-dark"}>
                      {pizza.price}
                    </span>
                  </p>
                  <button className="btn btn-dark"
                    style={{
                      width: '100%',
                    }}>Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Bottom Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4 text-white">Book Your Table</h2>
        <div className="row">
          <div className="col">
            <form >
              <div className="row mb-3">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Name*" required />
                </div>
                <div className="col-md-4">
                  <input type="email" className="form-control" placeholder="Your Email*" required />
                </div>
                <div className="col-md-4">
                  <select className="form-select">
                    <option selected>Select a Service</option>
                    <option>Dinner</option>
                    <option>Lunch</option>
                    <option>Breakfast</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="6" placeholder="Please state your comment"></textarea>
              </div>
              <div className="text-start">
                <button type="submit" className="btn btn-warning text-white px-4 fw-bold">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;