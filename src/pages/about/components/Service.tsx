import { ServiceType } from "../../../types"

const Service = (props: ServiceType) => {
    return (
        <>
            <div className={`text-white px-6 py-20 h-full relative`} style={{background: `${props.serviceBg}`}}>
                <h3 className="text-lg font-semibold mb-4">{props.serviceName}</h3>
                <p>
                    {props.serviceDescription}
                </p>
                <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 mt-4">{props.serviceAction}</button>
            </div>
        </>
    )
}

export default Service