import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div style={{ backgroundColor: '#e87722' }} className="text-center py-4">
        <img
          src={require("../assets/fptu_logo.png")}
          alt="FPT University Logo"
          style={{ maxWidth: 400, width: "100%", height: "auto" }}
        />
        <nav className="mt-2">
          <a href="#" className="text-decoration-none text-white mx-2">Home</a>
          <a href="#about" className="text-decoration-none text-white mx-2">About</a>
          <a href="#contact" className="text-decoration-none text-white mx-2">Contact</a>
        </nav>
      </div>

      <div className="bg-white text-center py-5">
        <section id="about" className="mb-5">
          <h2 className="fw-bold">About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact">
          <h2 className="fw-bold">Contact</h2>
          <p>For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
        </section>
      </div>

      <footer style={{ backgroundColor: '#FFD65DFF' }} className="text-center py-3 mt-auto text-white">
        <small>&copy; 2023 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}
