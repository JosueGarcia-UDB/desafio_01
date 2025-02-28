import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-light py-3 d-flex justify-content-center align-items-center mb-0">
      <p className="mb-0">© {date} - <strong>Dr. Rivera y Asociados</strong></p>
    </div>
  );
};

export default Footer;
