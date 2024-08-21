

import { useAmplitude } from 'amplitude-react';
import './App.css'

function App() {
  const { logEvent } = useAmplitude();
  const onClick = () => {
    logEvent("test-event", {foo: "bar"})
  };

  return (
    <>
      <button onClick={onClick}>Send test event from Amplitude-React</button>
    </>
  )
}

export default App
