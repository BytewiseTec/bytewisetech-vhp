"use client"
import React from 'react'
import { Lightbulb, Users, Coffee } from 'lucide-react'

const WorkSpace = () => {
  return (
    <>
      <section className="office-ambiance-section py-5 py-lg-5 ps-5 pe-5 bg-light ">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-dark mb-3">
              Our Workspace
            </h1>
            <p className="fs-5 text-black w-75 w-md-100 mx-auto">
              Where innovation meets collaboration. Explore our modern workspace designed to inspire creativity and productivity.
            </p>
          </div>

          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 order-2 order-lg-1">
              <div className="pe-lg-4 text-center text-lg-start">
                <h2 className="h1 fw-bold text-dark mb-4">
                  Where Ideas Come to Life
                </h2>
                <p className="fs-5 lh-lg text-black  mb-4" style={{textAlign:'justify'}}>
                  At Bytewise, we've created an environment that fosters innovation, collaboration, and growth. 
                  Our modern workspace is designed to inspire our team and provide the perfect setting for 
                  groundbreaking ideas to flourish.
                </p>
                
                <div className="features-list">
                  <div className="d-flex align-items-center mb-4 text-center text-lg-start">
                    <div 
                      className="feature-icon me-3 flex-shrink-0"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Lightbulb className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Creative Environment</h5>
                      <p className="mb-0 text-muted">Spaces designed to spark innovation and creativity</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4 text-center text-lg-start">
                    <div 
                      className="feature-icon me-3 flex-shrink-0"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Users className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Collaborative Spaces</h5>
                      <p className="mb-0 text-muted">Open areas for team collaboration and brainstorming</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4 text-center text-lg-start">
                    <div 
                      className="feature-icon me-3 flex-shrink-0"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Coffee className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">Modern Amenities</h5>
                      <p className="mb-0 text-muted">Comfortable break areas and recreational spaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="col-lg-6 col-md-12 order-1 order-lg-2 mb-4 mb-lg-0">
              <div 
                className="position-relative mx-auto"
                style={{
                  height: '500px',
                  maxWidth: '600px'
                }}
              >
                <div 
                  className="position-absolute top-50 start-50 translate-middle z-3"
                  style={{ width: '70%' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1611570884860-6f9d61c3a64d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pbmltYWwlMjBvZmZpY2UlMjBwaWNzfGVufDB8fDB8fHww" 
                    alt="Bytewise Office Main Space"
                    className="img-fluid rounded-4 shadow-lg w-100"
                  />
                </div>
                
                <div 
                  className="position-absolute top-0 end-0 z-2"
                  style={{ width: '45%' }}
                >
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1732730224574-d05fc344b03c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1pbmltYWwlMjBvZmZpY2UlMjBwaWNzfGVufDB8fDB8fHww" 
                    alt="Meeting Room"
                    className="img-fluid rounded-3 shadow w-100"
                  />
                </div>
                
                <div 
                  className="position-absolute bottom-0 start-0 z-1"
                  style={{ width: '45%' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1692133226337-55e513450a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1pbmltYWwlMjBvZmZpY2UlMjBwaWNzfGVufDB8fDB8fHww" 
                    alt="Breakout Area"
                    className="img-fluid rounded-3 shadow w-100"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .office-ambiance-section {
              padding: 60px 0 !important;
            }
            
            .position-relative {
              height: 400px !important;
            }
            
            .position-absolute[style*="width: 70%"] {
              width: 80% !important;
            }
            
            .position-absolute[style*="width: 45%"] {
              width: 50% !important;
            }
          }

          @media (max-width: 992px) {
            .position-relative {
              height: 400px !important;
            }
            
            .position-absolute[style*="width: 70%"] {
              width: 80% !important;
            }
            
            .position-absolute[style*="width: 45%"] {
              width: 50% !important;
            }
          }

          @media (max-width: 576px) {
            .position-relative {
              height: 350px !important;
            }
            
            .position-absolute[style*="width: 70%"] {
              width: 85% !important;
            }
            
            .position-absolute[style*="width: 45%"] {
              width: 55% !important;
            }
            
            .display-5 {
              font-size: 2rem !important;
            }
            
            .h1 {
              font-size: 1.75rem !important;
            }
            
            .fs-5 {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 400px) {
            .position-relative {
              height: 300px !important;
            }
            
            .feature-icon {
              width: 40px !important;
              height: 40px !important;
            }
            
            .feature-icon svg {
              width: 18px !important;
              height: 18px !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default WorkSpace