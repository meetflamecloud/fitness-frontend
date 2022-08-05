import React from "react";
import check from "../Images/Check.png";
import "./Membership.css";
import menu from "../Images/Menu.png";
import logo from "../Images/logo.png";
import clock from "../Images/clock.png";
import bom from "../Images/bottom.png";
import instafoot from "../Images/insta-foot.png";
import fbfoot from "../Images/fb-foot.png";
import logocard from "../Images/logocard.png";

import insta from "../Images/Instagram.png";
import instaw from "../Images/Instagram-white.png";

function Membership() {
  return (
    <div className="commonback">
      <div className="faq membership">
        {/* navbar */}
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
        <div className="d-flex justify-content-center align-items-center flex-column para text-light">
          <div className="text-center">
            <h1>MEMBERSHIPS</h1>
            <p style={{ width: " 378px" }}>
              Join our gym family. Become a member today and we’ll help you
              reach your health and fitness goals. <br /> Come see the Xpress
              Fitness difference.
            </p>
          </div>
          <div className="d-flex flex-column text-center gap-3 text-light">
            <div className="registerfee">$50 REGISTRATION FEE*</div>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex justify-content-center align-items-center flex-column gap-3">
                <div className="price-card text-light py-4 gap-3">
                  <div className="cardlogo ">
                    <img src={logocard} alt="" />
                  </div>
                  <div>365 Days</div>
                </div>
                <div className="text-light para">
                  <h5>$25.00/monthly</h5>
                  <p>Billed Anually for $299.00 + Registration fees </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column gap-3">
                <div className="price-card text-light py-4 gap-3">
                  <div className="cardlogo ">
                    <img src={logocard} alt="" />
                  </div>
                  <div>365 Days</div>
                </div>
                <div className="text-light para">
                  <h5>$25.00/monthly</h5>
                  <p>Billed Anually for $299.00 + Registration fees </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column gap-3">
                <div className="price-card text-light py-4 gap-3">
                  <div className="cardlogo ">
                    <img src={logocard} alt="" />
                  </div>
                  <div>365 Days</div>
                </div>
                <div className="text-light para">
                  <h5>$25.00/monthly</h5>
                  <p>Billed Anually for $299.00 + Registration fees </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column gap-3">
                <div className="price-card text-light py-4 gap-3">
                  <div className="cardlogo ">
                    <img src={logocard} alt="" />
                  </div>
                  <div>365 Days</div>
                </div>
                <div className="text-light para">
                  <h5>$25.00/monthly</h5>
                  <p>Billed Anually for $299.00 + Registration fees </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="container-fluid page-2_whatweoffer flex-column d-flex justify-content-center align-items-center my-5">
          <div className="my-3">ALL THE PLANS INCLUDE</div>
          <div></div>
          <div className="container my-3">
            <div className="row my-md-3 ">
              <div className="col-md my-1 my-md-0">
                <img src={check} className="img-check" alt="" />
                <span className="img-check-text">Unlimited Gym Access</span>
              </div>
              <div className="col-md  my-1 my-md-0">
                {" "}
                <img src={check} className="img-check" alt="" />
                <span className="img-check-text">
                  Showers and Lockers Access
                </span>
              </div>
              <div className="col-md  my-1 my-md-0">
                {" "}
                <img src={check} className="img-check" alt="" />
                <span className="img-check-text">Free Wifi</span>
              </div>
              <div className="col-md  my-1 my-md-0">
                {" "}
                <img src={check} className="img-check" alt="" />
                <span className="img-check-text">Sauna Access</span>
              </div>
            </div>
          </div>
        </div>
        <div className="page-2_become_a_member flex-column para gap-2 my-5">
          <div>CONTACT US</div>
          <p>*Registration fee applicable on all xpress fitness memberships</p>
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

export default Membership;
