import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Facebook } from "lucide-react";
const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={logo} alt="Home Trace Logo" width={100} height={50} />
        <div>
            <h4>Contact</h4>
            <div>
                <p>(234) 9483920192</p>
                <p>hometrace@gmail.com</p>
                <span>
                    <Facebook />
                </span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
