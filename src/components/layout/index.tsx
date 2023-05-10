import React from 'react'
import Logo from './Logo'
import NavbarItems from './NavbarItems'
import SearchBox from './SearchBox'
const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div
            className='container'
        >
            {/* navbar */}
            <div
                className='navbar'
            >
                <Logo />
                <SearchBox

                />
                <NavbarItems
                />
            </div>

            {children}</div>
    )
}

export default Layout