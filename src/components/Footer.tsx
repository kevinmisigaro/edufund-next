const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid md:grid-cols-2">
                    <div className="relative">
                        <img src="/assets/girl-smiling.jpg" alt="" className="w-full h-[12.75rem] sm:h-full object-cover brightness-50" />
                        <p className="absolute font-twister top-1/2 left-1/2 -translate-x-1/2 text-3xl md:5xl xl:text-6xl text-white text-center w-full">Connect With EduFund</p>
                    </div>
                    <div className="grid grid-cols sm:grid-cols-2 font-garet text-center text-xs lg:text-sm xl:text-base">
                        <div className="relative py-16 px-4 sm:p-0 w-full h-auto min-h-[5rem] bg-[#00C4CC]">
                            <p className="text-white font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">Request Demo</p>
                        </div>
                        <div className="relative py-16 px-4 sm:p-0 w-full h-auto min-h-[5rem] bg-[#018FA6]">
                            <p className="text-white font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">EduFund Privacy Policy</p>
                        </div>
                        <div className="relative py-16 px-4 sm:p-0 w-full h-auto min-h-[5rem] bg-[#1DCD8D]">
                            <p className="text-white font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">Check Out Scholarship Reports</p>
                        </div>
                        <div className="relative py-16 px-4 sm:p-0 w-full h-auto min-h-[5rem] bg-[#5CE1E6]">
                            <p className="text-white font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">Partner with EduFund</p>
                        </div>
                        <div className="relative py-16 px-4 sm:p-0 w-full h-auto min-h-[5rem] bg-[#018FA6]">
                            <p className="text-white font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                Donate Now
                            </p>
                        </div>
                        <div className="relative py-16 px-4 sm:p-0 w-full h-auto min-h-[5rem] bg-[#1DCD8D]">
                            <p className="text-white font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                74 Ally Sykes Road
                                Mbezi Beach, Tanzania
                                partnerships@edufunds.co
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full py-3 bg-[#004956]">
                    <p className="text-center font-garet text-white text-[#0097B3]">
                        All rights reserved&nbsp;&copy;&nbsp;{new Date().getFullYear()} EduFUND
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer