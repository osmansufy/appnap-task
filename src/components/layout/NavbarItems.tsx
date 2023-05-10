import CartSvgIcon from '../icons/CartSvgIcon'
import HeartSvgIcon from '../icons/HeartSvgIcon'
import ProfileSvgIcon from '../icons/ProfileSvgIcon'

const NavbarItems = () => {
    return (
        <ul
            className='navbar-items'
        >
            {/* profile icon */}
            <li>
                <ProfileSvgIcon
                    width={20}
                    height={20}
                />
            </li>
            {/* Love Icon */}
            <li>
                <HeartSvgIcon
                    width={20}
                    height={20}
                />
                {/* notification badge */}
                <span className='badge'>
                    98+
                </span>
            </li>
            {/* cart icon */}
            <li>
                <CartSvgIcon
                    width={20}
                    height={20}
                />
                {/* notification badge */}
                <span className='badge'>
                    99+
                </span>
            </li>
        </ul>
    )
}

export default NavbarItems