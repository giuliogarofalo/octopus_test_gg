import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Layout, QueryResult } from '../components'
import ProductDetail from '../components/ProductDetail'
import { useParams } from '@reach/router'

export const GET_PRODUCT = gql`
    query getProductById($id: ID!) {
        product(productId: $id) {
            id
            name
            power
            description
            price
            quantity
            brand
            weight
            height
            width
            length
            modelCode
            colour
            imgUrl
        }
    }
`
const Product = (props) => {
    const { id } = useParams()

    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id }
    })

    if (loading) return 'Loading...'

    if (error) return `Error! ${error.message}`

    return (
        <Layout {...props}>
            <QueryResult error={error} loading={loading} data={[data]}>
                <ProductDetail product={data?.product} />
            </QueryResult>
        </Layout>
    )
}

export default Product
