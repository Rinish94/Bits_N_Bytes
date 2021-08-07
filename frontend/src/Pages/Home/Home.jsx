import React from 'react'
import DUK from '../../Components/Home/DUK'
import Home_compo from '../../Components/Home/Home'
import Navbar from '../../Components/Navbar/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Home_compo/>
            <DUK/>
        </div>
    )
}
