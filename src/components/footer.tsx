const Footer = () => {
    return (
        <>
            <footer className="bg-[#3F418C] px-4 py-1 flex items-center justify-center">
                <div className="flex title-font font-medium items-center justify-center text-gray-900">
                    <img className='w-[35px]' src="./img/logo.png" alt="logo" />
                    <span className="text-3xl font-bold text-[rgba(255,255,255,0.80)]">HDR</span>
                </div>
                <p className="text-[15px] text-md text-[rgba(255,255,255,0.80)] ml-4 pl-4 border-l-2 border-gray-200">© 2024 HDR —
                    <a href="https://github.com/altaftech" className="text-[rgba(255,255,255,0.80)] ml-1" rel="noopener noreferrer" target="_blank">@altaftech</a>
                </p>
            </footer>
        </>
    )
}

export default Footer
