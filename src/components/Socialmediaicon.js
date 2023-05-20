import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const Socialmediahead = () => {
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          objectFit: "contain",
        }}
      >
        <a
          href="https://www.linkedin.com/in/sahil-sawant-4bb825217/"
          target="blank"
          className="text-black"
        >
          <LinkedInIcon />
        </a>
        &nbsp; &nbsp;
        <a
          href="mailto:sbsawant358@gmail.com"
          target="blank"
          className="text-black"
        >
          <MailOutlineOutlinedIcon />
        </a>
        &nbsp; &nbsp;
        <a
          href="https://instagram.com/sahil_b_sawant?igshid=MzNlNGNkZWQ4Mg=="
          target="blank"
          className="text-black"
        >
          <InstagramIcon />
        </a>
        &nbsp; &nbsp;
        <a
          href="https://api.whatsapp.com/send?phone=8268172899"
          target="blank"
          className="text-black"
        >
          <WhatsAppIcon />
        </a>
        &nbsp; &nbsp;
      </div>
    </>
  );
};

export default Socialmediahead;
