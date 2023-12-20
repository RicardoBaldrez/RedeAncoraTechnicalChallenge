import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'

import { useToken } from '../../../hooks'
import Modal from '../../../components/LoggedArea/Modal'
import { Card } from './styles'

const NewReleases = (): ReactElement => {
  const [newReleases, setNewReleases] = useState<any>([])
  const [chooseAlbum, setChooseAlbum] = useState<any>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  const { getToken } = useToken()
  const token = getToken();

  const getAlbumChoose = async (id: string) => {
    await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
    }})
      .then(response => setChooseAlbum(response))
      .catch(error => console.error(error))
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (token) {
      axios.get("https://api.spotify.com/v1/browse/new-releases", {
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
      {showModal && (
        <Modal album={chooseAlbum} closeModalOutside={closeModal} />
      )}
      <h1 style={{marginBottom: "20px", fontSize: '2rem'}}>Novos Lançamentos</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {newReleases.map((release: any) => {
          return (
            <Card key={release.id} onClick={() => getAlbumChoose(release.id)}>
              <img src={`${release?.images[1].url}`} alt="Album" style={{ borderRadius: '5px'}} />
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default NewReleases
