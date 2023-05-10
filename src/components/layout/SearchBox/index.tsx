import SearchIcon from '@/components/icons/SearchIcon'
import useDebounce from '@/hooks/useDebounce'
import useOutsideClick from '@/hooks/useOutsideClick'
import axios from 'axios'
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import SearchResults from './SearchResults'
import { ISearchState, SearchAction, SearchActionTypes, initialState, searchReducer } from './helper'

const SearchBox = () => {
    const [searchText, setSearchText] = useState<string>("")
    const debounceValue = useDebounce(searchText, 400)
    const [searchState, searchDispatch] = useReducer<React.Reducer<ISearchState, SearchAction>>(searchReducer, initialState)
    useEffect(() => {
        if (debounceValue) {
            console.log(debounceValue)
            fetchProducts()
        } else {
            searchDispatch({
                type: SearchActionTypes.SEARCH_RESET
            })
        }
    }, [debounceValue])
    console.log(
        searchState
    )
    const fetchProducts = async () => {
        searchDispatch({
            type: SearchActionTypes.SEARCH_REQUEST
        })
        try {
            const res = await axios.get(`/api/getSearchProducts?search=${searchText}`)
            console.log(res.data)
            searchDispatch({
                type: SearchActionTypes.SEARCH_SUCCESS,
                payload: res.data.products
            })
        } catch (error: any) {
            searchDispatch({
                type: SearchActionTypes.SEARCH_FAIL,
                payload: error.message
            })
            console.log(error)
        }
    }

    const ref = useOutsideClick(() => {
        searchDispatch({
            type: SearchActionTypes.SEARCH_SHOW_RESULTS,
            payload: false
        })
    })

    const isShowResults = useMemo(() => {
        return searchState.showResults && debounceValue.length > 0
    }, [searchState])
    console.log({
        isShowResults
    })
    return (
        <>
            <div
                className='search-box'
                ref={ref}
            >
                <form>
                    <input
                        onFocus={() => searchDispatch({
                            type: SearchActionTypes.SEARCH_SHOW_RESULTS,
                            payload: true
                        })}

                        type='text'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <SearchIcon
                        className='search-icon'
                        width={20}
                        height={20}
                    />
                    {
                        isShowResults && <SearchResults
                            loading={searchState.loading}

                            searchResults={searchState.searchProducts} />
                    }
                </form>
            </div>

        </>
    )
}

export default SearchBox