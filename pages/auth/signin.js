import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const signin = () => {
    return (
        <div>
            <Head>
                <title>Spotify - Login</title>
                <link rel='icon' href='spotify-logo.png'/>
            </Head>
            <Image
            src='https://rb.gy/y9mwtb'
            height={250}
            width={600}
            objectFit='contain'
            className='animate-pulse' />
        </div>
    )
}

export default signin
