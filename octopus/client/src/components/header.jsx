import React, { useContext, useState,useEffect } from 'react'
import { ReactComponent as Logo } from './../assets/logo.svg'
import { ReactComponent as CartIcon } from './../assets/basket.svg'
import { ProductsContext } from '../productsContext'

const Header = () => {
    const cart = useContext(ProductsContext)
    const [basket, setBasket]= useState(0)

    useEffect(() => {
      setBasket(cart.cart?.length > 0 ? cart.cart[0].quantity : 0)
    }, [cart])


    return (
        <nav className="navbar navbar-expand-lg section-darker d-flex justify-content-between m-0 p-0 ">
            <div className="bd-highlight octo_logo my-auto mx-2">
                <Logo />
            </div>

            <div className="p-2 cart my-auto mx-2">
                <CartIcon />
                <p data-testid="cart-items">{basket}</p>
            </div>
        </nav>
    )
}

export default Header
