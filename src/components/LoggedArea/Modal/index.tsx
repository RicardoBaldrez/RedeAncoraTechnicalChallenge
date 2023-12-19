import React, { ReactElement } from 'react'

import { Overflow, WrapperModal } from './styles'

const Modal = ({album, closeModalOutside}: any): ReactElement => {
  return (
    <Overflow>
      <WrapperModal backgroundimage={album?.data?.images[1].url}>
        <span
          onClick={() => closeModalOutside()}
        >
          X
        </span>
        <header>
          <div>
            <h1>Album: {album?.data?.name}</h1>
            <p>Músicas({album?.data?.tracks?.total}) - Lançamento {album?.data?.release_date.split('-').reverse().join('/')}</p>
          </div>
        </header>
        <div>
          <h1># <span>Título</span></h1>
          <ul>
            {album?.data?.tracks?.items.map((track: any) => {
              return <li key={track.id}>{track.track_number} <span>{track?.name}</span></li>
            })}
          </ul>
        </div>
      </WrapperModal>
    </Overflow>
  )
}

export default Modal
