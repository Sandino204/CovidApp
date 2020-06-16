import React from 'react';
import './App.css';
import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'
import { fetchData } from './api'
import Img from './shared/image.png'

class App extends React.Component{

  state ={
    data: {}, 
    country: '',
  }

  async componentDidMount(){
    const data = await fetchData()

    this.setState({data: data})
    console.log(data)
  }

  handleCountrychange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({data: fetchedData, country: country})
  }

  render(){

    const {data} = this.state
    const {country} = this.state

    return (
      <div className="App container-fluid">
        <div className="row justify-content-center">
          <img src={Img} alt="image" className="col-4 my-5"/>
          <Cards data={data}/>
          <CountryPicker handleCountrychange={this.handleCountrychange}></CountryPicker>
          <Chart data={data} country={country}/>
        </div>
      </div>
    );
  }
}

export default App;
