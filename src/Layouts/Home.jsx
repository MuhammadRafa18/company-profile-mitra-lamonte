import React from 'react'
import { HeroSection } from './HeroSection'
import { Vidio } from './Vidio'
import { Testimoni } from './Testimoni'
import { Ecorsystem } from './Ecorsystem'
import { KenapaSekarang } from './KenapaSekarang'
import { Katalog } from './Katalog'
import { Faq } from './Faq'
import { PaketKemitraan } from './PaketKemitraan'
import { StickyCTA } from './StickyCTA'

export const Home = () => {
  return (
    <>
    <HeroSection/>
    <KenapaSekarang/>
    <Ecorsystem/>
    <StickyCTA/>
    <Vidio/>
    <Testimoni/>
    <PaketKemitraan/>
    <Katalog/>
    <Faq/>
    </>
  )
}
