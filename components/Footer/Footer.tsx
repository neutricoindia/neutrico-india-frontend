import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <div className="wrapper row4">
      <footer id="footer" className="hoc clear">
        <div className="one_quarter first">
          <h6 className="heading">Neutrico India</h6>
          <nav>
            <ul className="nospace linklist">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="one_quarter">
          <h6 className="heading">Certificates</h6>
          <ul className="nospace clear latestimg">
            <li>
              <Image
                src={"/images/fssai.png"}
                alt="fssai"
                width="75"
                height="40"
              />
            </li>
            <li>
              <Image
                src={"/images/msme.png"}
                alt="msme"
                width="75"
                height="40"
              />
            </li>
            <li>
              <Image src={"/images/iso.png"} alt="iso" width="75" height="40" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
