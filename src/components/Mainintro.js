// import Frontworkcard from "./Frontworkcard";
import "../components/Mainintro.css";
import intro from "../assets/intro-1.jpg";
import Greetings from "../components/Greetings";
import Typewriter from "typewriter-effect";
const Maninintro = () => {
  return (
    <>
      {/* <div classNameName="ms-5">
        <h4> This is, </h4>
        <h4>
          Sahil B.Sawant
          <strong className="ms-2" style={{ fontSize: "35px" }}>
            Full Stack Developer
          </strong>
        </h4>
        <br />
        <h3 style={{ cursor: "pointer" }}>About Sahil</h3>
        <br />
        <h3 className="ms-5">My Work</h3> <br />
        <Frontworkcard />
      </div> */}
      {/* <div className="into-img">
        <img src={intro} alt="images" className="img-fluid " />
        <h3 className="carousel-caption">Hi! {greeting}</h3>
      </div> */}

      <div
        className="text-center  bg-image"
        style={{
          backgroundImage: `url(${intro})`,
          height: "120vh",
          marginTop: "52px",
          // // width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100%" }}
        >
          <div className=" container  text-white " style={{ padding: "50px" }}>
            <h3
              className="text-start ms-1"
              style={{ fontFamily: "Courier New" }}
            >
              Hi! <Greetings />
            </h3>
            <div style={{ paddingTop: "140px" }}>
              <h3
                className="text-center"
                style={{ fontFamily: "Open Sans", fontWeight: "lighter" }}
              >
                HI I'M SAHIL B.SAWANT
              </h3>
              <h1
                className="fontsz"
                style={{ fontSize: "50px", color: "white" }}
              >
                FRONTEND{" "}
                <span style={{ display: "inline-block " }}>
                  <Typewriter
                    options={{
                      strings: ["DEVELOPER", "FREELANCER", "PHOTOGRAPHER"],
                      autoStart: true,
                      loop: true,
                      delay: 300,
                    }}
                  ></Typewriter>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maninintro;
