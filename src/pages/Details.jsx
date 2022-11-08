import React from 'react'
import { useLocation } from 'react-router-dom';

const Details = () => {

    const location = useLocation();
    const value = location.state;
    console.log(value) 
    
  return (
    <div className="detail-section py-5">
        <div className="container">
        <div className="row">
          <div className="top-sec text-center">
            <img src="https://farms.marathoncash.com/assets/coin/USDC94.png" className='img-fluid' alt="" />
            <h1 className="mt-3">FARM</h1>
            <h6>Stake your tokens to earn more $MRACE.</h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="farm-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-img d-flex justify-content-center">
                      <img src="https://farms.marathoncash.com/assets/logo-cr.png" className='img-fluid' width={140} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <h2>MARCE</h2>
                  </div>
                </div>
                <hr className='mx-5' />
                <div className="card-bottom row text-center">
                  <div className="col-md-6"><h6>Earned</h6> <h6>0.00</h6></div>
                  <div className="col-md-6"><button className='con-btn' style={{width:'200px'}}>Harvest</button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="farm-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-img d-flex justify-content-center">
                      <img src={value.image} className='img-fluid' width={140} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <h2>{value.deposit}</h2>
                  </div>
                </div>
                <hr className='mx-5' />
                <div className="card-bottom row text-center">
                  <div className="col-md-6"><h6>Earned</h6> <h6>0.00</h6></div>
                  <div className="col-md-6"><button className='con-btn' style={{width:'200px'}}>Approve</button></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Details