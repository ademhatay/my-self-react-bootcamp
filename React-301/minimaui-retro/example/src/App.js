import React from 'react'

import {ExampleComponent, Button} from 'minimalui'
import 'minimalui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄"/>
      <Button text="Click Me" onClick={() => alert('asdas')}/>
    </>
  )
}

export default App
