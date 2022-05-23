import React from 'react'
import PropTypes from 'prop-types'

const QueryResult = ({ loading, error, data, children }) => {
    if (error) {
        return <p>ERROR: {error.message}</p>
    }
    if (loading) {
        return <>{'spinner'}</>
    }
    if (!data) {
        return <p>Nothing to show...</p>
    }
    if (data) {
        return children
    }
}

QueryResult.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.any,
    data: PropTypes.array,
    children: PropTypes.any
}

export default QueryResult
