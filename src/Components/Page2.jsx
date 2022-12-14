import React from "react";
import "./Page2.css";
import ecl from "../Images/Ellipse.png";
import check from "../Images/Check.png";
import clock from "../Images/clock.png";
import insta from "../Images/Instagram.png";
import instaw from "../Images/Instagram-white.png";
import bom from "../Images/bottom.png";
import logo from "../Images/logo.png";
import instafoot from "../Images/insta-foot.png";
import fbfoot from "../Images/fb-foot.png";

function Page2() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="page2 container-fluid flex-column d-flex justify-content-center align-items-center gap-4">
          <img src={ecl} alt="" className="ecl-img" />
          <div className="page-2_quotes">
            <div>JOIN OUR GYM.</div>
            <div>OUR FAMILY.</div>
          </div>
          <div className="page-2_para">
            <p>
              Whether you’re taking your first fitness class ever or returning
              to the gym after a break, training for a personal best or on a
              mission to make this year your healthiest and happiest yet, we’re
              here for you.
            </p>
            <p>
              You can run, jump, lift, box, cycle, row, squat, stretch, or
              balance your way to your fitness goals with us. Meanwhile, our
              goal is simple – to empower YOU to reach YOURS.
            </p>
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
          <div className="page-2_groupclass flex-column d-flex justify-content-center align-items-center">
            <h1>GROUP CLASSES</h1>
            <p>
              Get some motivation and inspiration in our group fitness classes!
              Choose from Yoga, Zumba, HIIT and more. There’ s a class for
              everyone! Our instructors are here to help you reach your goals.{" "}
            </p>
          </div>

          <div className="row d-flex flex-row justify-content-between">
            <div className="col-md  my-3 my-md-0 text-md-start text-center">
              <div
                className=" page-2_3_card pt-4 pb-3 px-3 "
                style={{ height: "100%" }}
              >
                <h3>PERSONAL TRAINING</h3>
                <p>
                  Three sessions included with your Gold Membership package, or
                  talk to one of our personal trainers for a program that works
                  for you.
                </p>
              </div>
            </div>
            <div className="col-md  my-3 my-md-0 text-md-start text-center">
              <div
                className=" page-2_3_card pt-4 pb-3 px-3  "
                style={{ height: "100%" }}
              >
                <h3>SUPPLEMENT SHOP</h3>
                <p>
                  We carry vitamins, supplements, pre-workout and more to help
                  fuel your lifestyle. We aim to be a one-stop-shop for your
                  health and fitness needs.
                </p>
              </div>
            </div>
            <div className="col-md  my-3 my-md-0 text-md-start text-center">
              <div
                className=" d-flex flex-column page-2_3_card pt-4 pb-3 px-3 "
                style={{ height: "100%" }}
              >
                <h3>JUICE BAR</h3>
                <p>
                  Fresh juices and smoothies are available at our in-gym juice
                  bar. Fuel your workout and recovery with our plant-based
                  options.
                </p>
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

export default Page2;
