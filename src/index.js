import React from 'react'
import ReactDOM from 'react-dom'

import Frame from './lib/components/frame/'
import Chat from './lib/components/chat/'
import Input from './lib/components/input/'

ReactDOM.render(
    <Frame>   
      <Chat> aaa </Chat>
      <Input> aaa </Input>
    </Frame>,
    document.querySelector('#root')
  )