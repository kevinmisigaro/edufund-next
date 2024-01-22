import { RouteComponentProps } from "react-router-dom"

export interface routerProps extends RouteComponentProps{}

export type ServiceType = {
    serviceName: string
    serviceDescription: string
    serviceAction: string
    serviceBg: string
}