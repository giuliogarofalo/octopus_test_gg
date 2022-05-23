import React from 'react'
import { render, cleanup, fireEvent } from '../../utils/test-utils'
import ProductDetail from '../ProductDetail'

const mockProduct = {
    product: {
        id: '1',
        name: 'Energy saving light bulb',
        power: '25W',
        description:
            'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
        price: 1299,
        quantity: 4,
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

describe('Product Details', () => {
    afterEach(cleanup)

    it('renders without error', () => {
        render(<ProductDetail {...mockProduct} />)
    })

    it('Is present Add to Cart button', () => {
        const { getByText } = render(<ProductDetail {...mockProduct} />)
        getByText(/add to cart/i)
    })

    it('increments counter', () => {
        const { getByTestId } = render(<ProductDetail {...mockProduct} />)

        fireEvent.click(getByTestId('button-more'))

        expect(getByTestId('counter')).toHaveTextContent('5')
    })

    it('decrements counter', () => {
        const { getByTestId } = render(<ProductDetail {...mockProduct} />)

        fireEvent.click(getByTestId('button-less'))

        expect(getByTestId('counter')).toHaveTextContent('3')
    })
})
