import Head from 'next/head'
import Dashboard from '../components/Dashboard.js'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/spotify-logo.png" />
      </Head>
      <Dashboard />
    </div>
  )
}
