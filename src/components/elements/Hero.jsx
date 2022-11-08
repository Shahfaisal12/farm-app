import React from 'react'
import { useNavigate } from 'react-router-dom'

const farmData = [{
  id: '1',
  image: 'https://farms.marathoncash.com/assets/coin/GMT94.png',
  image1: 'https://farms.marathoncash.com/assets/logo-cr.png',
  percent: '500%',
  deposit: 'GMT',
}, {
  id: '2',
  image: 'https://farms.marathoncash.com/assets/coin/GMT94.png',
  percent: '600%',
  deposit: 'GMT',
  earn: 'MRACE'
}, {
  id: '3',
  image: 'https://farms.marathoncash.com/assets/coin/BUSD94.png',
  percent: '3500%',
  deposit: 'BUSD',
}, {
  id: '4',
  image: 'https://farms.marathoncash.com/assets/coin/USDT94.png',
  percent: '4000%',
  deposit: 'USDT',
}, {
  id: '5',
  image: 'https://farms.marathoncash.com/assets/coin/USDC94.png',
  percent: '4000%',
  deposit: 'USDC',
}, {
  id: '6',
  image: 'https://farms.marathoncash.com/assets/coin/WBNB94.png',
  percent: '3400%',
  deposit: 'WBNB',
}, {
  id: '7',
  image: 'https://farms.marathoncash.com/assets/coin/CAKE94.png',
  percent: '4500%',
  deposit: 'CAKE',
}, {
  id: '8',
  image: 'https://farms.marathoncash.com/assets/coin/ETH94.png',
  percent: '7800%',
  deposit: 'ETH',
}, {
  id: '9',
  image: 'https://farms.marathoncash.com/assets/coin/1INCH94.png',
  percent: '3400%',
  deposit: '1INCH',
},]


const Hero = () => {

  
  const navigate = useNavigate();

 const goToDetail = (data) => (
  navigate('/details', { state: data })
)

  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row">
          <div className="top-sec text-center">
            <img src="https://farms.marathoncash.com/assets/coin/USDC94.png" className='img-fluid' alt="" />
            <h1 className="mt-3">FARM</h1>
            <h6>Stake your tokens to earn more $MRACE.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="farm-card min-h-330">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-img d-flex justify-content-center">
                      <img src="https://farms.marathoncash.com/assets/logo-cr.png" className='img-fluid' width={140} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3>Your MRACE Balance</h3>
                    <h2 className='text-center'>0.00</h2>
                  </div>
                </div>
                <hr className='mx-5' />
                <div className="card-bottom row text-center">
                  <div className="col-md-6"><h6>Pending Harvest</h6></div>
                  <div className="col-md-6"><h6><span>0.00 </span> MRACE</h6></div>
                  <div className="col-md-6"><h6>Daily Output of <span>MRACE</span></h6></div>
                  <div className="col-md-6"><h6><span>0.00 </span> MRACE</h6></div>
                </div>
              </div>
            </div>
          </div>
          
          {
            farmData.slice(0, 1).map((data) =>
          <div className="col-md-6" key={data.id}>
            <div className="farm-card min-h-330">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-img d-flex justify-content-center">
                      <img src={data.image} className='img-fluid' width={140} alt="" />
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center text-center">
                    <h2 className='h4'>APY: {data.percent}</h2>
                  </div>
                  <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <img src={data.image1} className='img-fluid' width={140} alt="" />
                  </div>
                </div>
                <hr className='mx-5' />
                <div className="row card-bottom">
                  <div className="col-lg-6">
                    <div className="row m-auto text-center">
                      <div className="col-lg-6"><h6>Earn</h6></div>
                      <div className="col-lg-6 "><h6><span>GMT</span></h6></div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row m-auto text-center">
                      <div className="col-lg-6"><h6>DEPOSIT</h6></div>
                      <div className="col-lg-6 "><h6><span>MRACE</span></h6></div>
                    </div>
                  </div>
                </div>
                <div className="row pt-3 justify-content-center">
                  <div className="col-4 d-flex text-center"><button className="con-btn w-100" onClick={()=>goToDetail(data)}>Seclect</button></div>
                </div>
              </div>
            </div>
          </div>
            )}
        </div>
        <div className="row text-center mt-5"><h1>Choose Your Stake Pool</h1></div>
        <div className="row pt-5">
          {
            farmData.slice(1, 100).map((data) =>

              <div className="col-lg-3 m-auto" key={data.id}>
                <div className="farm-card m-auto p-3 mb-3">
                  <div className="card-body">
                    <div className="text-center">
                      <img src={data.image} width="100" alt="" />
                      <h2 className='h4 my-2'>APY: {data.percent}</h2>
                    </div>
                    <div className="row mt-3 m-auto">
                      <div className="col-lg-6"><h6>Deposit</h6></div>
                      <div className="col-lg-6 m-auto text-end"><h6><span>{data.deposit}</span></h6></div>
                    </div>
                    <div className="row m-auto">
                      <div className="col-lg-6"><h6>Earn</h6></div>
                      <div className="col-lg-6 text-end"><h6><span>MRACE</span></h6>
                      </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                      <button className='con-btn' onClick={()=> goToDetail(data)} style={{ width: '200px' }}>Seclect</button>
                    </div>
                  </div>
                </div>
              </div>

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Hero