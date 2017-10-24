import React from 'react'
import Layout from '../components/MyLayout'
import Test from '../components/Test'

const Fetch = (props) => (
    <Layout>
        <h2>Test fetch data</h2>
        <Test shows={props.shows} />
    </Layout>
)

Fetch.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/shows')
    const data = await res.json()
    return {
        shows: data
    }
}

export default Fetch