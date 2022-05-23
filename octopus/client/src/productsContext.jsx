import React, { useState, createContext, useMemo } from 'react'

const ProductsContext = createContext({
    cart: [],
    setCart: () => {},
    products: [],
    setProducts: () => {}
})

const ProductsProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    const providerValue = useMemo(
        () => ({
            cart,
            setCart,
            products,
            setProducts
        }),
        [cart, products]
    )

    return <ProductsContext.Provider value={providerValue}>{children}</ProductsContext.Provider>
}
export { ProductsContext, ProductsProvider }
