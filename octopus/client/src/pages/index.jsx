import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Products from './products'
import Product from './product'
import { ProductsProvider } from '../productsContext'

const Pages = () => {
    return (
        <ProductsProvider>
            <Router primary={false} component={Fragment}>
                <Products path="/" />
                <Product path="/product/:id" />
            </Router>
        </ProductsProvider>
    )
}

export default Pages
