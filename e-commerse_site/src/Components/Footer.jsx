import React from 'react'
import { useContext } from 'react';
import {Container} from 'react-bootstrap'
import { themecontxt } from '../Context/creatContext';
function Footer() {
  let value=useContext(themecontxt)
    return (
      <div style={value.theme}>
      <Container bgColor='dark' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-secondary text-white'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-facebook-f'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-google'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-linkedin'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-github'></i>
            </a>
          </div>
        </section>
  
        <section className='bg-secondary text-white'>
          <div className='container text-center text-md-start'>
            <div className='row '>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <i className='fa fa-gem me-3'></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </div>
  
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Laravel
                  </a>
                </p>
              </div>
  
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </div>
  
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <i className='fa fa-home me-3'></i> New York, NY 10012, US
                </p>
                <p>
                  <i className='fa fa-envelope me-3'></i>
                  info@example.com
                </p>
                <p>
                  <i className='fa fa-phone me-3'></i> + 01 234 567 88
                </p>
                <p>
                  <i className='fa fa-print me-3'></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <div className='text-center p-4 bg-dark text-white'>
          © 2021 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </Container>
      </div>
     );
}

export default Footer