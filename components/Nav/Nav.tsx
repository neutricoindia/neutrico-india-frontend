import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faInfoCircle,
  faTh,
  faThLarge,
  faThList,
} from "@fortawesome/free-solid-svg-icons";

function Nav({ active }: any) {
  return (
    <div className="wrapper row1">
      <header id="header" className="hoc clear">
        <div id="logo" className="fl_left">
          <div className="brand">
            <Image
              src={"/images/logo.png"}
              width={60}
              height={60}
              alt="Neutrico India"
            />
            <h1>
              <Link href="/">Neutrico India</Link>
            </h1>
          </div>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li className={active === "home" ? "active" : ""}>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faHome}
                  className="fas fa-home"
                  style={{
                    display: "inline-block",
                    width: "13px",
                    height: "13px",
                    marginRight: "4px",
                  }}
                ></FontAwesomeIcon>
                Home
              </Link>
            </li>
            <li className={active === "about" ? "active" : ""}>
              <Link href="/about">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="fas fa-info-circle"
                  style={{
                    display: "inline-block",
                    width: "13px",
                    height: "13px",
                    marginRight: "4px",
                  }}
                ></FontAwesomeIcon>
                About
              </Link>
            </li>

            {/* <li className={active?.includes("product") ? "active" : ""}>
              <Link href="/products" className="drop">
                Products
              </Link>
              <ul>
                <li>
                  <a href="#">All Products</a>
                </li>
                <li>
                  <a href="#">Product Categories</a>
                </li>
              </ul>
            </li>
            <li className={active === "health_professionals" ? "active" : ""}>
              <Link href="/health_professionals">Health Professionals</Link>
            </li> */}
            <li className={active === "products" ? "active" : ""}>
              <Link href="/products">
                <FontAwesomeIcon
                  icon={faThList}
                  className="fas fa-th-large"
                  style={{
                    display: "inline-block",
                    width: "13px",
                    height: "13px",
                    marginRight: "4px",
                  }}
                ></FontAwesomeIcon>
                Products
              </Link>
            </li>
            <li className={active === "contact" ? "active" : ""}>
              <Link href="/contact">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fas fa-envelope"
                  style={{
                    display: "inline-block",
                    width: "13px",
                    height: "13px",
                    marginRight: "4px",
                  }}
                ></FontAwesomeIcon>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
