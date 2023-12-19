import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'

import { useGetToken } from '../../../hooks'
import { SectionNewReleases, Card } from './styles'

const UserTopItems = (): ReactElement => {
  const [newReleases, setNewReleases] = useState<any>([])
  console.log(newReleases);

  const token = useGetToken()

  useEffect(() => {
    if (token) {
      axios.get("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(response => setNewReleases(response?.data?.albums?.items))
    .catch(error => console.error({error}))
    }
  }, [token])


  return (
    <>
      <h1 style={{marginTop: 0}}>User Top Items</h1>
      <SectionNewReleases>
        {newReleases?.map((release: any) => {
          return (
            <Card key={release.id}>
              <img src={`${release?.images[1].url}`} alt="Album" />
            </Card>
          )
        })}
      </SectionNewReleases>
    </>
  )
}

export default UserTopItems
