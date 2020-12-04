import React from "react";


function TableBody () {
    return (
        <tbody>
        <tr>
            <th>1</th>
            <td>Row:1 Cell:1</td>
            <td>Row:1 Cell:2</td>
            <td>Row:1 Cell:3</td>
            <td>Row:1 Cell:4</td>

            <td>Row:1 Cell:5</td>
        </tr>
        <tr>
            <th>2</th>
            <td>Row:2 Cell:1</td>
            <td>Row:2 Cell:2</td>
            <td>Row:2 Cell:3</td>
            <td>Row:2 Cell:4</td>
            <td>Row:2 Cell:5</td>
        </tr>
        <tr className="selected">
            <th>3</th>
            <td>Row:3 Cell:1</td>
            <td>Row:3 Cell:2</td>
            <td>Row:3 Cell:3</td>
            <td>Row:3 Cell:4</td>
            <td>Row:3 Cell:5</td>
        </tr>
        <tr>
            <th>4</th>
            <td>Row:4 Cell:1</td>
            <td>Row:4 Cell:2</td>
            <td>Row:4 Cell:3</td>
            <td>Row:4 Cell:4</td>
            <td>Row:4 Cell:5</td>
        </tr>
        <tr>
            <th>5</th>
            <td>Row:5 Cell:1</td>
            <td>Row:5 Cell:2</td>
            <td>Row:5 Cell:3</td>
            <td>Row:5 Cell:4</td>
            <td>Row:5 Cell:5</td>
        </tr>
        <tr>
            <th>6</th>
            <td>Row:6 Cell:1</td>
            <td>Row:6 Cell:2</td>
            <td>Row:6 Cell:3</td>
            <td>Row:6 Cell:4</td>
            <td>Row:6 Cell:5</td>
        </tr>
    </tbody>

    )
}

export default TableBody;