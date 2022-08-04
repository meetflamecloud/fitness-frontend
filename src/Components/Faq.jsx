import React from "react";
import "./Faq.css";
import menu from "../Images/Menu.png";
import logo from "../Images/logo.png";
import clock from "../Images/clock.png";
import bom from "../Images/bottom.png";

import instafoot from "../Images/insta-foot.png";
import fbfoot from "../Images/fb-foot.png";
function Faq() {
  return (
    <>
      <div className="faq">
        <div className="d-flex justify-content-between align-items-center mb-3">
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
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5">
          <div className="text-center text-light fs-3 fw-bolder">
            FREQUENTLY ASKED <br /> QUESTIONS
          </div>
          <div className="accordian d-flex gap-2 flex-column">
            <div className="ac-item py-3 px-3">
              <div className="d-flex flex-column gap-2 ">
                <div className="d-flex justify-content-between gap-2 ac-title">
                  <div>
                    What is the question, that part comes in this place ?
                  </div>
                  <div>&times;</div>
                </div>
                <div className="ac-dis">
                  <div>
                    Quisque semper volutpat elit vel egestas. Donec nisl sapien,
                    sollicitudin ut tellus quis, pretium mollis lacus. Vivamus
                    vel pellentesque enim. Quisque vitae velit ut mauris aliquet
                    vestibulum sed quis nisl.Pellentesque nec pharetra nisl.
                    Proin sit amet varius urna. Ut mauris elit, tristique ut
                    pharetra eget, commodo vel nulla. Etiam non arcu aliquam
                    lacus tempus molestie id vitae ligula.
                  </div>
                </div>
              </div>
            </div>
            <div className="ac-item py-3 px-3">
              <div className="d-flex flex-column gap-2 ">
                <div className="d-flex justify-content-between gap-2 ac-title">
                  <div>DO YOU OFFER GROUP CLASSES?</div>
                  <div>+</div>
                </div>
                {false && (
                  <div className="ac-dis">
                    <div>
                      Quisque semper volutpat elit vel egestas. Donec nisl
                      sapien, sollicitudin ut tellus quis, pretium mollis lacus.
                      Vivamus vel pellentesque enim. Quisque vitae velit ut
                      mauris aliquet vestibulum sed quis nisl.Pellentesque nec
                      pharetra nisl. Proin sit amet varius urna. Ut mauris elit,
                      tristique ut pharetra eget, commodo vel nulla. Etiam non
                      arcu aliquam lacus tempus molestie id vitae ligula.
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="ac-item py-3 px-3">
              <div className="d-flex flex-column gap-2 ">
                <div className="d-flex justify-content-between gap-2 ac-title">
                  <div>DO YOU OFFER PERSONAL TRAINING?</div>
                  <div>+</div>
                </div>
                {false && (
                  <div className="ac-dis">
                    <div>
                      Quisque semper volutpat elit vel egestas. Donec nisl
                      sapien, sollicitudin ut tellus quis, pretium mollis lacus.
                      Vivamus vel pellentesque enim. Quisque vitae velit ut
                      mauris aliquet vestibulum sed quis nisl.Pellentesque nec
                      pharetra nisl. Proin sit amet varius urna. Ut mauris elit,
                      tristique ut pharetra eget, commodo vel nulla. Etiam non
                      arcu aliquam lacus tempus molestie id vitae ligula.
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="ac-item py-3 px-3">
              <div className="d-flex flex-column gap-2 ">
                <div className="d-flex justify-content-between gap-2 ac-title">
                  <div>HOW MUCH ARE MEMBERSHIPS?</div>
                  <div>+</div>
                </div>
                {false && (
                  <div className="ac-dis">
                    <div>
                      Quisque semper volutpat elit vel egestas. Donec nisl
                      sapien, sollicitudin ut tellus quis, pretium mollis lacus.
                      Vivamus vel pellentesque enim. Quisque vitae velit ut
                      mauris aliquet vestibulum sed quis nisl.Pellentesque nec
                      pharetra nisl. Proin sit amet varius urna. Ut mauris elit,
                      tristique ut pharetra eget, commodo vel nulla. Etiam non
                      arcu aliquam lacus tempus molestie id vitae ligula.
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="ac-item py-3 px-3">
              <div className="d-flex flex-column gap-2 ">
                <div className="d-flex justify-content-between gap-2 ac-title">
                  <div>DO YOU OFFER DISCOUNTS?</div>
                  <div>+</div>
                </div>
                {false && (
                  <div className="ac-dis">
                    <div>
                      Quisque semper volutpat elit vel egestas. Donec nisl
                      sapien, sollicitudin ut tellus quis, pretium mollis lacus.
                      Vivamus vel pellentesque enim. Quisque vitae velit ut
                      mauris aliquet vestibulum sed quis nisl.Pellentesque nec
                      pharetra nisl. Proin sit amet varius urna. Ut mauris elit,
                      tristique ut pharetra eget, commodo vel nulla. Etiam non
                      arcu aliquam lacus tempus molestie id vitae ligula.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex flex-column text-center text-light">
            <div style={{ opacity: 0.75 }}>Got more Questions ?</div>
            <div className="fw-bold faq-cu">Contact Us</div>
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
    </>
  );
}

export default Faq;
