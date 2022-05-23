import React
// , { useContext }
 from 'react'
import ProductCard from '../components/ProductCard'
import { Layout, QueryResult } from '../components'
// import { ProductsContext } from '../productsContext'
import { useQuery, gql } from '@apollo/client'

const GET_PRODUCTS = gql`
    query getProducts {
        products {
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

const Products = () => {
    // const { setProducts } = useContext(ProductsContext)

    const { loading, error, data } = useQuery(GET_PRODUCTS)

    console.log(loading, error)
    console.log(data?.products)
    // setProducts([data?.products])

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data?.products}>
                {data?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </QueryResult>
        </Layout>
    )
}

export default Products
