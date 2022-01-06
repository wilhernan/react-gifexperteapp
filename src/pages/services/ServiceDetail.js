import React from "react"
import {useParams, useHistory} from "react-router-dom"
import servicesData from "./ServicesData"

function ServicesDetail(props) {
    const {serviceId} = useParams()
    const history = useHistory()
    const thisService = servicesData.find(service => service._id === serviceId)

    function handleClick() {
        console.log("Submitting...")
        setTimeout(() => {
            history.push("/services")
        }, 2000)
        //history.replace("")
    }

    return(
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            <button onClick={handleClick}>Go to all Services</button>
        </div>
    )
}

export default ServicesDetail