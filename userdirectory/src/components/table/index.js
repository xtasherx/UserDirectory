import React from "react";
import TableBody from "../tableBody";


function Table() {
    return(
    <div className="content">
        <table className="table">
            <thead>
                <tr>
                    <th><abbr title="Title1">ID</abbr></th>
                    <th><abbr title="Title2">Name</abbr></th>
                    <th><abbr title="Title3">Email</abbr></th>
                    <th><abbr title="Title4">Phone</abbr></th>
                    <th><abbr title="Title5">Birthday</abbr></th>
                    
                    <th>Notes</th>
                </tr>
            </thead>
            <TableBody />
        </table>
    </div>
    )
}

export default Table;