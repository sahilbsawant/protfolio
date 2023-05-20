import Servicesdata from "../components/Servicesdata";
const Services = () => {
  return (
    <>
      <div className="bg-secondary bg-opacity-10 ">
        <div className="container ">
          <br />
          <h2 className="mt-5  line fontsz"> We Offers</h2>
          <div className="row gy-5 ">
            {Servicesdata.map((curval, index) => {
              console.log(curval.logo);
              return (
                <>
                  <div className="col-lg-4 d-flex">
                    <div className="card mb-5" style={{ width: "18rem" }}>
                      <img
                        src={curval.logo}
                        alt="images error"
                        className="img-fluid"
                        style={{ height: "200px" }}
                      />
                      <div className="card-body">
                        <h4>{curval.title}</h4>
                        {curval.detail}
                        <br />

                        <button type="button" className="btn btn-primary mt-3 ">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
