import Image from 'next/image'

const Logo = () => {
    return (
        <div >
            <Image src="https://appnap.io/assets/images/common/logo-w.svg"
                height={120}
                width={170}
                alt="logo" />
        </div>
    )
}

export default Logo