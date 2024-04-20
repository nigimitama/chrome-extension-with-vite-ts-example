import { useState } from "react"

function App() {
  const [value, setValue] = useState(0)
  if (chrome.storage !== undefined) {
    chrome.storage.sync.get(["value"], (result) => {
      setValue(result.value)
    });
  }
  return (
    <>
      Options

      <p>
        {value}
      </p>
    </>
  )
}

export default App
