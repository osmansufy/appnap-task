import React from 'react'

const HeartSvgIcon = ({
    width = 24,
    height = 24,
    fill = "#2D264B"
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.8468 3.93557C19.5193 2.58173 18.0414 2.16291 16.6535 2.26451C15.3031 2.36337 14.087 2.94914 13.1988 3.51257C12.4984 3.95689 11.5014 3.95689 10.8009 3.51257C9.9127 2.94915 8.6966 2.36338 7.34624 2.26453C5.95834 2.16293 4.48046 2.58175 3.1529 3.93557C1.58562 5.53386 1.0939 7.50689 1.29136 9.50265C1.48653 11.4754 2.35186 13.4808 3.50598 15.2578C4.66317 17.0396 6.14136 18.6392 7.62433 19.8008C9.07467 20.9368 10.6527 21.75 11.9999 21.75C13.3471 21.75 14.9251 20.9368 16.3754 19.8008C17.8584 18.6392 19.3366 17.0396 20.4938 15.2578C21.6479 13.4808 22.5132 11.4754 22.7084 9.50265C22.9058 7.50688 22.4141 5.53386 20.8468 3.93557ZM14.0023 4.77922C14.7877 4.28097 15.7599 3.83394 16.763 3.76051C17.7285 3.68983 18.7692 3.95923 19.7758 4.98579C20.9791 6.21282 21.3774 7.71987 21.2157 9.35497C21.0516 11.0131 20.3084 12.7893 19.2358 14.4408C18.1663 16.0876 16.7996 17.5632 15.4505 18.6199C14.0688 19.7021 12.8278 20.25 11.9999 20.25C11.172 20.25 9.93093 19.7021 8.54926 18.6199C7.20021 17.5632 5.83348 16.0876 4.76394 14.4408C3.69132 12.7893 2.94812 11.0131 2.78407 9.35497C2.6223 7.71987 3.02067 6.21283 4.2239 4.98579C5.23053 3.95925 6.27119 3.68984 7.23672 3.76052C8.23978 3.83395 9.21197 4.28098 9.99742 4.77922C11.1883 5.53467 12.8114 5.53467 14.0023 4.77922Z" fill={fill} />
        </svg>

    )
}

export default HeartSvgIcon