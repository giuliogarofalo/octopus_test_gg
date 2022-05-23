import React from 'react'
import { Header, Footer } from '../components'
import PropTypes from 'prop-types'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container-fluid">{children}</div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout
