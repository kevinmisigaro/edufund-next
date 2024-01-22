const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full lg:h-[90vh] pt-8 lg:py-0 mt-8 lg:mt-0">
                {/* Text Section */}
                <div className="gap-y-4 p-4 text-center lg:text-left w-full lg:px-10 xl:p-20">
                    <h2 className="text-3xl lg:text-6xl text-[#0C3B2E] font-garet uppercase">
                        It takes a village to raise a <span className="font-bold">Child</span>
                    </h2>
                    <br />
                    <p className="text-gray-600  font-garet text-lg text-[#0C3B2E]">
                        Through our community financing model, we are creating a platform for institutions and individuals to seamlessly invest in the future of Africa’s workforce.
                    </p>
                    <br />
                    <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-700 font-garet text-lg mx-auto uppercase">
                        Partner With EduFund
                    </button>
                </div>
                <br />
                {/* Image Section */}
                <img
                    className="w-full h-[20rem] lg:w-[44%] lg:h-full object-cover"
                    src="/assets/serious-girl.jpg"
                    alt="A person holding a laptop"
                />
            </div>
        </>
    )
}

export default AboutUs