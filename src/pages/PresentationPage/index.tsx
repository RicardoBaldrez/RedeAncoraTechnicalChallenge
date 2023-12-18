/* eslint-disable jsx-a11y/alt-text */
import { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Menu, SectionBecomeSubscriber, SectionPlaylist, SectionCustomizeYourListen } from './styles'

const PresentationPage = (): ReactElement => {
  const [fixedMenu, setFixedMenu] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 85) {
      return setFixedMenu(true);
    }
    return setFixedMenu(false);
  })

  return (
    <>
      <Menu isfixed={fixedMenu}>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXhha25kd21ucHNhNG1lYmNteHFmbmNlb3FhdDA0cWRzMG8wNXV3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iH1pvl2ECqOMKASI1p/giphy.gif"
          width="130"
          height="100"
        />
        <Link to='/login'>Login</Link>
      </Menu>
      <Wrapper>
        <SectionBecomeSubscriber isfixed={fixedMenu}>
          <h1> WaveBeat Premium para aproveitar músicas sem anúncios, off-line e com a tela bloqueada</h1>
          <p>Faça seu <button>Login</button> para aproveitar o máximo</p>
        </SectionBecomeSubscriber>
        <SectionPlaylist>
          <img src="https://s2.glbimg.com/fCZRC09UNj65CYfCzgy0fYTX54c=/e.glbimg.com/og/ed/f/original/2015/10/16/capaplaylist_1.jpg" alt="PlaylistOne" />
          <img src="https://hollywoodforevertv.com.br/media/uploads/playlist-albuns-classicos-que-completam-50-anos-em-2023.jpg" alt="PlaylistTwo" />
          <img src="https://faixadorock.files.wordpress.com/2021/03/psych.jpg?w=980" alt="PlaylistThree" />
          <h1>Tudo no seu ritmo</h1>
          <p>Conheça milhares de playlists selecionadas para casa momento ou clima e ouça os mixes feitos com base nas suas músicas preferidas.</p>
        </SectionPlaylist>
        <SectionCustomizeYourListen>
          <img src="https://support.apple.com/library/content/dam/edam/applecare/images/pt_BR/airpods/ios15-iphone13-pro-airpods-headphone-audio-levels-animation.gif" alt="Gif App" />
          <h1>Personalize sua forma de ouvir</h1>
          <p>Combine seus artistas favoritos e crie uma experiência musical do seu jeito.</p>
        </SectionCustomizeYourListen>
      </Wrapper>
    </>
  )
}

export default PresentationPage
