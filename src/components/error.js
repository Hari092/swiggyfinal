/* eslint-disable no-unused-vars */
import { useRouteError } from "react-router-dom"
const Error = ()=>{

    const err= useRouteError()

    return (
        <div className="error">
            <h1>hello this is error.</h1>
        </div>
    )
}

export default Error; 