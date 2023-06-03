import "./Resume.css";
const Resume = () => {
  return (
    <>
      <section id="resume" className="resume ">
        <div className="container " style={{ paddingTop: "68px" }}>
          <div className="section-title ">
            <h2 className="fontsz line">Resume</h2>
            <p>
              Innovative, task-driven, professional with 3+ Month of experience
              in web design and development across diverse industries. Equipped
              with a record of success in consistently identifying and proving
              the technological needs of companies through ingenious innovation.
              Proficient in developing databases, creating user interfaces,
              writing and testing codes, troubleshooting simple/complex issues,
              and implementing new features based on user feedback.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Sahil B.Sawant</h4>
                <p>
                  <em>
                    Innovative and deadline-driven Web Developer with 3+ Month
                    of experience designing and developing full stack
                    application from initial concept to final, polished
                    deliverable.
                  </em>
                </p>
                <ul>
                  <li>Mumbai, Maharashtra</li>
                  <li>8268172899</li>
                  <li>sbsawant358@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master of Science In Information Technology</h4>
                <h5>2021 - Present</h5>
                <p>
                  <em>Mumbai University, Mumbai, India</em>
                </p>
                <p> Pursuing (Last Year)</p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Science In Computer Science</h4>
                <h5>2018 - 2021</h5>
                <p>
                  <em>VPM'S R.Z.Shah College, Mumbai, India</em>
                </p>
                <p>
                  I scored overall average of 6.61 CGPA in Bachelor of Science
                  in Computer Science.
                </p>
              </div>
              <div className="resume-item">
                <h4>HSC</h4>
                <h5>2016 - 2018</h5>
                <p>
                  <em>Bunt's Sangha's S.M.Shetty College, Mumbai, India</em>
                </p>
                <p>I had 51.00 % in the final HSC examination</p>
              </div>
              <div className="resume-item">
                <h4>SSC</h4>
                <h5>2015 - 2016</h5>
                <p>
                  <em>Powai English High School, Mumbai, India</em>
                </p>
                <p>I got 67.40% in the SSC examination.</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Frontend Developer</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Infoz Software Solution, Mumbai, India </em>
                </p>
                <ul>
                  <li>
                    Working as a frontend developer in infoz software solution.
                  </li>
                  <li>Had a good knowledge of frontend.</li>
                  <li>Also had a understanding of backend</li>
                  <li>
                    Worked on many types of applications sucha as CRM,
                    Accounting Software, Static website etc.
                  </li>
                  <li>Worked with REST APIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-4">
            <a href="/resume/C.V-SAHIL_SAWANT.pdf" className="btn btn-primary">
              <i className="bx bx-file-blank"></i> Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
