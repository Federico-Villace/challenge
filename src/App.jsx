import React, { useState, useEffect } from 'react'
import { CAT_PREFIX_IMAGE_URL, CAT_FACT_URL } from './utils/links'
import '../style.css'

function useGetFact (url) {
  const [fact, setfact] = useState('')
  const [randomWords, setRandomWords] = useState()

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setfact(data.fact)
        const wordsSelected = fact.split(' ').slice(0, 3).join(' ')
        setRandomWords(wordsSelected)
      })
  }, [])
  return { fact, randomWords }
}

export const App = () => {
  const [img, setImg] = useState()
  const { fact, randomWords } = useGetFact(CAT_FACT_URL)
  const catRandomUrl = `https://cataas.com/cat/says/${randomWords}?size=50&color=red&json=true`

  const handleImg = async () => {
    const res = await fetch(catRandomUrl)
    const data = await res.json()
    const { url } = data
    setImg(url)
  }

  useEffect(() => {
    if (!randomWords) return
    handleImg()
  }, [fact])

  return (
    <main>
      <h1>Kittens App </h1>
      <section>

        {fact && <p>{fact}</p>}
        {img && <img src={`${CAT_PREFIX_IMAGE_URL}${img}`} alt='images of cats that I received from the api' />}
        <button onClick={handleImg}> Change Photo </button>
      </section>
    </main>
  )
}
