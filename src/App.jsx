import React, { useState, useEffect } from 'react'
import { CAT_PREFIX_IMAGE_URL } from './utils/links'

export const App = () => {
  const [fact, setfact] = useState('')
  const [img, setImg] = useState()
  const [randomWords, setRandomWords] = useState()
  const catRandomUrl = `https://cataas.com/cat/says/${randomWords}?size=50&color=red&json=true`

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setfact(data.fact)
        const wordsSelected = fact.split(' ').slice(0, 3).join(' ')
        setRandomWords(wordsSelected)
      })
  }, [])

  useEffect(() => {
    if (!randomWords) return
    fetch(catRandomUrl)
      .then(response => response.json())
      .then(data => {
        setImg(data.url)
      })
  }, [fact])

  return (
    <main>
      <h1>Kittens App </h1>
      {fact && <p>{fact}</p>}
      {img && <img src={`${CAT_PREFIX_IMAGE_URL}${img}`} alt='images of cats that I received from the api' />}
    </main>
  )
}
