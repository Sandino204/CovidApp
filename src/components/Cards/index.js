import React from 'react'
import './styles.css'
import {Card, CardBody} from 'reactstrap'
import CountUp from 'react-countup'

function Cards ({data}){
    
    let confirmed = data.confirmed
    let recovered = data.recovered
    let deaths = data.deaths
    let lastUpdate = data.lastUpdate


    if(!confirmed || !recovered || !deaths || !lastUpdate){
        return 'loading...'
    }

    return(
        <div className="container col-12">
            <div className="row justify-content-center">
                <Card className="col-12 col-md-3 row rounded shadow mx-2 mb-4 infected"> 
                    <CardBody className="text-center">
                        <h2 className="text-secondary col-12">Infected</h2>
                        <h2 className="count">
                            <CountUp 
                                className="text-center col-12"
                                start={0} 
                                end={confirmed.value}
                                duration={2.5}
                                separator=","></CountUp>
                        </h2>
                        <h5 className="text-secondary col-12">{new Date(lastUpdate).toDateString()}</h5>
                        <p className="text-secondary col-12">Number of active cases of COVID-19</p>
                    </CardBody>
                </Card>
                <Card className="col-12 col-md-3 row rounded shadow mx-2 mb-4 recovered"> 
                    <CardBody className="text-center">
                        <h2 className="text-secondary col-12">Recovered</h2>
                        <h2 className="count">
                            <CountUp 
                                className="text-center col-12"
                                start={0} 
                                end={recovered.value}
                                duration={2.5}
                                separator=","></CountUp>
                        </h2>
                        <h5 className="text-secondary col-12">{new Date(lastUpdate).toDateString()}</h5>
                        <p className="text-secondary col-12">Number of recoveries cases of COVID-19</p>
                    </CardBody>
                </Card>
                <Card className="col-12 col-md-3 row rounded shadow mx-2 mb-4 deaths"> 
                    <CardBody className="text-center">
                        <h2 className="text-secondary col-12">Deaths</h2>
                        <h2 className="count">
                            <CountUp 
                                className="text-center col-12"
                                start={0} 
                                end={deaths.value}
                                duration={2.5}
                                separator=","></CountUp>
                        </h2>
                        <h5 className="text-secondary col-12">{new Date(lastUpdate).toDateString()}</h5>
                        <p className="text-secondary col-12">Number of deaths cases of COVID-19</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Cards