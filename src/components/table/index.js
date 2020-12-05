
import TableBody from "../tableBody";
import users from "../../utils/users.json";
import React, {  useEffect, useState } from "react";
import Search from "../search";
const employees = users;
// console.log(employees);



function Table() {
    const [data,setData] = useState([]);
    const [sortType, setSortType] = useState('name');
    const[searchTerm,setSearchTerm] = useState("");

    const handleChange = event => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
      };

      useEffect(() => {
        const results = employees.filter(person =>
          person.name.toLowerCase().includes(searchTerm)
        );
        setData(results);
      }, [searchTerm]);


    useEffect(() => {
        const sortArray = type => {
            const types = {
            name: 'name',
            email: 'email',
            phone: 'phone',
            city: 'city',
            country: 'country'
            };
            const sortProperty = types[type];
            console.log(sortProperty);
            const sorted = [...employees].sort((a, b) => (b[sortProperty] < a[sortProperty]) ? 1 : -1);
            console.log(sorted);
            setData(sorted);
        };
        
        sortArray(sortType);
    },[sortType]);

    return(
    <div className="content">
        <div>
        <Search 
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search by Name"
        />
        </div>
        
        <table className="table bordered striped">
            <thead >
                <tr>  
                    <th></th>   
                    <th><button onClick={(e)=>setSortType(e.target.value)} className="btn-primary btn-xsmall m-0" value="name">Name <i class="fas fa-angle-down"></i></button></th>
                    <th><button onClick={(e)=>setSortType(e.target.value)} className="btn-primary btn-xsmall m-0" value="phone">Phone <i class="fas fa-angle-down"></i></button></th>
                    <th><button onClick={(e)=>setSortType(e.target.value)} className="btn-primary btn-xsmall m-0" value="email">Email <i class="fas fa-angle-down"></i></button></th>
                    <th><button onClick={(e)=>setSortType(e.target.value)} className="btn-primary btn-xsmall m-0" value="city">City <i class="fas fa-angle-down"></i></button></th>
                    <th><button onClick={(e)=>setSortType(e.target.value)} className="btn-primary btn-xsmall m-0" value="country">Country <i class="fas fa-angle-down"></i></button></th>
                </tr>
            </thead>
            <TableBody employees = {data} />
        </table>
    </div>
    )
}

export default Table;