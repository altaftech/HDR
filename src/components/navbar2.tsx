import Link from "next/link"

const Navbar2 = () => {
    return (
        <>
            <nav className="bg-[#3F418C] w-full top-0 px-[20px] flex items-center justify-between z-50">
                <Link href="./" className="flex items-center justify-center">
                    <img src="./img/logo.png" alt="logo" className="logo w-9 h-9 cursor-pointer" />
                    <span className="text-[rgba(255,255,255,0.80)] text-[35px] font-bold cursor-pointer">HDR</span>
                </Link>
                <span className="font-bold"><a href="https://github.com/altaftech" rel="noopener noreferrer" target="_blank"><img className="py-2 w-10" src="./img/github.svg"
                    alt="github logo" /></a></span>
            </nav>
        </>
    )
}

export default Navbar2
