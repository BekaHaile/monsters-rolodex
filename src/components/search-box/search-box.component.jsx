import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, search}) => {
   return (
   <input
          type="search"
          className="search"
          placeholder={ placeholder }
          onChange={ search } />
   );
}