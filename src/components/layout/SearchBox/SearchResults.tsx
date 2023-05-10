import { IProduct } from '@/types/productTypes'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const SearchResults = ({ searchResults }: {
    searchResults: IProduct[]
}) => {

    console.log(searchResults)
    return (
        <div></div>
    )
}

export default React.memo(SearchResults)