import CallToAction from "./CallToAction"

const HowWeWork = () => {
    const data = [
        {
            heading: "EDUFUND FOR AFRICA",
            description: "Through EduFund for Africa, we are investing in Africa’s most promising and underserved students by providing full scholarship to vetted students. Join us to bring quality education to the neediest by donating to EduFund for Africa.",
            action: "DONATE NOW",
        },
        {
            heading: "CORPORATE SCHOLARSHIP MANAGEMENT",
            description: "Our scholarship management solution streamlines scholarship implementation value chain and delivers end-to-end admission management process for institutions and corporates. Experience a new way to  manage your scholarship programme",
            action: "Start Now",
        },
        {
            heading: "MATCHING GRANT",
            description: "Our Education Marketplace is a platform for universities and donor institutions offering grants and scholarships to connect with Africa’s most deserving and bright students. Start connecting with best-fit students for your scholarships and grants.",
            action: "Join Marketplace",
        },
    ]

    return (
        <>
            <div className="bg-[#018FA6] text-white p-4 sm:px-6 sm:py-8 lg:px-8 lg:py-20">
                <div className="max-w-7xl mx-auto flex flex-col items-start mt-8">
                    <h1 className="text-4xl font-bold sm:text-5xl font-garet">
                        How we are Shaping Education for All
                    </h1>
                    <p className="mt-2 text-sm sm:mt-4 sm:text-base md:mt-5 md:text-lg font-garet">
                        EduFund is on mission to creating a productive workforce for Africa, by enabling every young person access decent level of education through our community financing solutions.
                    </p>
                </div>
                <br /><br />
                <div className="flex flex-col gap-y-20">
                    {
                        data.map((cta, index) => (
                            <div key={index}>
                                <CallToAction
                                    heading={cta.heading}
                                    description={cta.description}
                                    action={cta.action}
                                />
                            </div>
                        ))
                    }
                </div>
                <br />
                <br />
            </div>
        </>
    )
}

export default HowWeWork