const Skills = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-6">
          <div>
            <h4
              style={{
                fontSize: "17px",

                fontWeight: "600",
              }}
            >
              HTML <span className="float-end fs-5  ">90%</span>
            </h4>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 mt-3  ">
          <h4
            style={{
              fontSize: "17px",

              fontWeight: "600",
            }}
          >
            CSS <span className="float-end fs-5">85%</span>
          </h4>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <h4
            style={{
              fontSize: "17px",

              fontWeight: "600",
            }}
          >
            JavaScript <span className="float-end fs-5">69%</span>
          </h4>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: "69%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <h4
            style={{
              fontSize: "17px",

              fontWeight: "600",
            }}
          >
            Mysql <span className="float-end fs-5">63%</span>
          </h4>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: "63%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 mt-3">
          <h4
            style={{
              fontSize: "17px",

              fontWeight: "600",
            }}
          >
            PHP <span className="float-end fs-6">IN PROGRESS</span>
          </h4>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: "6%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
