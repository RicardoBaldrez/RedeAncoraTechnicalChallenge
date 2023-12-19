/* eslint-disable jsx-a11y/alt-text */
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from './styles'

const Menu = (): ReactElement => {
  return (
    <Wrapper>
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXhha25kd21ucHNhNG1lYmNteHFmbmNlb3FhdDA0cWRzMG8wNXV3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iH1pvl2ECqOMKASI1p/giphy.gif"
        width="100"
        height="100"
      />
      <ul>
        <li>
          <Link to="new-releases">New releases</Link>
        </li>
        <li>
          <Link to="user-top-items">User top items</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Menu
