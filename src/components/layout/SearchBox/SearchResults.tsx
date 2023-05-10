import Spinner from '@/components/Spinner/Spinner'
import { IProduct } from '@/types/productTypes'
import Image from 'next/image'
import React from 'react'
const SearchResults = ({ searchResults, loading }: {
    searchResults: IProduct[]
    loading: boolean
}) => {
    console.log({})
    if (loading) {
        return (
            <div
                className='search-results'
            >
                <Spinner />
            </div>
        )
    } else if (searchResults.length === 0) {
        return (
            <div className='search-results'>
                <h3
                    style={{
                        textAlign: 'center',
                        fontSize: '0.8rem'
                    }}
                >
                    No Results Found
                </h3>
            </div>
        )
    }

    return (
        <div
            className='search-results'
        >
            {
                searchResults.map((product) => (
                    <div
                        key={product.id}
                        className='search-result-item'
                    >
                        <Image
                            height={50}
                            width={60}
                            src={product.image}
                            alt={product.name}
                            style={{
                                objectFit: 'cover',
                                backgroundColor: 'red'
                            }}
                        />
                        <div
                            className='search-result-info'
                        >
                            <h3>
                                {product.name}
                            </h3>
                            <p>
                                ৳{product.price}
                            </p>
                        </div>

                    </div>
                )
                )
            }
            <a className='search-result-btn'>
                See All Results
            </a>
        </div>

    )
}

export default React.memo(SearchResults)