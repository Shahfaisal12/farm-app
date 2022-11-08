import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from '../Layout/Base'
import Home from '../../pages/Home'
import PageNotFound from '../../pages/PageNotFound'
import Details from '../../pages/Details'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/details' element={<Details />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage