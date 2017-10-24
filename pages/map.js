import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'

class Maps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: undefined,
            city: undefined
        }

        this.getText = this.getText.bind(this)
        this.getResult = this.getResult.bind(this)
    }
    static getInitialProps() {
        return getCityName(`13.7630319,100.5352369`)
    }

    getText(e) {
        this.setState({ text: e.target.value })
    }

    async getResult(e) {
        const ref = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");
        if(e.keyCode === 13) {
            let city = await getCityName(this.state.text)
            this.setState(city)
        }
    }
    
    render() {
        return (
            <Layout>
                <div>
                    <p>Please insert latitude and longtitude ex. '13.7630319,100.5352369'</p>
                    <input type="text" onChange={this.getText} value={this.state.text} onKeyDown={this.getResult} />
                </div>
                <h2>{this.state.city}</h2>
            </Layout>
        )
    }
}

async function getCityName(latlng) {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}`)
    const getAddress = await res.json()
    return {
        city: getCity(getAddress.results[0])
    }
}

const getCity = address => {
    let cityName;
    for(let item of address.address_components) {
        for(let type of item.types) {
            if(type === 'locality') {
                cityName = item.long_name
            }
        }
    }

    return cityName
}

// Maps.getInitialProps = async function() {
//     const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=13.7630319,100.5352369`)
//     const getAddress = await res.json()
//     return {
//         address: getAddress.results[0]
//     }
// }

export default Maps