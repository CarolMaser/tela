import React, { Component } from 'react';
import './App.css';
import './Table/Table';
import Table from './Table/Table';

function App() {
  async function fetchData(){
    const url = 'http://localhost:3003/data'
    const res = await fetch(url)
    const data = await res.json()
    // setKeys(Object.keys(data.wordList[0]))
    console.log(data.wordList)  
      

}

// fetchData()

// useEffect(() => {

// }, [])

class App extends Component {
  render() {
    // let columns = ['Munícipio - Ano - Tipo', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    // let data = 
    // [
    //   ['2019 - Balancete - Conta-Contábil', 'X', 'ok', '', '', '', '', '', '', '', '', '', ''],
    //   ['2019 - Balancete - Conta-Corrente', 'X', 'ok', '', '', '', '', '', '', '', '', '', ''],
    //   ['2020 - Balancete - Conta-Contábil', 'X', 'ok', '', '', '', '', '', '', '', '', '', ''],
    //   ['2020 - Balancete - Conta-Corrente', 'X', 'ok', '', '', '', '', '', '', '', '', '', ''],
    //   ['2021 - Balancete - Conta-Contábil', 'X', 'ok', '', '', '', '', '', '', '', '', '', ''],
    //   ['2021 - Balancete - Conta-Corrente', 'X', 'ok', '', '', '', '', '', '', '', '', '', ''],      
    // ];
    return (
      <div className='App'>
        <Table columns={columns} data={data} />
        {/* <Button /> */}
      </div>
    );
  }
}


  // return (
  //   <div className="App">
  //     <Table columns={columns} data={data}/>      
  //   </div>
  // )
}

export default App;