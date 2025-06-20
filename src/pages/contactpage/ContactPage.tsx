import React, { useState, useEffect } from "react";
import darkbluebg from "../../assets/images/darkbluebg.png";
import darkblue from "../../assets/images/darkblue.png";
// import { FaEnvelope, FaMobile, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./contactpage.css";
import FooterTwo from "../../components/footertwo/Footertow.tsx";

const ContactPage = ({ headerRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 690);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("typing", form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "", phone: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setForm({ name: "", email: "", message: "", phone: "" });
      setStatus("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="contactpage">
        <img className="darkbluebg" src={darkbluebg} alt="darkblue" />
        <div className="cont-wrap">
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity,
            }}
            className="darkblue"
            src={darkblue}
            alt="darkblue"
          />
          <div className="heading-section">
            <div className="ttl">
              {/* <h6>contact</h6> */}

              <h1>
                <strong>contact</strong> us for Any <strong>Questions</strong>
              </h1>
            </div>
            <div className="para">
              <p>
                As a matter of fact the unification of the coherent
                <br /> software provides a strict control over
                <br /> The Accomplishment of Intended
                <br /> Estimation
              </p>
            </div>
          </div>
          <div className="con-section">
            <div className="info-section">
              {/* <h3>contact info :</h3> */}
              <ul>
                <li>
                  <a className="infos" href="mailto:info@dndanimations.com">
                    <motion.span
                      className="mail"
                      whileHover={{
                        color: "#94ff00",
                      }}
                    >
                      info@dndanimations.com
                    </motion.span>
                  </a>
                </li>
                <li>
                  <a className="infos" href="tel:7732196748">
                    <motion.span
                      className="phone"
                      whileHover={{
                        color: "#94ff00",
                      }}
                    >
                      (773) 219-6748
                    </motion.span>
                  </a>
                </li>
                <li>
                  <span className="infos">
                    <motion.span
                      className="location"
                      whileHover={{
                        color: "#94ff00",
                      }}
                    >
                      465 N Park Dr Chicago IL 60611
                    </motion.span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="con-form-section">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  type="message"
                  placeholder="Message"
                  onChange={handleChange}
                  required
                />
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.01,
                    ease: "easeOut",
                  }}
                  type="submit"
                >
                  Submit
                </motion.button>
                <p
                  className="status"
                  style={{
                    fontSize: isMobile ? "3rem" : "1rem",
                    margin: 0,
                    paddingTop: isMobile ? "3.4rem" : "1.4rem",
                    color: "white",
                    fontFamily: "ProximaNova",
                    lineHeight: "0.6rem",
                  }}
                >
                  {status}
                </p>
              </form>
            </div>
          </div>
          {/* <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1005563810386!2d-87.6217112231912!3d41.89069446462431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d2cae0556cb%3A0x37d2c35207901793!2s465%20N%20Park%20Dr%2C%20Chicago%2C%20IL%2060611%2C%20USA!5e0!3m2!1sen!2s!4v1750089569448!5m2!1sen!2s"
              title="Contact map location"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "1.2rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </div>
      <FooterTwo scrollToRef={headerRef} />
    </>
  );
};

export default ContactPage;
