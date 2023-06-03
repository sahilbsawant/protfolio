import Socialmediaicon from "./Socialmediaicon";

const Footer = () => {
  return (
    <>
      <div className="conatiner bg-black bg-opacity-10 text-center p-2 ">
        <h5>© Copyright Protfolio. All Rights Reserved</h5>
        <h1 className="d-flex justify-content-center align-items-center text-center ">
          <Socialmediaicon></Socialmediaicon>
        </h1>
        <p className="text-center mt-3">Designed by Sahil B.Sawant</p>
      </div>
    </>
  );
};

export default Footer;
