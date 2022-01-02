import React, { useState,useEffect } from 'react'
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ViewGridIcon } from "@heroicons/react/solid";
import DropDown from './DropDown'
import {useSession} from 'next-auth/react'
import RecentlyPlayed from './RecentlyPlayed'


const Right = ({spotifyApi,chooseTrack}) => {

    const {data:session} = useSession()
    const accessToken = session?.accessToken
    const [recentlyPlayed,setRecentlyPlayed] = useState([])

    useEffect(() => {
        // if(!search) return setSearchResults([]);
        if(!accessToken) return;
        // setSearchResults()
        spotifyApi.getMyRecentlyPlayedTracks({limit:20}).then((res) => {
            // console.log('res',res)
            setRecentlyPlayed(res.body.items.map((track) => {
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
    // console.log('hello from right',recentlyPlayed)
    return (
        <section className='p-4 space-y-8 pr-8'>
            <div className='flex space-x-2 items-center justify-between'>
                <div className='flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4'>
                    <HiOutlineShieldCheck className='text-[#ccc] text-xl' />
                    <MdOutlineSettings className='text-[#ccc] text-xl' />
                    <BiBell className='text-[#ccc] text-xl' />
                </div>
                <DropDown/>
            </div>
            <div className='bg-[#0d0d0d] border-2 border-[#262626] rounded-xl p-4 space-y-4'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-white text-sm font-semibold'>Recently Played</h4>
                    <ViewGridIcon className='text-[#686868] h-6' />
                </div>
                <div className='space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide'>
                    {recentlyPlayed && recentlyPlayed.map((track,index) => (
                        <RecentlyPlayed key={index} track={track} chooseTrack={chooseTrack} />
                    ))}
                </div>
                <button className="text-[#CECECE] bg-[#1A1A1A] text-[13px] py-3.5 px-4 rounded-2xl w-full font-bold bg-opacity-80 hover:bg-opacity-100 transition ease-out">
                    View All
                </button>
            </div>
        </section>
    )
}

export default Right
