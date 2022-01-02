import React from 'react'

import {useRecoilState} from 'recoil'
import {playState,playingTrackState} from '../../atoms/playerAtom'

const RecentlyPlayed = ({track,chooseTrack}) => {
    const [play,setPlay] = useRecoilState(playState)
    const [playingTrack,setPlayingTrack] = useRecoilState(playingTrackState)
    console.log('i am in recently played');
console.log('track',track)
    const handlePlay = () => {
        chooseTrack(track)
        // console.log("TRACK",track,"PLAYING",playingTrack);
        if(track.uri === playingTrack?.uri){
            setPlay(!play)
        }
    }

    return (
        <div className='flex items-center space-x-3' onClick={handlePlay}>
            <img src={track.albumUrl} alt='' className='rounded-full h-[52px] w-[52px]' />
            <div>
                <h4 className='text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]'>{track.title}</h4>
                <p className='text-xs text-[#686868] font-semibold cursor-pointer hover:underline'>{track.artist}</p>
            </div>
        </div>
    )
}

export default RecentlyPlayed
