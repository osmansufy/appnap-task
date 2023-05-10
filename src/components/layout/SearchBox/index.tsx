import useDebounce from '@/hooks/useDebounce'
import React, { useEffect, useReducer, useState } from 'react'
import SearchResults from './SearchResults'
import axios from 'axios'
import { IProduct } from '@/types/productTypes'

interface ISearchState {
    loading: boolean,
    error: null | string,
    searchProducts: IProduct[]
}

enum SearchActionTypes {
    SEARCH_RESET = 'SEARCH_RESET',
    SEARCH_REQUEST = 'SEARCH_REQUEST',
    SEARCH_SUCCESS = 'SEARCH_SUCCESS',
    SEARCH_FAIL = 'SEARCH_FAIL'
}

interface SearchRequestAction {
    type: SearchActionTypes.SEARCH_REQUEST
}

interface SearchSuccessAction {
    type: SearchActionTypes.SEARCH_SUCCESS,
    payload: IProduct[]
}

interface SearchFailAction {
    type: SearchActionTypes.SEARCH_FAIL,
    payload: string

}

interface SearchResetAction {
    type: SearchActionTypes.SEARCH_RESET
}

type SearchAction = SearchRequestAction | SearchSuccessAction | SearchFailAction | SearchResetAction

const SearchBox = ({ searchStyle }: {
    searchStyle: string
}) => {
    const [searchText, setSearchText] = useState<string>("")
    const debounceValue = useDebounce(searchText, 400)

    const initialState: ISearchState = {
        loading: false,
        error: null,
        searchProducts: []
    }
    const searchReducer: React.Reducer<ISearchState, SearchAction> = (state, action) => {
        switch (action.type) {
            case SearchActionTypes.SEARCH_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case SearchActionTypes.SEARCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    searchProducts: action.payload
                }
            case SearchActionTypes.SEARCH_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case SearchActionTypes.SEARCH_RESET:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    searchProducts: []
                }
            default:
                return state
        }
    }

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
    return (
        <>
            <div
                className={searchStyle}
            >
                <form>
                    <input
                        type='text'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <i className="fa fa-search"></i>
                </form>
            </div>
            {
                searchState.searchProducts.length > 0 && <SearchResults searchResults={searchState.searchProducts} />
            }
        </>
    )
}

export default SearchBox