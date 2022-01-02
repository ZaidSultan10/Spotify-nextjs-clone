import React from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Body from './dashboardComponents/Body'
import Right from './dashboardComponents/Right'
import Sidebar from './dashboardComponents/Sidebar'
import {useRecoilState} from 'recoil'
import {playingTrackState} from '../atoms/playerAtom'


const spotifyApi = new SpotifyWebApi({
    clientId:process.env.SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {

    const [playingTrack,setPlayingTrack] = useRecoilState(playingTrackState)

    const chooseTrack = (track) => {
        setPlayingTrack(track)
    }

    return (
        <main className='flex min-h-screen min-w-max'>
            <Sidebar />
            <Body spotifyApi = {spotifyApi} chooseTrack={chooseTrack} />
            <Right />
        </main>
    )
}

export default Dashboard
