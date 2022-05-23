import React from 'react'
import { render, cleanup, fireEvent, screen } from '../../utils/test-utils'
import Header from '../header'
import ProductDetail from '../ProductDetail'
import { waitFor } from '@testing-library/react'

const mockProduct = {
    product: {
        id: '1',
        name: 'Energy saving light bulb',
        power: '25W',
        description:
            'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
        price: 1299,
        quantity: 1,
        brand: 'Philips',
        weight: 77,
        height: 12.6,
        width: 6.2,
        length: 6.2,
        modelCode: 'E27 ES',
        colour: 'Cool daylight',
        imgUrl: 'https://i.ibb.co/2nzwxnQ/bulb.png'
    }
}

describe('Basket', () => {
    afterEach(cleanup)

    it('should be able to add items to the basket', async () => {
        render(
            <>
                <Header />
                <ProductDetail {...mockProduct} />
            </>
        )

        const addToCart = screen.getByTestId('add-to-cart')

        fireEvent.click(addToCart)
        const basket = screen.getByTestId('cart-items')

        waitFor(() => {
            expect(basket).toHaveTextContent('2')
        })

    })
})
