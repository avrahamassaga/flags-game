import React from 'react'
import Head from './Head/Head'
import PlayBtn from './PlayBtn/PlayBtn'
import {island} from '../../assets/MediaData'
import './PageStart.css'
export default function PageStart() {
  return (
    <div className='homePage-container' style={{backgroundImage: `url(${island})`}}>
      <Head/>
      <PlayBtn/>
    </div>
  )
}
