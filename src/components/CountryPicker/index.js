import React, {useState, useEffect} from 'react'
import {Form, FormGroup, Input, Label} from 'reactstrap'
import {fetchCountries} from '../../api/index'

import './styles.module.css'

function CountryPicker ({handleCountrychange}){

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchApi()
    }, [setFetchedCountries])

    return(
        <Form className="container">
            <FormGroup className="row">
                <Input type="select" name="selectC" id="selectC" className="col-4 offset-4" defaultValue="" onChange={(e) => handleCountrychange(e.target.value)}>
                    <option value="global" selected>Global</option>
                    {fetchedCountries.map((country, i) => (<option key={i} value={country}>{country}</option>))}
                </Input>
            </FormGroup>
        </Form>
    )
}


export default CountryPicker