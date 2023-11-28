import React, { useEffect, useState } from "react";
import "./signupByEmail.css";
import { RxCross1 } from "react-icons/rx";


export default function Signup({closeModal}) {
  // for carousel of left side
  const [slide, setSlide] = useState(false);
  

  // for carousel of signuppage 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => !prevSlide);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  


  async function Apicall() {
    console.log("Signup called");

    const Url = `https://academics.newtonschool.co/api/v1/bookingportals/signup`;

    console.log(Url);
    const response = await fetch(Url, {
      method: "POST",
      headers: {
        projectId: "f104bi07c490",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        appType: "bookingportals",
      }),
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    closeModal();
    // navigate("/flights");
  }

  // useEffect(() => {
  //   Apicall();
  // }, []);

  return (
    <div className="signup-main">
      <div className="signup-left">
        {slide ? (
          <img
            src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_410,h_337,dpr_2/offermgmt/images/slider2.png"
            alt="Image1"
          />
        ) : (
          <img
            src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_410,h_337,dpr_2/offermgmt/images/slider3.png"
            alt="Image1"
          />
        )}
      </div>
      <div className="signup-right">
        <div className="signup-container">
          <div className="close-button" onClick={closeModal}>
      
            <RxCross1 />
          </div>
          <div className="signup-form">
            <div className="signup-field">
              <div className="signup-input-field">
                <input type="text" placeholder="Enter name" value={name} onChange={changeName}/>
              </div>
              <div className="signup-input-field">
                <input type="text" placeholder="Enter email" value={email} onChange={changeEmail}/>
              </div>
              <div className="signup-input-field">
                <input type="text" placeholder="Enter password" value={password} onChange={changePassword}/>
              </div>
              <button type="submit" className="signup-btn" onClick={Apicall}>
                Signup
              </button>
              <h3 className="btn-below-text">
                Already SignedUp Please Login.
              </h3>
            </div>
            <div className="signup-agreement">
              <div className="bor-color"></div>
              <div className="agreement-content">
                <span className="span-1">
                  <span>By continuing, you agree to Cleartrip's </span>
                  <a
                    className="policy"
                    href="https://www.cleartrip.com/privacy-policy/"
                  >
                    <span> privacy policy </span>
                  </a>
                  <span>&</span>
                </span>
                <a
                  className="span-2"
                  href="https://www.cleartrip.com/privacy-policy/"
                >
                  <span>terms of use</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
