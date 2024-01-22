const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between border items-center font-garet px-8 mx-auto fixed w-full z-10 py-2 left-1/2 -translate-x-1/2">
                <img src="/logo.png" alt="" className="w-28 md:w-36" />
                <ul className="md:flex gap-x-4 hidden">
                    <a href="#" className="text-xl text-white font-bold hover:text-gray-100">
                        About
                    </a>
                    <a href="#" className="text-xl text-white font-bold hover:text-gray-100">
                        Products
                    </a>
                    <a href="#" className="text-xl text-white font-bold hover:text-gray-100">
                        Donate
                    </a>
                    <a href="#" className="text-xl text-white font-bold hover:text-gray-100">
                        Reports
                    </a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar