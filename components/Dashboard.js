import React from 'react'
import Body from './dashboardComponents/Body'
import Right from './dashboardComponents/Right'
import Sidebar from './dashboardComponents/Sidebar'

const Dashboard = () => {
    return (
        <main>
            <Sidebar />
            <Body />
            <Right />
        </main>
    )
}

export default Dashboard
