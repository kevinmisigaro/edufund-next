const Header = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59] min-h-screen">
                <br /><br /><br /><br /><br />
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-center">
                    <div className="sm:text-center lg:text-left font-garet">
                        <h2 className="text-3xl tracking-tight text-white sm:text-4xl font-bold">
                            <span className="block xl:inline">EduFund is making Quality Education</span>
                            <span className="block text-indigo-600 xl:inline"> more accessible for Africa’s most promising and underserved talents.</span>
                        </h2>
                        <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 l:text-xl lg:mx-0">
                            We are democratizing access to education for all by matching Africa’s most promising young talents to well curated education funds and top-level universities globally.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div>
                                <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-700 font-garet text-lg mx-auto uppercase font-bold border-2 border-white">
                                    Doante now
                                </button>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-700 font-garet text-lg mx-auto uppercase font-bold border-2 border-white">
                                    Raise  Funds
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/happy-students.jpg" alt="" className="w-full lg:max-w-[25rem] xl:max-w-[30rem] lg:h-[25rem] xl:h-[30rem] lg:rounded-full object-cover mt-8 lg:mt-0" />
                </div>
            </div>
        </>
    )
}

export default Header