import React from 'react'
import { Route } from 'react-router-dom'
import { SearchResults } from '../containers'

const SearchRoute = () => (
    <div>
        <div>
            <Route path='/search' component={SearchResults} /> 
        </div>
    </div>
)

export default SearchRoute
