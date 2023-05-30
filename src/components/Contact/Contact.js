import React, { useState } from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { Snackbar } from "@mui/material";
function Contact() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("pedro.sales.muniz@gmail.com");
    setShowSnackbar(true);
  };

  return (
    <ContactWrapper id="contact">
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        message="Copied to clipboard!"
      />
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
              <span>pedro.sales.muniz@gmail.com</span>
              <MdContentCopy size={25} style={{ cursor: 'pointer' }} onClick={copyToClipboard} />
            </div>
            <a
              className="btn PrimaryBtn"
              href="mailto:pedro.sales.muniz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
