import React, { useState, useEffect } from 'react'
// import { CAT_RANDOM_IMAGE_URL } from './utils/links'

export const App = () => {
  const [fact, setfact] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setfact(data.fact)
        const wordsSelected = fact.split(' ').slice(0, 3).join(' ')
        console.log(wordsSelected)
      })
  }, [])

  return (
    <main>
      <h1>Kittens App </h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
