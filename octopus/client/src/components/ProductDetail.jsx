import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { ProductsContext } from '../productsContext'

const ProductDetail = ({ product }) => {
    const { cart, setCart } = useContext(ProductsContext)

    const {
        name,
        power,
        description,
        price,
        quantity,
        brand,
        weight,
        height,
        width,
        length,
        modelCode,
        colour,
        imgUrl
    } = product

    const fullPrice = `${price / 100}`.split('.')
    let [vquantity, setVquantity] = useState(quantity)

    const reduceCart = (cart) => {
        const finalArr = cart.reduce((acc, item) => {
            const existingObjectIndex = acc.findIndex((i) => i.id === item.id)
            if (existingObjectIndex < 0) {
                acc.push({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity
                })
            } else {
                acc[existingObjectIndex].quantity += item.quantity
            }

            return acc
        }, [])
        return finalArr
    }

    const addToCart = (prod) => {
        let tempCart = cart
        tempCart.push(prod)
        const result = reduceCart(tempCart)

        setCart(result)
    }

    return (
        <>
            <div className="row section-darker product-image-container mx-auto">
                <img className="product_image" src={imgUrl} />
            </div>
            <div className="row section-lighter p-3">
                <h4 className="product-name">{name}</h4>

                <span className="product-description light-blue-text">{power}</span>
            </div>
            <div className="row section-darker p-3">
                <div className="col-6 text-wrap">
                    <span className="product-price-number pt-3">
                        {fullPrice[0]}
                        <p className="product-price-number-decimals">{fullPrice[1] || ''}</p>
                    </span>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <span className="light-blue-text text-center">QTY</span>
                        <div className="quantity-section d-flex justify-content-center">
                            <button
                                data-testid="button-less"
                                type="button"
                                className="less-button"
                                onClick={() => setVquantity(--vquantity)}
                            >
                                -
                            </button>
                            <span data-testid="counter" className="product-quantity px-2 bold">
                                {vquantity}
                            </span>
                            <button
                                data-testid="button-more"
                                type="button"
                                className="plus-button"
                                onClick={() => setVquantity(++vquantity)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col mt-3">
                    <button
                        onClick={() =>
                            addToCart({
                                id: product.id,
                                name: product.name,
                                quantity: vquantity
                            })
                        }
                        data-testid="add-to-cart"
                        type="button"
                        className="add-to-cart"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="row section-lighter p-3">
                <h4 className="details-title py-2">Description</h4>

                <span className="details-body">{description}</span>
            </div>
            <div className="row section-darker p-3">
                <h4 className="details-title py-2">Specifications</h4>

                <div className="row details-body">
                    <div className="col-6 ">
                        <p>Brand</p>
                    </div>
                    <div className="col-6">
                        <p>{brand}</p>
                    </div>
                    <div className="col-6 ">
                        <p>Item weight</p>
                    </div>
                    <div className="col-6">
                        <p>{weight} Kg</p>
                    </div>

                    <p></p>

                    <div className="col-6 ">
                        <p>Dimensions</p>
                    </div>
                    <div className="col-6">
                        <p>{`${height}x${width}x${length}`}</p>
                    </div>

                    <p></p>

                    <div className="col-6">
                        <p>Item model number</p>
                    </div>
                    <div className="col-6">
                        <p>{modelCode}</p>
                    </div>

                    <p></p>

                    <div className="col-6">
                        <p>Colour</p>
                    </div>
                    <div className="col-6">
                        <p>{colour}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        __typename: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        power: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        brand: PropTypes.string,
        weight: PropTypes.number,
        height: PropTypes.number,
        width: PropTypes.number,
        length: PropTypes.number,
        modelCode: PropTypes.string,
        colour: PropTypes.string,
        imgUrl: PropTypes.string
    })
}
export default ProductDetail
