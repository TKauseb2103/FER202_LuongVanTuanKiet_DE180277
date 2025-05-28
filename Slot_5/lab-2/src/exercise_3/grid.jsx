import "bootstrap/dist/css/bootstrap.min.css";

export default function Grid() {
  return (
    <div>
      <div className="bg-secondary bg-opacity-75 py-5 mb-4">
        <div className="container">
          <h1 className="fw-bold">Let's test the grid!</h1>
        </div>
      </div>
      <ul className="nav mb-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" tabIndex="-1" aria-disabled="true" href="#">Disabled</a>
        </li>
      </ul>
      <div className="container mb-4">
        <div className="row g-0">
          <div className="col-6 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>First col</div>
          <div className="col-6 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>Second col</div>
        </div>
        <div className="row g-0">
          <div className="col-4 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
          <div className="col-4 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
          <div className="col-4 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
        </div>
        <div className="row g-0">
          <div className="col-3 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
          <div className="col-3 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
          <div className="col-3 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
          <div className="col-3 border border-secondary bg-secondary bg-opacity-25 p-2" style={{ minHeight: 60 }}>col</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#bfa6a0' }} className="py-2">
        <h2 className="text-center fw-bold m-0">Created by ABC!</h2>
      </div>
    </div>
  );
}
