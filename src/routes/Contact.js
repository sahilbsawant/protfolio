import "./Contact.css";
import React, { useState } from "react";
import Socialmediaicon from "../components/Socialmediaicon";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
const Contact = () => {
  const [contact, setContact] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const [errorname, setErrorname] = useState();
  const [erroremail, setErroremail] = useState();
  const [errorsubject, setErrorsubject] = useState();
  const [errormessage, setErrormessage] = useState();

  // const alert =()=>{
  //   if (erroname === "") {
  //     alert("please fill all the details");
  //   }

  // }

  const inputs = (event) => {
    const { name, value } = event.target;

    setContact((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const validateform = () => {
    if (contact.Name === "") {
      setErrorname("Please fill all the details");
    }

    if (contact.Email === "") {
      setErroremail("Please fill all the details");
    }

    if (/\S+@\S+\.\S+/.test(contact.Email) === false) {
      setErroremail("Email is invalid!");
    }

    if (contact.Subject === "") {
      setErrorsubject("Please fill all the details");
    }

    if (contact.Message === "") {
      setErrormessage("Please fill all the details");
    }

    if (
      contact.Name !== "" &&
      contact.Email !== "" &&
      contact.Subject !== "" &&
      contact.Message !== ""
    ) {
      alert("You have Succesfully Submitted ");
    }
  };

  return (
    <>
      <div className="bg-secondary bg-opacity-10 p-4 mt-5">
        <div className="container  p-5 bg-white ">
          <h3 className=" linesc fontsz">Get In Touch</h3>
          <div className="row mt-5 gy-3">
            <div className="col-lg-6 ">
              <div className="bg-secondary bg-opacity-10">
                <h3 className="ms-2 p-3 fontstyh">
                  <LocationOnOutlinedIcon className=" text-primary iconstyle"></LocationOnOutlinedIcon>
                  &nbsp; My Address
                  <p className="ms-5 fontstyp">IIT Market, Powai Mumbai</p>
                </h3>
              </div>
            </div>
            <div className="col-lg-6 box">
              <div className="bg-secondary bg-opacity-10">
                <h3 className="ms-2 p-3 fontstyh">
                  <ShareOutlinedIcon className=" text-primary iconstyle"></ShareOutlinedIcon>{" "}
                  &nbsp; Social Profile
                  <p className="ms-5 fontstyp ">
                    <Socialmediaicon></Socialmediaicon>
                  </p>
                </h3>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-secondary bg-opacity-10">
                <h3 className="ms-2 p-3 fontstyh">
                  <MailOutlineOutlinedIcon className=" text-primary iconstyle "></MailOutlineOutlinedIcon>
                  &nbsp; Email
                  <p className="ms-5 fontstyp" style={{ fontSize: "18px" }}>
                    sbsawant358@gmail.com
                  </p>
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-secondary bg-opacity-10 ">
                <h3 className="ms-2 p-3 fontstyh">
                  <PhoneOutlinedIcon className="text-primary iconstyle "></PhoneOutlinedIcon>{" "}
                  &nbsp; Call Me
                  <p className="ms-5 fontstyp" style={{ fontSize: "18px" }}>
                    +91 8268172899
                  </p>
                </h3>
              </div>
            </div>
          </div>

          <form className=" col-lg-12  pt-4  ">
            <div className="row gy-3">
              <div className="col-lg-6 ">
                <input
                  type="text"
                  maxLength={20}
                  className="form-control bg-secondary bg-opacity-10"
                  placeholder="Your Name"
                  value={contact.Name}
                  name="Name"
                  onChange={inputs}
                />
                <p className="text-danger"> {errorname} </p>
              </div>
              <div className="col-lg-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control bg-secondary bg-opacity-10"
                  value={contact.Email}
                  name="Email"
                  onChange={inputs}
                />
                <p className="text-danger"> {erroremail} </p>
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control bg-secondary bg-opacity-10"
                  value={contact.Subject}
                  name="Subject"
                  onChange={inputs}
                />
                <p className="text-danger"> {errorsubject} </p>
              </div>
              <div className=" ">
                <textarea
                  className="form-control bg-secondary bg-opacity-10"
                  placeholder="Message"
                  value={contact.Message}
                  name="Message"
                  onChange={inputs}
                />
                <p className="text-danger"> {errormessage} </p>
              </div>
              <div className="col-lg-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={validateform}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
