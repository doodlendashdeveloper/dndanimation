import React, { useEffect, useState } from "react";
import "./footertwo.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/Logo.png";
import logoani from "../../assets/images/logo_ani.gif";
import footerlogo from "../../assets/images/footerlogo.png";

gsap.registerPlugin(ScrollTrigger);

const FooterTwo = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The email you entered was: ${email}`);
    setEmail("");
  };

  // useEffect(() => {
  //   gsap.to(".theline", {
  //     transformOrigin: "0% 0%",
  //     x: "-7%",
  //     rotation: -6,
  //     scrollTrigger: {
  //       trigger: ".theline",
  //       scroller: "body",
  //       start: "top top",
  //       end: "top -20%",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  // }, []);

  return (
    <>
      <div className="theline">
        {/* <del>
          <h1>Dnd animation</h1>
        </del> */}
        <div className="footer-top-logo">
          <img src={logoani} alt="not available" className="logo_ani" />
          <img src={logo} alt="WORK Logo" className="logo" />
        </div>
      </div>
      <div className="sticky-footer footertwo ">
        <div className="main-footertwo">
          <div className="reachout footer-col__copy--inline">
            <ul>
              <li>
                <p>
                  / <span>reach out</span>
                </p>
              </li>
              <li className="footer-col__copy--inline">
                <a href="/">info@thedndanimation.com</a>
              </li>
              <li>
                <a href="tel:7732196748">
                  / <span>(773) 219-6748</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="dnd-footer-logo">
            <img
              className="footerlogo"
              src={footerlogo}
              alt="Image Not Available"
            />
          </div>
          <div className="findus footer-col__copy--inline">
            <ul>
              <li>
                <p>/</p>
              </li>
              <li>
                <p>
                  <span>find us</span>
                </p>
              </li>
              <li>
                <a href="/">
                  the dnd animation studio ltd
                  <br /> studie 02
                </a>
              </li>
              <li>
                <a href="/">
                  de beauvoir block, 92-96
                  <br />
                  de beauvoir road
                  <br />
                  london, n1 4en
                </a>
              </li>
            </ul>
          </div>
          <div className="socials footer-col__copy--inline">
            <ul>
              <li>
                <p>/</p>
              </li>
              <li>
                <p>
                  <span>socials</span>
                </p>
              </li>
              <li>
                <a href="/">youtube</a>
              </li>
              <li>
                <a href="/">instagram</a>
              </li>
              <li>
                <a href="/">ticktok</a>
              </li>
              <li>
                <a href="/">x</a>
              </li>
              <li>
                <a href="/">facebook</a>
              </li>
              <li>
                <a href="/">linkedin</a>
              </li>
            </ul>
          </div>
          <div className="nav-links footer-col__copy--inline">
            <ul>
              <li>
                <p>/</p>
              </li>
              <li>
                <p>
                  <span>nav</span>
                </p>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">work</a>
              </li>
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footertwo-bottom">
          <div className="newslatter">
            <form>
              <input
                type="email"
                name="Email"
                value={email}
                placeholder="Newsletter"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
            </form>
          </div>
          <div className="copyright-links">
            <p className="copyrightnav">
              © the DND Animation 2025/{" "}
              <a href="/" className="blinks">
                site credits
              </a>
              /{" "}
              <a href="/" className="blinks">
                privacy
              </a>
              /{" "}
              <a
                href="#"
                className="blinks"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("up");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTwo;
