import React from 'react'
import PropTypes from 'prop-types'
import { NavList, NavItem, NavLinkItem } from '../theme/NavWrapper'
const SearchResultsForm = ({ jokes, formType }) => (
    <div>
        {
            formType === 'SearchResults' ?
                <NavList>
                    {
                        jokes.map(({ id, joke }) => (
                                <NavItem key={id} >
                                    {joke}
                                </NavItem>
                            )
                        )
                    }
                </NavList>
            :
            <NavList>
                {
                    jokes.map(({ id, joke }) => (
                        <NavLinkItem key={id}
                            to={`/jokes/${id}`} >
                            {joke}
                        </NavLinkItem>
                        )
                    )
                }
            </NavList>

        }
    </div>
    

  
)

//Default value 
SearchResultsForm.defaultProps = {
    jokes: [],
    formType: 'SearchResults'

}
// Validate value 
SearchResultsForm.propTypes = {
    jokes: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            joke: PropTypes.string.isRequired
        })
    ),
    formType: PropTypes.string
    
}
export default SearchResultsForm;