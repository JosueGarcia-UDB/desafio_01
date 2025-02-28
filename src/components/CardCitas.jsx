import "bootstrap/dist/css/bootstrap.min.css";

export const CardCitas = ({ icon, title, description, textButton, color, link }) => {
  return (
    <article className={`card mb-3 shadow h-100 border-2 border-${color} bg-${color}-subtle rounded-4`}>
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center gap-2 mb-2">
          {icon}
          <h5 className="mb-0">{title}</h5>
        </div>
        <p className="my-2 flex-grow-1">{description}</p>
        <div className="d-flex justify-content-center">
          <a href={`#${link}`} className={`btn btn-${color}`}>{textButton}</a>
        </div>
      </div>
    </article>
  );
};
export default CardCitas;

