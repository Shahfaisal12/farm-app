import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Base
