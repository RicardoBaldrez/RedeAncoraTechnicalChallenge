import React, { ReactElement } from 'react'

import { Overflow, WrapperModal, CloseModalButton, HeaderModal, BodyModal } from './styles'

const Modal = ({album, closeModalOutside}: any): ReactElement => {
  return (
    <Overflow>
      <WrapperModal>
        <CloseModalButton
          onClick={() => closeModalOutside()}
        >
          X
        </CloseModalButton>
        <HeaderModal backgroundimage={album?.data?.images[1].url}>
          <div>
            <h1>Album: {album?.data?.name}</h1>
            <p>Músicas({album?.data?.tracks?.total}) - Lançamento {album?.data?.release_date.split('-').reverse().join('/')}</p>
          </div>
        </HeaderModal>
        <BodyModal>
          <h1># <span>Título</span></h1>
          <ul>
            {album?.data?.tracks?.items.map((track: any) => {
              return <li key={track.id}>{track.track_number} <span>{track?.name}</span></li>
            })}
          </ul>
        </BodyModal>
      </WrapperModal>
    </Overflow>
  )
}

export default Modal
