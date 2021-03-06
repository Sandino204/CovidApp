import React, {useEffect, useState} from 'react'
import './styles.css'
import {fetchDailyData} from '../../api/index'
import {Line, Bar} from 'react-chartjs-2'

function Chart ({data: {confirmed, deaths, recovered}, country}){

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData())
        }

        fetchAPI()
    }, [])

    const lineChart = (
        dailyData.length !== 0 ? 
        <Line
            data={{
                labels: dailyData.map(({date}) => date), 
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed), 
                    label: 'infected',
                    borderColor: '#3333ff', 
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths), 
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }}
        /> : null
    )

    const barChart = (
        confirmed ? (
            <>
                <Bar 
                    data = {{
                        labels: ['Infected', 'Recovered', 'Deaths'] ,
                        datasets: [{
                            label: 'People', 
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'], 
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: {display: false}, 
                        title: {display: true, text: `Current state in ${country}`}
                    }}
                    
                />
            </>
        ) : null
    )
    return(
        <div className="container">
            <div className="row line">
                {country ? barChart : lineChart}
            </div>
        </div>
    )
}


export default Chart