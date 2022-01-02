import React, {useState, useEffect} from 'react'
import Search from './Search'
import {useSession} from 'next-auth/react'
import Poster from './Poster'


const Body = ({spotifyApi,chooseTrack}) => {
    const {data:session} = useSession()
    const accessToken = session?.accessToken
    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const [newReleases,setNewReleases] = useState([])
    console.log('session >>',session)
    useEffect(() => {
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
    },[accessToken])

    //search

    useEffect(() => {
        if(!search) return setSearchResults([]);
        if(!accessToken) return;
        // setSearchResults()
        spotifyApi.searchTracks(search).then((res) => {
            setSearchResults(res.body.tracks.items.map((track) => {
                return{
                    id: track.id,
                    artist:track.artists[0].name,
                    title:track.name,
                    uri: track.uri,
                    albumUrl: track.album.images[0].url,
                    popularity:track.popularity,
                }
            }))
        })
    },[search,accessToken])

    useEffect(() => {
        // if(!search) return setSearchResults([]);
        if(!accessToken) return;
        // setSearchResults()
        spotifyApi.getNewReleases().then((res) => {
            setNewReleases(res.body.albums.items.map((track) => {
                return{
                    id: track.id,
                    artist:track.artists[0].name,
                    title:track.name,
                    uri: track.uri,
                    albumUrl: track.images[0].url,
                    // popularity:track.popularity,
                }
            }))
        })
    },[accessToken])

    console.log(newReleases)

    return (
        <section className='ml-24 bg-black py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5'>
            <Search search={search} setSearch={setSearch} />
            <div className='grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4'>
                {searchResults.length === 0 ? newReleases.slice(0,4).map((track) => (
                    <Poster key = {track.id} track = {track} 
                    chooseTrack={chooseTrack}
                     />
                )) : searchResults.slice(0,4).map((track) => (
                    <Poster key = {track.id} 
                    track = {track} 
                    chooseTrack={chooseTrack}
                     />
                )) }
            </div>
        </section>
    )
}

export default Body
