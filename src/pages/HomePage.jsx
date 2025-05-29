import React from 'react'
import { Section } from '../compoments/Section'
import { ColecoesDestaque1 } from '../compoments/ColecoesDestaque1'
import { OfertasCarousel } from '../compoments/OfertasCarousel'


const HomePage = () => {
  return (
    <>
    <OfertasCarousel></OfertasCarousel>
    <Section title={"Coleções em destaque"}>
      <ColecoesDestaque1/>
    </Section>
    </>
  )
}

export default HomePage