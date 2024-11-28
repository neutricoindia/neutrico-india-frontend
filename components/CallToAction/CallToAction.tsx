import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function CallToAction() {
  return (
    <div className="wrapper row9">
      <section id="ctdetails" className="hoc clear">
        <ul className="nospace clear">
          <li className="one_quarter first">
            <div className="block clear">
              <Link href="tel:+918910477479">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fas fa-phone"
                  style={{
                    display: "inline-block",
                    marginRight: "4px",
                    position: "absolute",
                    top: "10",
                    left: "0",
                    width: "15px",
                    height: "15px",
                    lineHeight: "15px",
                    textAlign: "center",
                    color: "white",
                  }}
                ></FontAwesomeIcon>
              </Link>
              <span>
                Give us a call: <strong>+91 (8910) 477 479</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <div className="block clear">
              <Link href="mailto:neutricoindia@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fas fa-envelope"
                  style={{
                    display: "inline-block",
                    marginRight: "4px",
                    position: "absolute",
                    top: "10",
                    left: "0",
                    width: "15px",
                    height: "15px",
                    lineHeight: "15px",
                    textAlign: "center",
                    color: "white",
                  }}
                ></FontAwesomeIcon>
              </Link>
              <span>
                Send us a mail: <strong>neutricoindia@gmail.com</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <div className="block clear">
              <a>
                <FontAwesomeIcon
                  icon={faClock}
                  className="fas fa-clock"
                  style={{
                    display: "inline-block",
                    marginRight: "4px",
                    position: "absolute",
                    top: "10",
                    left: "0",
                    width: "15px",
                    height: "15px",
                    lineHeight: "15px",
                    textAlign: "center",
                    color: "white",
                  }}
                ></FontAwesomeIcon>
              </a>
              <span>
                Mon. - Sat.: <strong>08.00am - 10.00pm</strong>
              </span>
            </div>
          </li>
          <li className="one_quarter">
            <Link className="btn" href="/contact">
              <strong>Get A Quote</strong>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CallToAction;
