import React from 'react'
import Gallery from '../compoments/Gallery '

const HomePage = () => {
  return (
    <Gallery
  images={[
    { src: '/tenis' },
    { src: '/tenis' }
  ]}
  showThumbs={false}
  pag
  radius="8px"
  width="100%"
  height="600px"
>
  <div>
    <h3 className="text-xl font-bold">Informações do Produto</h3>
    <p>Descrição, preço, botões ou qualquer conteúdo aqui.</p>
  </div>
</Gallery>
  )
}

export default HomePage