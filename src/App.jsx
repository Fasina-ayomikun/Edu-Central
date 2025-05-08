import { FiInfo } from "react-icons/fi";
import "./App.css";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const steps = [
  {
    step: 1,
    desc: "personal info",
  },
  {
    step: 2,
    desc: "address",
  },
  {
    step: 3,
    desc: "Verification",
  },
  {
    step: 4,
    desc: "Terms & Condition",
  },
];

// const steps = {
//   personal: {
//     step: 1,
//     desc: "personal info",
//   },
//   address: {
//     step: 2,
//     desc: "address",
//   },
//   verification: {
//     step: 3,
//     desc: "Verification",
//   },
//   terms: {
//     step: 4,
//     desc: "Terms & Condition",
//   },
// };
function App() {
  const [eventKey, setEventKey] = useState(1);
  return (
    <section className='py-6'>
      <nav className='d-flex justify-content-between align-items-center px-4 py-2 bg-white'>
        <h4 className='mb-0 text-secondary'>LOGO</h4>
        <ul className='d-flex list-unstyled mb-0 gap-3 align-items-center'>
          <li className='d-none d-md-block'>
            <FaFacebook className='text-secondary fs-5' />
          </li>
          <li className='d-none d-md-block'>
            <FaInstagram className='text-secondary fs-5' />
          </li>
          <li className='d-none d-md-block'>
            <FaX className='text-secondary fs-5' />
          </li>
          <li className='d-none d-md-block'>
            <FaLinkedin className='text-secondary fs-5' />
          </li>
          <li>
            <button className='btn btn-secondary rounded-circle p-2 border-1 '>
              <FaAlignCenter />
            </button>
          </li>
        </ul>
      </nav>

      <section className='container-xl p-md-5 p-3'>
        <div className='row gap-4'>
          <div
            className=' gradient rounded col-12 col-md-4 col-lg-3  py-3 px-4'
            style={{ height: "100%" }}
          >
            <img src='/logo.png' alt='Image' className='w-50 mb-0' />
            <h1 className='text-white h2 fw-medium '>Registration</h1>
            <p className='text-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              impedit reprehenderit, modi tempora repellat nemo vitae dolor
              inventore iste ullam.
            </p>
            <div className='d-flex  justify-content-end'>
              <FiInfo className='text-light ' />
            </div>
          </div>
          <div className='col-12 col-md-7 step-links'>
            <div className='d-flex flex-row justify-content-start gap-1'>
              {steps.map((item) => {
                return (
                  <div
                    key={item.step}
                    className={` py-2 px-3 rounded-top-3 cursor-pointer ${
                      eventKey === item.step && "bg-white"
                    }`}
                    style={{ background: "#c7d1d6" }}
                    onClick={() => setEventKey(item.step)}
                  >
                    <h3 className='h5 mb-0 fs-6 text-sm-start text-center '>
                      Step {item.step}
                    </h3>
                    <p className='d-md-block d-none capitalize mb-0 text-body-tertiary'>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
            {eventKey === 1 && (
              <form className='container-xl  bg-white  p-5 rounded-bottom-3 '>
                <div className='row gap-5 my-5'>
                  <input
                    type='text'
                    placeholder='First Name'
                    className='form-control col-md col-12  border-0 border-bottom text-black  '
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                </div>
                <div className='row gap-5 my-5'>
                  <input
                    type='text'
                    placeholder='Your Email'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                  <input
                    type='text'
                    placeholder='Telephone'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                </div>
                <div className='row gap-5 align-items-center my-5'>
                  <input
                    type='text'
                    placeholder='Age'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                  <div className='col row gap-5'>
                    <div className='form-check  col-2 '>
                      <input type='radio' className='form-check-input' />
                      <label htmlFor='' className='form-check-label'>
                        Male
                      </label>
                    </div>
                    <div className='form-check col-2'>
                      <input type='radio' className='form-check-input' />
                      <label htmlFor='' className='form-check-label'>
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className='d-flex  justify-content-end'>
                  <button
                    onClick={() => setEventKey(eventKey + 1)}
                    className='btn btn-primary px-5 align-self-end'
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            {eventKey === 2 && (
              <form className='container-xl  bg-white  p-5 rounded-bottom-3 '>
                <div className='row gap-5 my-5'>
                  <input
                    type='text'
                    placeholder='street 1'
                    className='form-control col-12  border-0 border-bottom text-black  '
                  />
                  <input
                    type='text'
                    placeholder='street 2'
                    className='form-control col-12 border-0 border-bottom text-black  '
                  />
                </div>
                <div className='row gap-5 my-5'>
                  <input
                    type='text'
                    placeholder='City'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                  <input
                    type='text'
                    placeholder='State'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                </div>
                <div className='row gap-5 align-items-center my-5'>
                  <select class='form-select col-md col-12 border-0 border-bottom'>
                    <option selected>Select your country</option>
                    <option value='1'>Nigeria</option>
                    <option value='2'>USA</option>
                    <option value='3'>Uk</option>
                  </select>
                  <input
                    type='text'
                    placeholder='Zip code'
                    className='form-control col-md col-12 border-0 border-bottom text-black  '
                  />
                </div>
                <div className='d-flex  justify-content-between'>
                  <button
                    onClick={() => setEventKey(eventKey - 1)}
                    className='btn btn-secondary px-md-5 px-3 align-self-end'
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setEventKey(eventKey + 1)}
                    className='btn btn-primary px-md-5 px-3 align-self-end'
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            {eventKey === 3 && (
              <form className='container-xl  bg-white  p-5 rounded-bottom-3 '>
                <p className='text-black fw-semibold'>
                  Please provide the following information for verification
                </p>
                <div className='row gap-5 my-5'>
                  <input
                    type='text'
                    placeholder='NIN'
                    className='form-control  col-md col-12  border-0 border-bottom text-black  '
                  />
                  <input
                    type='text'
                    placeholder='BVN'
                    className='form-control  col-md col-12 border-0 border-bottom text-black  '
                  />
                </div>
                <div className='row gap-4 my-5'>
                  <div className='col-12'>
                    <label htmlFor='' className='form-label fw-semibold '>
                      Upload Front of ID (JPG,PNG,PCF - Max size:5mb)
                    </label>
                    <div className='my-2 step-file text-center rounded-2 px-3 py-3  text-primary'>
                      [Choose file]
                    </div>
                    <small className='fst-italic'>
                      &#x1F4CC;Make sure the uploaded image is clear and all
                      text is readable
                    </small>
                  </div>
                  <div className='col-12 '>
                    <label htmlFor='' className='fw-semibold form-label'>
                      Upload Back of ID (JPG,PNG,PCF - Max size:5mb)
                    </label>
                    <div className='my-2 step-file text-center rounded-2 px-3 py-3  text-primary'>
                      [Choose file]
                    </div>
                    <small className='fst-italic'>
                      &#x1F4CC; Make sure the uploaded image is clear and all
                      text is readable
                    </small>
                  </div>
                </div>

                <div className='d-flex  justify-content-between'>
                  <button
                    onClick={() => setEventKey(eventKey - 1)}
                    className='btn btn-secondary px-md-5 px-3 align-self-end'
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setEventKey(eventKey + 1)}
                    className='btn btn-primary px-md-5 px-3 align-self-end'
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            {eventKey === 4 && (
              <form className='container-xl  bg-white  p-5 rounded-bottom-3 '>
                <h3 className='fw-bold text-center'>Terms and Conditions</h3>
                <p className='fw-medium text-center'>
                  Please read the following terms carefully before submitting
                  your information
                </p>
                <ol className='text-body fw-medium h6'>
                  <li className='my-3'>
                    Accuracy of Information <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores fugiat aliquam ea neque necessitatibus cumque facere
                    beatae aperiam harum porro.
                  </li>
                  <li className='my-3'>
                    Use of Information <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores fugiat aliquam ea neque necessitatibus cumque facere
                    beatae aperiam harum porro.
                  </li>
                  <li className='my-3'>
                    Consent <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores fugiat aliquam ea neque necessitatibus cumque facere
                    beatae aperiam harum porro.
                  </li>
                </ol>
                <div className='my-3'>
                  <input type='checkbox' name='' id=' ' className='m-2' />
                  <label htmlFor='' className='fw-medium'>
                    Please accept{" "}
                    <span className='text-primary'>term and conditions</span>?
                  </label>
                </div>

                <div className='d-flex  justify-content-between'>
                  <button
                    onClick={() => setEventKey(eventKey - 1)}
                    className='btn btn-secondary px-md-5 px-3 align-self-end'
                  >
                    Previous
                  </button>
                  <button className='btn btn-success px-md-5 px-3 align-self-end'>
                    Finish!
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
export default App;
