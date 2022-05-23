import React from 'react'
import { render, cleanup } from '../../utils/test-utils'
import QueryResult from '../QueryResult'

describe('Query Result', () => {
    afterEach(cleanup)

    it('renders loading state', async () => {
        const { getByText } = render(<QueryResult loading={true} />)
        getByText(/spinner/i)
    })

    it('renders No Data message', async () => {
        const { getByText } = render(<QueryResult loading={false} />)
        getByText(/nothing to show/i)
    })

    it('renders error message', async () => {
        getByText(/error/i)
    })
})
