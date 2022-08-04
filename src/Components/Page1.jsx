import React, { useState } from "react";
import "./Page1.css";
import logo from "../Images/logo.png";
import menu from "../Images/Menu.png";
import loc from "../Images/Location.png";
import phone from "../Images/phone-call.png";
import instafoot from "../Images/insta-foot.png";
import fbfoot from "../Images/fb-foot.png";

function Page1() {
  const [openmenu, setopenmenu] = useState(false);

  return (
    <>
      <section className="container-fluid Page-1_sec">
        {openmenu && (
          <div className="sidenav d-flex flex-column gap-2">
            <div className="d-flex flex-row gap-2 sidenav-buttons">
              <div className="btn">CONTACT US</div>
              <div className="btn" onClick={() => setopenmenu(false)}>
                &times;
              </div>
            </div>

            <span>HOME</span>
            <span>ABOUT</span>
            <span>MEMBERSHIPS</span>
            <span>CONTACT</span>

            <div className="d-flex flex-column gap-3 location-div">
              <div>LOCATION</div>
              <div>
                3790 W. Shields Ave. <br /> Fresno, 93722
              </div>
              <div> Call : (559) 319-8162</div>
              <div>
                <div>Mon - Fri : 24 hours</div>
                <div>Sat-Sun : 7AM to 10PM</div>{" "}
              </div>
            </div>
            <div className="d-flex flex-column gap-3 contact-div">
              <div>CONNECT WITH US</div>
              <div className="d-flex  gap-3">
                <span>
                  <img
                    src={instafoot}
                    alt=""
                    srcset=""
                    height={20}
                    width={20}
                  />
                </span>
                <span>
                  <img src={fbfoot} alt="" height={20} width={20} />
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="d-flex gap-2">
            <div className="page1_contactus btn">
              <div className="">CONTACT US</div>
            </div>
            <div className="page1_menu btn" onClick={() => setopenmenu(true)}>
              <img src={menu} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="page-1_quotes d-flex justify-content-between align-items-center">
            <div>FASTER</div>
            <div style={{ position: "relative", bottom: "8px" }}>.</div>
            <div>FITTER</div>
            <div style={{ position: "relative", bottom: "8px" }}>.</div>
            <div>STRONGER</div>
          </div>
          <div className="page-1_join-movement ">
            JOIN THE <div className="MOVEMENT">MOVEMENT</div>
          </div>
          <button className="page-1_getstart ">GET STARTED TODAY &gt;</button>
        </div>
        <hr className="page-1__hr" />
        <div className="d-flex gap-3">
          <div className="page-1_add">
            <img src={loc} alt="" />
            <div>3790 W. Shields Ave. Fresno, 93722</div>
          </div>
          <div className="page-1_phn">
            <img src={phone} alt="" />
            <div>(559) 319-8162</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page1;
