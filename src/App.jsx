import React, { useState, useEffect } from 'react'

export const App = () => {
  const [fact, setfact] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setfact(data.fact))
  }, [])

  return (
    <main>
      <h1>Kittens App </h1>
      {fact}
    </main>
  )
}
