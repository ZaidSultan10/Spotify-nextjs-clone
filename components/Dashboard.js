import React from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Body from './dashboardComponents/Body'
import Right from './dashboardComponents/Right'
import Sidebar from './dashboardComponents/Sidebar'

const spotifyApi = new SpotifyWebApi({
    clientId:process.env.SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {
    return (
        <main>
            <Sidebar />
            <Body spotifyApi = {spotifyApi} />
            <Right />
        </main>
    )
}

export default Dashboard
