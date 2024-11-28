import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBrain,
  faClock,
  faEnvelope,
  faHeart,
  faPhone,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

function MileStones() {
  return (
    <div className="wrapper row3">
      <main className="hoc container clear">
        <section>
          <article className="one_third first">
            <p>NEUTRICO INDIA.</p>
            <h6 className="heading font-x2">
              The reputation of NEUTRICO INDIA as a trusted provider of
              healthcare solutions is built upon several key pillars
            </h6>
            <footer>
              <Link className="btn" href="/about">
                Know More About Us
              </Link>
            </footer>
          </article>
          <div className="two_third">
            <ul className="nospace group">
              <li className="one_half first btmspace-30">
                <Link href="/about">
                  <i className="icon btmspace-30">
                    <FontAwesomeIcon
                      icon={faAward}
                      className="fas fa-award"
                      style={{
                        display: "inline-block",
                        width: "35px",
                        height: "35px",
                        textAlign: "center",
                        color: "inherit",
                      }}
                    ></FontAwesomeIcon>
                  </i>
                </Link>
                <h6 className="heading">Quality Assurance: </h6>
                <p>
                  NEUTRICO INDIA maintains stringent quality control measures
                  throughout the manufacturing process to ensure that its
                  products meet the highest standards of safety, efficacy, and
                  purity. This commitment to quality assurance instills
                  confidence among healthcare professionals and patients alike.
                </p>
              </li>
              <li className="one_half btmspace-30">
                <Link href="/about">
                  <i className="icon btmspace-30">
                    <FontAwesomeIcon
                      icon={faBrain}
                      className="fas fa-brain"
                      style={{
                        display: "inline-block",
                        width: "35px",
                        height: "35px",
                        textAlign: "center",
                        color: "inherit",
                      }}
                    ></FontAwesomeIcon>
                  </i>
                </Link>
                <h6 className="heading">Research and Development:</h6>
                <p>
                  The company invests significantly in research and development
                  to continuously improve and innovate its product offerings. By
                  staying at the forefront of scientific advancements, NEUTRICO
                  INDIA is able to develop cutting-edge solutions that address
                  the evolving needs of the healthcare industry.
                </p>
              </li>
              <li className="one_half first">
                <Link href="/about">
                  <i className="icon btmspace-30 ">
                    <FontAwesomeIcon
                      icon={faStethoscope}
                      className="fas fa-stethoscope"
                      style={{
                        display: "inline-block",
                        width: "35px",
                        height: "35px",
                        textAlign: "center",
                        color: "inherit",
                      }}
                    ></FontAwesomeIcon>
                  </i>
                </Link>
                <h6 className="heading">
                  Collaboration with Healthcare Professionals:
                </h6>
                <p>
                  NEUTRICO INDIA actively collaborates with healthcare
                  professionals, including gynecologist, nurses, dietitians, and
                  pharmacists, to understand their needs and preferences. By
                  fostering partnerships with the medical community, the company
                  ensures that its products are tailored to meet the specific
                  requirements of healthcare professionals and their patients.
                </p>
              </li>
              <li className="one_half last">
                <Link href="/about">
                  <i className="icon btmspace-30">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="fas fa-heart"
                      style={{
                        display: "inline-block",
                        width: "35px",
                        height: "35px",
                        textAlign: "center",
                        color: "inherit",
                      }}
                    ></FontAwesomeIcon>
                  </i>
                </Link>
                <h6 className="heading">Reach:</h6>
                <p>
                  With a presence all over the countries , NEUTRICO INDIA has
                  established itself as a leading provider of healthcare
                  solutions on a large scale. Its products are widely
                  distributed and recommended by healthcare professionals in
                  diverse healthcare settings, including hospitals, clinics, and
                  pharmacies.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className="clear"></div>
      </main>
    </div>
  );
}

export default MileStones;
