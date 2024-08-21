

import { useAmplitude } from 'amplitude-react';
import './App.css'
import { useEffect } from "react";

function App() {
  const { logEvent } = useAmplitude();

  useEffect(() => {
    console.log("[Amplitude-React] logging event...");
    logEvent("test-event", {foo: "bar"})
  }, []);
  return (
    <>
      This is the Amplitude-React docs page.
    </>
  )
}

export default App
