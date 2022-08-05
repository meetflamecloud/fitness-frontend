import React from "react";
import "./About_us.css";
import logo from "../Images/logo.png";
import menu from "../Images/Menu.png";
import ecl from "../Images/Ellipse.png";
import check from "../Images/Check.png";
import clock from "../Images/clock.png";
import insta from "../Images/Instagram.png";
import instaw from "../Images/Instagram-white.png";
import bom from "../Images/bottom.png";

import instafoot from "../Images/insta-foot.png";
import fbfoot from "../Images/fb-foot.png";

function Aboutus() {
  return (
    <>
      <div className="aboutus_ab ">
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
            <h2 className="abtus">ABOUT US</h2>
            <p className="abtus-p">
              Whether you’re taking your first fitness class ever or returning
              to the gym after a break, training for a personal best or on a
              mission to make this year your healthiest and happiest yet, we’re
              here for you.
            </p>
          </div>
          <button className="page-1_getstart mt-0 ">
            GET STARTED TODAY &gt;
          </button>
        </div>
      </div>
      {/* ourgym */}
      <div className="container-fluid m-0 p-0">
        <div className="ourgym-abtus container-fluid flex-column d-flex justify-content-center align-items-center gap-4">
          <img src={ecl} alt="" className="ecl-img" />
          <div className="d-flex flex-column">
            <h1 className="text-center text-light our-gym-text">OUR GYM</h1>
            <div className="para d-md-flex text-md-start text-light text-center gap-3">
              <div>
                <p>
                  Xpress Fitness Center is a locally owned independent gym
                  serving the West Fresno community. We saw a need for a fitness
                  center west of the 99 that will help people who live and work
                  here reach their health goals. We believe in offering the best
                  equipment, the most inviting group fitness classes, and the
                  cleanest facilities to our members.
                </p>
                <p>
                  Our 32,000 square-foot gym houses showers and locker rooms, a
                  sauna, a fresh juice and smoothie bar, a vitamin supplement
                  store, and a huge variety of cardio machines and weights. It’s
                  a one-stop-shop for all of your fitness and nutrition needs.
                </p>
                <p>
                  With 40 treadmills and dozens of elliptical machines, stair
                  climbers, and stationary bikes, you’ll never have to wait for
                  a machine. Push weights in our green turf room, sweat in our
                  hot yoga studio, shake it in our Zumba room, and push your
                  limits in our strength room.
                </p>
              </div>
              <div>
                <p>
                  Our professionals can help you with nutrition plans and
                  personal training so you can achieve your health goals. You
                  can find a group fitness class that fits your schedule, goals,
                  and interests, from Zumba to yoga to HIIT and beyond.
                </p>
                <p>
                  We’re open from 5 a.m. to 11pm so you can work out on your
                  schedule. We believe in whole family fitness; family members
                  can be added to your membership at discounted rates. Come see
                  the Xpress Fitness difference.
                </p>
              </div>
            </div>
          </div>
          <div className="page-2_become_a_member">
            <div>BECOME A MEMBER</div>
          </div>
          <div className="container-fluid page-2_whatweoffer flex-column d-flex justify-content-center align-items-center">
            <div className="my-3">WHAT WE OFFER</div>
            <div></div>
            <div className="container my-3">
              <div className="row my-md-3 ">
                <div className="col-md my-3 my-md-0">
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">Clean facilities</span>
                </div>
                <div className="col-md  my-3 my-md-0">
                  {" "}
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">Sauna access</span>
                </div>
                <div className="col-md  my-3 my-md-0">
                  {" "}
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">Secure lockers</span>
                </div>
                <div className="col-md  my-3 my-md-0">
                  {" "}
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">Spotless showers</span>
                </div>
              </div>
              <div className="row my-md-3">
                <div className="col-md  my-3 my-md-0">
                  {" "}
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">
                    Top-of-the-line equipment
                  </span>
                </div>
                <div className="col-md  my-3 my-md-0">
                  {" "}
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">Friendly instructors</span>
                </div>
                <div className="col-md  my-3 my-md-0">
                  {" "}
                  <img src={check} className="img-check" alt="" />
                  <span className="img-check-text">Group fitness classes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gap-3">
              <div className="col-md gym-div">
                {/* <img src={gym} className="gym-img" alt="" /> */}
              </div>
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
                    placeholder="Email"
                  />
                  <input
                    className="page2_input page2_teaxarea"
                    type="text"
                    placeholder="Your Message"
                  />
                </form>
                <div className="container-fluid p-0 ">
                  <div className="row  gap-3">
                    <div className="col-md ">
                      <div className="d-flex gap-2 page-2_timing_div py-3 px-2 ">
                        <div>
                          <img src={clock} alt="" />
                        </div>
                        <div>
                          <div>Mon - Fri : 24 hours</div>
                          <div>Sat-Sun : 7AM to 10PM</div>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
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
    </>
  );
}

export default Aboutus;
