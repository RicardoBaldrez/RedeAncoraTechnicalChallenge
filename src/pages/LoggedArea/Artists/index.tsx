import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { useToken } from "../../../hooks";

// import { useGetToken } from '../../../hooks'
import { SectionNewReleases, Card } from './styles'

const Artists = (): ReactElement => {
  const [artists, setArtists] = useState<any>([])

  const { getToken } = useToken();
  const token = getToken();

  // const token = useGetToken()

  const idsArtists = '6gFqoCdl6dVKrJ65nmvcXM,6Wr3hh341P84m3EI8qdn9O,7Lvg39k5XgXevGR767ikYI,5L59UhTBOeIRPxF5umwC9p,2Jw4Lrfjnyv2QsDoBgnrAP,0nmQIMXWTXfhgOBdNzhGOs'

  useEffect(() => {
    if (token) {
      axios.get(`https://api.spotify.com/v1/users/xskrmjony6xtyzlaalq3b7c2q`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error({error}))
    }
  }, [token])


  return (
    <>
      <h1 style={{marginTop: 0}}>User Top Items</h1>
      <SectionNewReleases>
        {artists?.map((release: any) => {
          return (
            <Card key={release.id}>
              {/* <img src={`${release?.images[1].url}`} alt="Album" /> */}
            </Card>
          )
        })}
      </SectionNewReleases>
    </>
  )
}

export default Artists
