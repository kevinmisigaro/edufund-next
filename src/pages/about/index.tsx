import { services } from "../../data"
import Service from "./components/Service"

const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59] pt-28">
        <section className="max-w-7xl mx-auto px-8 md:flex md:flex-row md:items-center md:justify-between gap-8 ">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-white z-10">
            <h1 className="text-3xl lg:text-4xl lg:text-5xl font-bold mb-4 font-neue">
              EduFund seeks to make quality education accessible for all Africans
            </h1>
            <p className="text-sm lg:text-base font-neue text-justify">
              EduFund is democratizing access to quality education for underserved young talents, with the aim of catalyzing Africa’s
              economy by enabling Africa’s young workforce to acquire relevant skills for future of work. Over <span className="font-bold">79%</span> of Africa’s
              population are living below $6 per day, which puts higher education as a luxury concept to these communities. Our
              goal is to bring quality education to every deserving African talent, irrespective of social status, and create a generation
              of productive youths that becomes a driving force of the continent’s economy
            </p>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 mt-4 md:mt-0">
            <img
              src="/assets/guy-exams.jpg" // Replace with your actual image path
              alt="Happy student with documents"
              className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg"
            />
          </div>
        </section>
        <div className="max-w-7xl my-20 mx-auto px-4 md:px-8">
          <h4 className="font-neue max-w-4xl text-xl md:text-3xl font-bold text-white">
            We are on a mission to creating a productive workforce for Africa, by enabling every young person access decent level of education through our community financing solutions.
          </h4>
        </div>

        <section>
          <div className="mx-auto flex flex-col md:flex-row">
            {
              services.map((service, index) => (
                <div key={index}>
                  <Service
                    serviceName={service.serviceName}
                    serviceDescription={service.serviceDescription}
                    serviceAction={service.serviceAction}
                    serviceBg={service.serviceBg}
                  />
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutUs