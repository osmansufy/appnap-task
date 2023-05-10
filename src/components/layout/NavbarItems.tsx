import React from 'react'

const NavbarItems = ({ navbarItemsStyle }: {
    navbarItemsStyle: string
}) => {
    return (
        <ul
            className={navbarItemsStyle}
        >
            {/* profile icon */}
            <li>
                <i className="fa fa-user-circle"></i>
            </li>
            {/* Love Icon */}
            <li>
                <i className="fa fa-heart"></i>
            </li>
            {/* cart icon */}
            <li>
                <i className="fa fa-shopping-cart"></i>
            </li>
        </ul>
    )
}

export default NavbarItems