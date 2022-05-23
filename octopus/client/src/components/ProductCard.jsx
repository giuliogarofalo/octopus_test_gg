import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
    const { id, name, description, imgUrl } = product

    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-sm-5 my-auto">
                    <img className="img-fluid img-thumbnail" src={imgUrl} alt={name} />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <a href={`/product/${id}`} className="btn btn-primary">
                            View
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        imgUrl: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string
    })
}

export default ProductCard
