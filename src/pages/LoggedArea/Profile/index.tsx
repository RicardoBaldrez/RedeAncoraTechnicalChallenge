import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { useToken } from "../../../hooks";
import { Wrapper, SectionFollowingBands } from './styles';

// import { useGetToken } from '../../../hooks'
// import { SectionNewReleases, Card } from './styles'

const Artists = (): ReactElement => {
  const [profile, setProfile] = useState<any>(null)
  const [followingArtists, setFollowingArtists] = useState<any>(null)
  console.log(profile);
  console.log(followingArtists);

  const { getToken } = useToken();
  const token = getToken();

  useEffect(() => {
    if (token) {
      axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => setProfile(response))
      .catch(error => console.error({error}))

      axios.get(`https://api.spotify.com/v1/me/following?type=artist`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => setFollowingArtists(response))
      .catch(error => console.error({error}))
    }
  }, [token])


  return (
    <Wrapper>
      <img src={profile?.data?.images[1]?.url} alt="Profile" />
      <h1>{profile?.data?.display_name}</h1>
      <SectionFollowingBands>
        <h2>Algumas bandas que sigo:</h2>
        <ul>
          {followingArtists?.data?.artists?.items?.map((artist: any) => {
            return <li key={artist?.id}>{artist?.name}</li>
          })}
        </ul>
      </SectionFollowingBands>
    </Wrapper>
  )
}

export default Artists
