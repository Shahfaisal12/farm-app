import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import {MdRadio} from 'react-icons/md'

const Header = () => {
  return (
    <MDBNavbar >
      <MDBContainer>
        <MDBNavbarBrand className='color-1ddafd'><img src='https://farms.marathoncash.com/assets/logo-cr.png' width={100} alt='' />&nbsp; MarathonCash.Com</MDBNavbarBrand>
        <button class="con-btn d-flex align-items-center px-2"><MdRadio /> &nbsp; Connect Wallet</button>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header