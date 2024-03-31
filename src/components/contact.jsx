import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';




import LocationImage from '../assets/location.png';
import EmailImage from '../assets/email.png';
import PhoneImage from '../assets/phone.png';

function Contact() {
  return (
    <div className="container">
      {/* <span className="big-circle"></span> */}
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Have any  questions or need help? Feel free to reach out ! We’re here for you, and we value your feedback.
          </p>

          <div className="info">
          <div className="information">
                <img src={LocationImage} className="icon" alt="" />
                <a class="mailto" href='https://maps.app.goo.gl/kq4RcL49v6mxSRVZ7' target='blank'>
                <p>2 NM 22, Block M, Old DLF, Sector 14, Gurugram, 122022</p>
                </a>
                
              </div>
              <div className="information">
                <img src={EmailImage} className="icon" alt="" />
                <a class="mailto" href="mailto:admissions@admedusociety.com?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email">admissions@admedusociety.com</a>
              </div>
              <div className="information">
                <img src={PhoneImage} className="icon" alt="" />
                <a className='mailto' href="tel:+91-9958586721">
                <p> +91-9958586721</p>
                </a>
                
              </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61550722756940&mibextid=ZbWKwL" target='blank'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FAdmeduWelfare" target='blank'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/admedu.society?igshid=MzRlODBiNWFlZA%3D%3D" target='blank'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/adm-education-and-welfare-society-45a06b27b/" target='blank'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;



