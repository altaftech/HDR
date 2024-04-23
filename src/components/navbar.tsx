import Feedback from "./feedback"

const Navbar = () => {
    return (
        <>
            <nav className="bg-[#3F418C] w-full top-0 px-[20px] flex items-center justify-between z-50">
                <div className="flex items-center justify-center">
                    <img src="./img/logo.png" alt="logo" className="logo w-9 h-9" />
                    <span className="text-[rgba(255,255,255,0.80)] text-[35px] font-bold">HDR</span>
                </div>
                <Feedback />
            </nav>
        </>
    )
}

export default Navbar
