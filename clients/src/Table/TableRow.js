import React, { Component } from "react";

class TableRow extends Component {
    render() {
        let row = this.props.row;
        return (
            <tr>
                {row.map(value => <td>{value}</td>)}
            </tr>
        );
    }
}


// function Row( { rows } ) {
//     const keys = Object.keys(rows.length?rows[0]:{});
//     return (

//         <tbody>
//                 {
//                     rows.map((value) =>
//                     <tr>
//                         {keys.map(key => <td key={key}>{value[key]}</td>)}
//                     </tr>
//                     )
//                 }
//         </tbody>

//     )
// }

export default TableRow;