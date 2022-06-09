import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub></BsGithub>
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook></BsFacebook>
      </a>
    </div>
    );
};

export default HeaderSocials;