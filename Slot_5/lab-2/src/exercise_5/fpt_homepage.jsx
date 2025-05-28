import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const students = [
  {
    name: "Nguyễn Hữu Quốc Khánh",
    id: "DE160182",
    location: "ĐàNẵng",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Choy Vinh Thiên",
    id: "DE160377",
    location: "QuangNam",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Đỗ Nguyễn Phúc",
    id: "DE160547",
    location: "QuangNam",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Lê Hoàng Minh",
    id: "DE170049",
    location: "ĐàNẵng",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

export default function FPTHomepage() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#fff" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#FFC9A0FF" }} className="py-2 px-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={require("../assets/clean_fptu_logo.png")}
              alt="FPT Logo"
              style={{ height: 40, marginRight: 10 }}
            />
            <nav>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Trang chủ</a>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Ngành học</a>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Tuyển sinh</a>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Sinh viên</a>
            </nav>
          </div>
          <form className="d-flex align-items-center">
            <label htmlFor="search" className="text-dark me-2 mb-0">Search:</label>
            <input id="search" type="text" className="form-control form-control-sm" style={{ width: 150 }} />
          </form>
        </div>
      </div>

      {/* Banner */}
      <div style={{ backgroundColor: "#f6a04d" }} className="py-3">
        <div className="container">
          <img
              src={require("../assets/fptu_logo.png")}
              alt="FPT Students Banner"
            className="img-fluid w-100 rounded"
            style={{ maxHeight: 300, objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white p-2 rounded">
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none" style={{ color: '#e87722' }}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      {/* Students Detail */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">Students Detail</h2>
        <div className="row g-4">
          {students.map((student, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card h-100 shadow-sm">
                <img src={student.img} alt={student.name} className="card-img-top" style={{ height: 200, objectFit: "cover" }} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold">{student.name}</span>
                    <span className="text-muted small">{student.id}</span>
                  </div>
                  <div className="mb-2 text-end text-secondary small">{student.location}</div>
                  <div className="mb-2">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={`attendance${idx}`} id={`absent${idx}`} />
                      <label className="form-check-label" htmlFor={`absent${idx}`}>Absent</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={`attendance${idx}`} id={`present${idx}`} />
                      <label className="form-check-label" htmlFor={`present${idx}`}>Present</label>
                    </div>
                  </div>
                  <button className="btn btn-warning btn-sm px-4">Submit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#e87722" }} className="mt-auto py-4 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="fw-bold mb-2">Our Address</div>
              <div>Khu đô thị FPT Đà Nẵng</div>
              <div>+84(0)236.7301.111</div>
              <div>+84 236 652 4911</div>
              <div>daotaodn@fe.edu.vn</div>
            </div>
            <div className="col-md-6 d-flex align-items-end justify-content-md-end">
              <div>
                <a href="#" className="text-white me-3"><i className="bi bi-google"></i>G</a>
                <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i>f</a>
                <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i>in</a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i>tw</a>
                <a href="#" className="text-white me-3"><i className="bi bi-envelope"></i>@</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">&copy; Copyright 2023</div>
        </div>
      </footer>
    </div>
  );
}
