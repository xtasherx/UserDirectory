import React from "react";

function TableBody(props) {

        return (
            <tbody>
                {props.employees.map((emp,i) => (
                <tr key={i}>
                    <td><img className="avatar avatar--small" src={emp.picture} alt="employeePhoto"></img></td>
                    <td >{emp.name}</td>
                    <td >{emp.phone}</td>
                    <td >{emp.email}</td>
                    <td >{emp.city}</td>
                    <td>{emp.country}</td>
                </tr>
                ))}
            </tbody>
    
        )

}



export default TableBody;