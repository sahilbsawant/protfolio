import "./About.css";
import photo from "../assets/myimg.jpg";
import Skills from "../components/Skills";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const About = () => {
  return (
    <>
      <div
        className="container-fluid p-3 "
        style={{ backgroundColor: "rgba(245, 245, 245)", overflow: "none" }}
      >
        <div className="container mt-5 p-3 bg-white shadow-lg">
          <div className="row">
            <h1 className="line fontsz ">About</h1>
            <p className="fontfam">
              Innovative, task-driven, professional with 3+ Month of experience
              in web design and development accross diverse industries. Equipped
              with a record of success in consistently identifying and proving
              the technological needs of companies through ingenious innovation.
              Proficient in developing databases, creating user interfaces,
              writing and testing codes, troubleshooting simple/complex issues,
              and implementing new features based on user feedback.
            </p>

            <div className="col-lg-3  mt-3 ">
              <img
                src={photo}
                alt="sahil"
                className="img-fluid"
                style={{ height: "250px", width: "200px" }}
              />
            </div>

            <div className="col-lg-4 mt-3">
              <h5 className="alignMe">
                <strong>
                  <KeyboardArrowRightIcon
                    style={{
                      fontSize: "30px",
                      color: "rgb(22, 101, 249)",
                    }}
                  ></KeyboardArrowRightIcon>
                  <h>Name</h>
                </strong>
                <span className="text-center "> Sahil B.Sawant</span>
              </h5>
              <h5 className="alignMe">
                <strong>
                  {" "}
                  <KeyboardArrowRightIcon
                    style={{ fontSize: "30px", color: "rgb(22, 101, 249)" }}
                  ></KeyboardArrowRightIcon>{" "}
                  <h>Profile</h>
                </strong>{" "}
                <span>Frontend Developer</span>
              </h5>
              <h5 className="alignMe">
                <strong>
                  {" "}
                  <KeyboardArrowRightIcon
                    style={{ fontSize: "30px", color: "rgb(22, 101, 249)" }}
                  ></KeyboardArrowRightIcon>{" "}
                  <h>Email</h>
                </strong>{" "}
                <span>sbsawant@gmail.com</span>
              </h5>
              <h5 className="alignMe">
                <strong>
                  <KeyboardArrowRightIcon
                    style={{ fontSize: "30px", color: "rgb(22, 101, 249)" }}
                  ></KeyboardArrowRightIcon>
                  <h>Phone</h>
                </strong>{" "}
                <span> +91 8268172899</span>
              </h5>
            </div>
            <div className="col-lg-4 mt-3 fontfam">
              <h2
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  fontSize: "26px",
                  color: "#173b6c",
                }}
              >
                FRONTEND DEVELOPER
              </h2>
              <p style={{ fontStyle: "italic", fontSize: "18px" }}>
                Hi, I am Sahil B.Sawant. I am a Frontend Developer with an
                experience of more than 3+ month. I did my graduation in
                Bachelor of Science in Computer Science from Mumbai University &
                Pursuing Master of science in information Technology. I am good
                at front end technologies like HTML, CSS, Javascript, React and
                very passionate to learn Backend Technologies.
              </p>
            </div>
            <h2 className="mt-3 fontsz ">Skills</h2>
            <p style={{ fontFamily: "Raleway", fontSize: "20px" }}>
              I am very passionate to learn any new programming language.
            </p>
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
