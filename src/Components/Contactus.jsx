import React from "react";
import "./About_us.css";
import logo from "../Images/logo.png";
import menu from "../Images/Menu.png";
import ecl from "../Images/Ellipse.png";

import insta from "../Images/Instagram.png";
import instaw from "../Images/Instagram-white.png";
import bom from "../Images/bottom.png";

import instafoot from "../Images/insta-foot.png";
import fbfoot from "../Images/fb-foot.png";
import phone from "../Images/phone.png";
import map from "../Images/map.png";
import phn2 from "../Images/Phone2.png";
import loc2 from "../Images/Location2.png";
import clk2 from "../Images/Clock2.png";
import "./Contactus.css";

function Contactus() {
  return (
    <div className="commonback">
      <div className="aboutus_ab contact-us ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="d-flex gap-2">
            <div className="page1_contactus btn">
              <div className="">CONTACT US</div>
            </div>
            <div className="page1_menu btn">
              <img src={menu} alt="" srcset="" />
            </div>
          </div>
        </div>
        {/* landingpage */}
        <div className="d-flex flex-column text-light abtus_qt gap-2">
          <div className="d-flex justify-content-between abtus-qut">
            <div>OUR GYM</div>
            <div style={{ position: "relative", top: "-5px" }}>.</div>
            <div>OUR FAMILY</div>
          </div>
          <div>
            <h2 className="abtus">CONTACT US</h2>
            <p className="abtus-p">
              Got questions? We probably have answers. Send us a message here,
              or–better yet–call us and we’ll help you out.
            </p>
          </div>
          <button className="page-1_getstart mt-0 ">
            GET STARTED TODAY &gt;
          </button>
          <div className="d-flex gap-3 mt-2 ">
            <span className="opa75">or call</span>
            <span>
              <img src={phone} alt="" />
            </span>
            <span className="">(559) 319-8162</span>
          </div>
        </div>
      </div>
      <div className="cntus">
        <div className="row gap-3">
          <div className="col-md d-flex justify-content-around flex-column">
            <p className="page2_contactus">CONTACT US</p>
            <div className="page_2_getin">
              <span>GET IN </span> <span>TOUCH</span>
            </div>
            <form action="" className="d-flex flex-column gap-4 my-3">
              <input
                className="page2_input"
                type="text"
                placeholder="Your name"
              />
              <input
                className="page2_input "
                type="email"
                placeholder="Your email "
              />
              <select name="cars" id="cars" className="page2_input opa40">
                <option value="Select Plan" className="opa40">
                  Select Plan
                </option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <input
                className="page2_input page2_teaxarea"
                type="text"
                placeholder="Your Message"
              />
            </form>
            <div className="container-fluid p-0 ">
              <div className="row  gap-3">
                <div className="col-md "></div>
                <div className="col-md">
                  <div className="col-md">
                    <div className="d-flex btn justify-content-center align-items-center py-4 page-2_submit">
                      <div>SUBMIT &nbsp; &gt;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md d-flex gap-3 flex-column">
            <div>
              <img src={map} className="map-img" alt="" />
            </div>
            <div className="d-flex flex-column gap-4 text-light ">
              <div className="d-flex">
                <span
                  className="round-span d-flex align-items-center justify-content-center"
                  style={{ position: "relative", top: "7px" }}
                >
                  <img
                    src={loc2}
                    alt=""
                    height={20}
                    width={20}
                    className="align-baseline"
                  />
                </span>
                <span className="opa75">
                  <div>3790 W. Shields Ave.</div>
                  <div>Fresno, 93722</div>
                </span>
              </div>
              <div>
                <span className="round-span">
                  <img src={phn2} alt="" height={20} width={20} />
                </span>
                <span className="opa75">Call : (559) 319-8162</span>
              </div>
              <div className="d-flex">
                <span
                  className="round-span"
                  style={{ position: "relative", top: "7px" }}
                >
                  <img
                    className="align-baseline"
                    src={clk2}
                    alt=""
                    height={20}
                    width={20}
                  />
                </span>
                <span className="opa75">
                  <div> Mon - Fri : 24 hours</div>
                  <div> Sat-Sun : 7AM to 10PM</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourgym-abtus container-fluid flex-column d-flex justify-content-center align-items-center gap-4">
        <div className="d-flex flex-column gap-2">
          <div className="text-light text-center">
            Xpress Fitness on Instagram
          </div>
          <div className="d-flex gap-2">
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
            <div className="d-flex insta_div justify-content-center align-items-center">
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-primary text-center ">
            <img
              src={instaw}
              alt=""
              width={20}
              height={20}
              className="me-1 align-bottom"
            />
            @xf_fresno
          </button>
        </div>
      </div>
      <div className="bottom-banner ">
        <div className="row d-flex justify-content-between">
          <div className="col-8 justify-content-center align-items-center d-flex flex-fill p-3">
            <div className="row">
              <div className="col-md-10 what-are-you-div">
                WHAT ARE YOU WAITING FOR?JOIN XPRESS FITNESS TODAY
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center see-plan-div ">
                <div className="btn see-plan">SEE PLANS &nbsp; &gt;</div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center bottom-banner-img-div">
            <img src={bom} alt="" />
          </div>
        </div>
      </div>
      <div className="footer py-5 d-flex justify-content-around flex-column flex-md-row">
        <div className="d-flex flex-column gap-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            Whether you’re taking your first
            <br />
            fitness class ever or returning <br /> to the gym after a break
          </div>
          <div className="copyright-lg">
            ©All Rights Reserved Xpress Fitness
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
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
        <div className="d-flex flex-column gap-3">
          <div>LEARN MORE</div>
          <div>About Us </div>
          <div>Membership</div>
          <div>FAQs</div>
        </div>
        <div className="d-flex flex-column gap-3">
          <div>CONNECT WITH US</div>
          <div className="d-flex gap-2">
            <span>
              <img src={instafoot} alt="" srcset="" height={20} width={20} />
            </span>
            <span>
              <img src={fbfoot} alt="" height={20} width={20} />
            </span>
          </div>
        </div>

        <div className="copyright-md text-center d-none">
          ©All Rights Reserved Xpress Fitness
        </div>
      </div>
    </div>
  );
}

export default Contactus;
