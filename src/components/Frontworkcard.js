import img from "../assets/protfolio.jpg";
const Frontworkcard = () => {
  return (
    <>
      <div className="card mx-auto" style={{ width: "20rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Frontworkcard;
