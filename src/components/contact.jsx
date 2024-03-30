// import React from 'react'













// const contact = () => {

//   const myFunction = () => {
//     const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });
//   }

//   return (
//   <>

//       <div class="container">

//         <span class="big-circle"></span>
//         <img src="img/shape.png" class="square" alt="" />
//         <div class="form">
//         <div class="contact-info">
//           <h3 class="title">Let's get in touch</h3>
//           <p class="text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
//             dolorum adipisci recusandae praesentium dicta!
//           </p>

//           <div class="info">
//             <div class="information">
//               <img src="img/location.png" class="icon" alt="" />
//               <p>92 Cherry Drive Uniondale, NY 11553</p>
//             </div>
//             <div class="information">
//               <img src="img/email.png" class="icon" alt="" />
//               <p>lorem@ipsum.com</p>
//             </div>
//             <div class="information">
//               <img src="img/phone.png" class="icon" alt="" />
//               <p>123-456-789</p>
//             </div>
//           </div>

//           <div class="social-media">
//             <p>Connect with us :</p>
//             <div class="social-icons">
//               <a href="#">
//                 <i class="fab fa-facebook-f"></i>
//               </a>
//               <a href="#">
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a href="#">
//                 <i class="fab fa-instagram"></i>
//               </a>
//               <a href="#">
//                 <i class="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div class="contact-form">
//           <span class="circle one"></span>
//           <span class="circle two"></span>

//           <form action="index.html" autocomplete="off">
//             <h3 class="title">Contact us</h3>
//             <div class="input-container">
//               <input type="text" name="name" class="input" />
//               <label for="">Username</label>
//               <span>Username</span>
//             </div>
//             <div class="input-container">
//               <input type="email" name="email" class="input" />
//               <label for="">Email</label>
//               <span>Email</span>
//             </div>
//             <div class="input-container">
//               <input type="tel" name="phone" class="input" />
//               <label for="">Phone</label>
//               <span>Phone</span>
//             </div>
//             <div class="input-container textarea">
//               <textarea name="message" class="input"></textarea>
//               <label for="">Message</label>
//               <span>Message</span>
//             </div>
//             <input type="submit" value="Send" class="btn" />
//           </form>
//         </div>
//       </div>
//     </div>

//     </>
    
//   )
// }

// export default contac


// import React, { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


// import LocationImage from '../assets/location.png';
// import EmailImage from '../assets/email.png';
// import PhoneImage from '../assets/phone.png';



// const Contact = () => {

//   useEffect(() => {
//     const inputs = document.querySelectorAll(".input");

//     const focusFunc = (e) => {
//       let parent = e.target.parentNode;
//       parent.classList.add("focus");
//     };

//     const blurFunc = (e) => {
//       let parent = e.target.parentNode;
//       if (e.target.value === "") {
//         parent.classList.remove("focus");
//       }
//     };

//     inputs.forEach((input) => {
//       input.addEventListener("focus", focusFunc);
//       input.addEventListener("blur", blurFunc);

//       return () => {
//         input.removeEventListener("focus", focusFunc);
//         input.removeEventListener("blur", blurFunc);
//       };
//     });
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="form">
//           <div className="contact-info">
//             <h3 className="title">Let's get in touch</h3>
//             <p className="text">
//             Have any  questions or need help? Feel free to reach out ! We’re here for you, and we value your feedback.

//             </p>
//             <div className="info">
//               <div className="information">
//                 <img src={LocationImage} className="icon" alt="" />
//                 <p>2 NM 22, Block M, Old DLF, Sector 14, Gurugram, 122022</p>
//               </div>
//               <div className="information">
//                 <img src={EmailImage} className="icon" alt="" />
//                 <p> admissions@admedusociety.com</p>
//               </div>
//               <div className="information">
//                 <img src={PhoneImage} className="icon" alt="" />
//                 <p> +91-9958586721</p>
//               </div>
//             </div>
//             <div className="social-media">
//               <p>Connect with us :</p>
//               <div className="social-icons">
//               <a href="#">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//               <a href="#">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a href="#">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a href="#">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>
//             </div>
//             </div>
//           </div>
//           <div className="contact-form">
//             <span className="circle one"></span>
//             <span className="circle two"></span>
//             <form action="index.html" autoComplete="off">
//               <h3 className="title">Contact us</h3>
//               <div className="input-container">
//                 <input type="text" name="name" className="input" />
//                 <label htmlFor="">Username</label>
//                 <span>Username</span>
//               </div>
//               <div className="input-container">
//                 <input type="email" name="email" className="input" />
//                 <label htmlFor="">Email</label>
//                 <span>Email</span>
//               </div>
//               <div className="input-container">
//                 <input type="tel" name="phone" className="input" />
//                 <label htmlFor="">Phone</label>
//                 <span>Phone</span>
//               </div>
//               <div className="input-container textarea">
//                 <textarea name="message" className="input"></textarea>
//                 <label htmlFor="">Message</label>
//                 <span>Message</span>
//               </div>
//               <input type="submit" value="Send" className="btn" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React from 'react';
 // Import CSS file

function Contact() {
  return (
    <div className="container">
      {/* <span className="big-circle"></span> */}
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
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



