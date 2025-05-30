import "bootstrap/dist/css/bootstrap.min.css";
import carImage from './assets/image.png';

export default function CarCards() {
  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4">Cards Columns</h3>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 text-center" style={{ backgroundColor: "#3399ff" }}>
            <img src={carImage} className="card-img-top p-3" alt="Car" />
            <div className="card-body">
              <p className="card-text text-dark">Some text inside the first card</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 text-center" style={{ backgroundColor: "#f7c942" }}>
            <img src={carImage} className="card-img-top p-3" alt="Car" />
            <div className="card-body">
              <p className="card-text text-dark">Some text inside the first card</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 text-center" style={{ backgroundColor: "#d9534f" }}>
            <img src={carImage} className="card-img-top p-3" alt="Car" />
            <div className="card-body">
              <p className="card-text text-dark">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}