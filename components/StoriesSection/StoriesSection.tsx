import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBong,
  faCapsules,
  faClock,
  faEnvelope,
  faEye,
  faHandHoldingHeart,
  faLightbulb,
  faPeopleCarry,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function StoriesSection() {
  return (
    <div className="wrapper row3">
      <section id="services" className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">NEUTRICO INDIA</p>
          <h6 className="heading">
            dedicated to the advancement of global health through its
            research-driven approach to developing nutritional solutions.
          </h6>
        </div>
        <ul className="nospace group grid-3">
          <li className="one_third">
            <article>
              <h6 className="heading">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faHandHoldingHeart}
                    className="fas fa-hand-holding-heart"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      width: "32px",
                      height: "32px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#d24130",
                    }}
                  ></FontAwesomeIcon>
                </a>
                Aim
              </h6>
              <p>
                NEUTRICO INDIA is dedicated to the advancement of global health
                through its research-driven approach to developing nutritional
                solutions. With a focus on nutraceuticals, the company aims to
                harness scientific knowledge to create products that promote
                wellness and prevent various health issues.
              </p>
              <footer>
                <a href="#">Read More</a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faCapsules}
                    className="fas fa-capsules"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      width: "32px",
                      height: "32px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#d24130",
                    }}
                  ></FontAwesomeIcon>
                </a>
                Commitment
              </h6>
              <p>
                The company&apos;s commitment to providing formula-driven
                nutritional products underscores its dedication to addressing
                both preventative and supplementary measures for health
                concerns. By translating scientific research into tangible
                solutions, NEUTRICO INDIA strives to uplift the health of
                individuals worldwide.
              </p>
              <footer>
                <a href="#">Read More</a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faBong}
                    className="fas fa-bong"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      width: "32px",
                      height: "32px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#d24130",
                    }}
                  ></FontAwesomeIcon>
                </a>
                Innovation
              </h6>
              <p>
                As a leader in the field of medical nutrition, NEUTRICO INDIA
                highlighting its expertise in developing products that cater to
                various health needs. Through its innovative approach, the
                company offers nutritional solutions tailored to specific
                demographics, in gynecological segment
              </p>
              <footer>
                <a href="#">Read More</a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faPeopleCarry}
                    className="fas fa-people-carry"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      width: "32px",
                      height: "32px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#d24130",
                    }}
                  ></FontAwesomeIcon>
                </a>
                Efforts
              </h6>
              <p>
                By focusing on areas such as women&apos;s health, NEUTRICO INDIA
                demonstrates its comprehensive approach to addressing diverse
                health challenges. Through its efforts, the company aims to make
                a meaningful impact on global health and wellness.
              </p>
              <footer>
                <a href="#">Read More</a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="fas fa-lightbulb"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      width: "32px",
                      height: "32px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#d24130",
                    }}
                  ></FontAwesomeIcon>
                </a>
                Mission
              </h6>
              <p>
                To improve global health and wellness by providing innovative
                and science-backed nutraceutical solutions. We are committed to
                formulating premium-quality products that promote optimal
                nutrition, support well-being, and empower individuals to live
                healthier, happier lives.
              </p>
              <footer>
                <a href="#">Read More</a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="fas fa-eye"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      width: "32px",
                      height: "32px",
                      lineHeight: "32px",
                      textAlign: "center",
                      color: "#d24130",
                    }}
                  ></FontAwesomeIcon>
                </a>
                Vision
              </h6>
              <p>
                Our vision is to be a trusted leader in the nutraceutical
                industry, renowned for our dedication to scientific excellence,
                product innovation, and customer satisfaction. We aspire to make
                a meaningful impact on the health of individuals worldwide,
                contributing to a healthier, more vibrant future for all.
              </p>
              <footer>
                <a href="#">Read More</a>
              </footer>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default StoriesSection;
