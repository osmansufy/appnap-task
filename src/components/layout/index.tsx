import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import styles from '@/styles/layout.module.scss'
import NavbarItems from './NavbarItems'
import SearchBox from './SearchBox'
const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            {/* navbar */}
            <div
                className={styles['navbar']}
            >
                <Logo />
                <SearchBox
                    searchStyle={styles['search-box']}
                />
                <NavbarItems
                    navbarItemsStyle={styles['navbar-items']}
                />
            </div>

            {children}</>
    )
}

export default Layout