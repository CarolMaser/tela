import React, { useEffect, useState, Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

// import "./table.css"

// function Header( { rows } ) {
//     const keys = Object.keys(rows.length?rows[0]:{});
//     return (

//         <thead>
//             <tr>
//                 {
//                     keys.map(key => <th key={key}>{key}</th>)
//                 }
//             </tr>
//         </thead>

//     )

// }

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

// function Table() {
    
//     const [table, setTable] = useState([])

//     const fetchData = async () => {        
//         const url = 'http://localhost:3003/data'
//         const res = await fetch(url)
//         const data = await res.json()
//         setTable(data.wordList);
//     }  


//     useEffect(() => {
//         // fetchData()
//     }, [])  
       

//         return (

//             <div>
//                 <table class="table table-bordered" id="contacts_table">
//                     <TableHeader rows={table} />
//                     <TableRow rows={table} />
//                 </table>
//                 <br />
//                 <button className='button' onClick={fetchData}>Atualizar</button>
                
//             </div>
//         )

    
   
    
// }

class Table extends Component {
    render() {
        let columns = this.props.columns;
        let data = this.props.data;
        return (
            <table style={{widht: 900}}>
                <thead>
                    <tr>
                        {columns.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(rows => <TableRow rows={rows} />)}
                </tbody>
            </table>
        );
    }
}

export default Table