import Head from 'next/head'
import Dashboard from '../components/Dashboard.js'
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'
import Loader from '../components/dashboardComponents/Loader'

export default function Home() {

  const router = useRouter()
  const {status, data:session} = useSession({
    required:true,
    onUnauthenticated(){
      router.push('/auth/signin')
    },
  })

  if(status === 'loading'){
    return <Loader />
  }

  console.log("OBJECT",session);

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
