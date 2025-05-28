import "bootstrap/dist/css/bootstrap.min.css";

const students = [
  {
    name: "Nguyễn Hữu Quốc Khánh",
    id: "DE160182",
    location: "DaNang",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Choy Vinh Thiên",
    id: "DE160377",
    location: "QuangNam",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Đỗ Nguyên Phúc",
    id: "DE160547",
    location: "QuangNam",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Lê Hoàng Minh",
    id: "DE170049",
    location: "DaNang",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

export default function FPTHomepage() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: "#fff" }}>
      <div style={{ backgroundColor: "#facea2", height: 100 }} className="py-2 px-5">
        <div className="container-fluid d-flex align-items-center justify-content-between h-100">
          <div className="d-flex align-items-center h-100">
            <img
              src={require("../assets/clean_fptu_logo.png")}
              alt="FPT Logo"
              style={{ height: 70, marginRight: 10 }}
            />
            <nav className="d-flex align-items-center h-100">
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Trang chủ</a>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Ngành học</a>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Tuyển sinh</a>
              <a href="#" className="text-decoration-none mx-2" style={{ color: '#e87722' }}>Sinh viên</a>
            </nav>
          </div>
          <form className="d-flex align-items-center">
            <label htmlFor="search" className="text-dark me-2 mb-0">Search:</label>
            <input
              id="search"
              type="text"
              className="form-control form-control-sm"
              style={{
                width: 200, boxShadow: "none", border: "1px solid black",
              }}
            />
          </form>
        </div>
      </div>

      <div style={{ backgroundColor: "#e8821c" }} className="py-3">
        <div className="container">
          <img
            src={require("../assets/fptu_logo.png")}
            alt="FPT Students Banner"
            className="img-fluid w-100 rounded"
            style={{ maxHeight: 500, objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white p-2 rounded">
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none" style={{ color: '#e87722' }}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      <div className="container mb-5">
        <h2 className="text-center mb-4">Students Detail</h2>
        <div className="row g-4">
          {students.map((student, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card h-100 shadow-sm">
                <img src={student.img} alt={student.name} className="card-img-top" style={{ height: 200, objectFit: "cover" }} />
                <div className="card-body">
                  <div className="d-flex justify-content-center align-items-center mb-2" style={{ minHeight: 24 }}>
                    <span className="text-muted small">{student.id}</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold">{student.name}</span>
                    <div className="mb-2 text-end text-secondary small">{student.location}</div>

                  </div>
                  <div className="mb-2 d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={`attendance${idx}`} id={`absent${idx}`} />
                      <label className="form-check-label" htmlFor={`absent${idx}`}>Absent</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={`attendance${idx}`} id={`present${idx}`} />
                      <label className="form-check-label" htmlFor={`present${idx}`}>Present</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-warning btn-sm px-4 ">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ backgroundColor: "#e87722" }} className="mt-auto py-4 text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="fw-bold mb-2 text-dark">Our Address</div>
              <div>Khu đô thị FPT Đà Nẵng</div>
              <div>+84023111111</div>
              <div>+852 8765 4321</div>
              <div>fptudn@fpt.edu.vn</div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-md-end">
              <div>
                <a href="#" className="text-white me-3" title="Google">
                  <svg width="20" height="20" fill="black" viewBox="0 0 24 24" style={{ verticalAlign: "middle" }}>
                    <path d="M21.805 10.023h-9.765v3.977h5.617c-.241 1.238-1.482 3.637-5.617 3.637-3.377 0-6.13-2.797-6.13-6.25s2.753-6.25 6.13-6.25c1.922 0 3.213.82 3.953 1.523l2.703-2.633c-1.703-1.582-3.902-2.547-6.656-2.547-5.523 0-10 4.477-10 10s4.477 10 10 10c5.738 0 9.547-4.027 9.547-9.723 0-.652-.07-1.148-.156-1.534z" />
                  </svg>
                </a>
                <a href="#" className="text-white me-3" title="Facebook">
                  <svg width="20" height="20" fill="black" viewBox="0 0 24 24" style={{ verticalAlign: "middle" }}>
                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.592 1.322-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white me-3" title="LinkedIn">
                  <svg width="20" height="20" fill="black" viewBox="0 0 24 24" style={{ verticalAlign: "middle" }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                </a>
                <a href="#" className="text-white me-3" title="Twitter">
                  <svg width="20" height="20" fill="black" viewBox="0 0 24 24" style={{ verticalAlign: "middle" }}>
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z" />
                  </svg>
                </a>
                <a href="#" className="text-white me-3" title="Email">
                  <svg width="20" height="20" fill="black" viewBox="0 0 24 24" style={{ verticalAlign: "middle" }}>
                    <path d="M12 13.065l-11.99-8.065h23.98l-11.99 8.065zm11.99-9.065h-23.98c-.554 0-1.01.447-1.01 1v16c0 .553.456 1 1.01 1h23.98c.554 0 1.01-.447 1.01-1v-16c0-.553-.456-1-1.01-1zm-11.99 10.935l-12-8.065v14.13c0 .553.456 1 1.01 1h23.98c.554 0 1.01-.447 1.01-1v-14.13l-12 8.065z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">&copy; Copyright 2023</div>
        </div>
      </footer>
    </div>
  );
}
