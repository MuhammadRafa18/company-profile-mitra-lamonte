import React from 'react'
import { HeroSection } from './HeroSection'
import { Vidio } from './Vidio'
import { Testimoni } from './Testimoni'
import { Ecorsystem } from './Ecorsystem'
import { KenapaSekarang } from './KenapaSekarang'
import { Katalog } from './Katalog'
import { Faq } from './Faq'
import { PaketKemitraan } from './PaketKemitraan'

export const Home = () => {
  return (
    <>
    <HeroSection/>
    <Vidio/>
    <Testimoni/>
    <Ecorsystem/>
    <KenapaSekarang/>
    <PaketKemitraan/>
    <Katalog/>
    <Faq/>
    </>
  )
}
