import React from 'react'
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import {useRecoilState} from 'recoil'
import {playState,playingTrackState} from '../../atoms/playerAtom'


const Poster = ({track,chooseTrack}) => {

    const [play,setPlay] = useRecoilState(playState)
    const [playingTrack,setPlayingTrack] = useRecoilState(playingTrackState)

    const handlePlay = () => {
        chooseTrack(track)
        console.log("TRACK",track,"PLAYING",playingTrack);
        if(track.uri === playingTrack?.uri){
            setPlay(!play)
        }
    }

    return (
        <div onClick={handlePlay} className='group mx-auto cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 '>
            <img src={track.albumUrl} alt='' className='h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100' />
            <div className='absolute bottom-10 ml-4 index-x-0 flex items-center space-x-3.5'>
                <div className='h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0'>
                    {track.uri === playingTrack?.uri && play ? (
                        <BsFillPauseFill className='text-xl' />
                    ):(
                        <BsFillPlayFill className='text-xl ml-[1px]' />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Poster
