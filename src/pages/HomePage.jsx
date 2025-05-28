import React from 'react'
import Icons from '../compoments/icons'
import {Section} from '../compoments/Section'
import Oferta from '../compoments/Oferta'

const HomePage = () => {
  return (
   <>
   <Section title={'Coleções em destaque'} width='86%' align='center'>
    <Icons/>
  
   </Section>
   <Section>
    <Oferta/>
   </Section>
   </>

  )
}

export default HomePage