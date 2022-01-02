import React, {useState,useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Body from './dashboardComponents/Body'
import Right from './dashboardComponents/Right'
import Sidebar from './dashboardComponents/Sidebar'
import {useRecoilState} from 'recoil'
import {playingTrackState} from '../atoms/playerAtom'
import Player from './dashboardComponents/Player'
import {useSession} from 'next-auth/react'

const spotifyApi = new SpotifyWebApi({
    clientId:process.env.SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {

    const [playingTrack,setPlayingTrack] = useRecoilState(playingTrackState)
    const {data:session} = useSession()
    const accessToken = session?.accessToken
    const [showPlayer,setShowPlayer] = useState(false)

    useEffect(()=>{
        setShowPlayer(true)
    },[])

    const chooseTrack = (track) => {
        setPlayingTrack(track)
    }

    return (
        <main className='flex min-h-screen min-w-max'>
            <Sidebar />
            <Body spotifyApi = {spotifyApi} chooseTrack={chooseTrack} />
            <Right spotifyApi = {spotifyApi} chooseTrack={chooseTrack} />
            {showPlayer && (
                <div className='fixed bottom-0 left-0 right-0 z-50'>
                    <Player accessToken={accessToken} trackUri = {playingTrack.uri} />
                </div>
            )}
        </main>
    )
}

export default Dashboard
