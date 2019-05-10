import React, { Component } from 'react';
import './App.css';
import Table from './components/Table.js';

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     exchanges: []
   }
 }

  componentDidMount() {
    // fetch('https://api.exchangeratesapi.io/latest')
    // .then(res => res.json())
    // .then(json => console.log(json.droplets))
    // .then(droplets => this.setState({ 'droplets': droplets }))

    fetch('https://api.exchangeratesapi.io/latest')
   .then(res => res.json())
   .then((data) => {
       this.setState({ exchanges: [data] })
     console.log(this.state.exchanges)
     //console.log(this.state.exchanges.date)
   })

  }

  render() {

let ab = this.state.exchanges.rates ? Object.keys(this.state.exchanges.rates) : [];

    return (
      <div className="container">
        <div className="col-xs-12">
        <h2>Exchange Rates API</h2>
          {this.state.exchanges.map((exchange) => (
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Date: {exchange.date}</h5>


                {ab.map((rate) => (
                <h5 className="card-title">{ab[rate]}</h5>
              ) )}


<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">{exchange.base}</th>
      <th scope="col">BGN</th>
      <th scope="col">{exchange.rates.BGN}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>BGN</td>
      <td>{exchange.rates.BGN}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>NZD</td>
      <td>{exchange.rates.NZD}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ILS</td>
      <td>{exchange.rates.ILS}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>RUB</td>
      <td>{exchange.rates.RUB}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>CAD</td>
      <td>{exchange.rates.CAD}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>USD</td>
      <td>{exchange.rates.USD}</td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
          ))}
        </div>
       </div>
    );
  }
}

export default App;
