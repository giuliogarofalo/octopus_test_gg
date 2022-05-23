import React from 'react'

const ProductDetailWrapper = ({ loading, error, data, children }) => {
    if (error) {
        return <p>ERROR: {error.message}</p>
    }
    if (loading) {
        return 'loading'
    }
    if (!data) {
        return <p>Nothing to show...</p>
    }
    if (data) {
        return children
    }
}

export default ProductDetailWrapper
