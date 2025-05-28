import React from 'react'
import { Section } from '../compoments/Section'
import { ColecoesDestaque1 } from '../compoments/ColecoesDestaque1'
import CarouselHome from '../compoments/CarouselHome'

const HomePage = () => {
  return (
    <Section title={"Coleções em destaque"}>
      <ColecoesDestaque1/>
      <CarouselHome></CarouselHome>
    </Section>
  )
}

export default HomePage