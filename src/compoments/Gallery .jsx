import { Carousel } from 'antd';
import '../index.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const produtos = [1, 2, 3, 4, 5]

const Gallery = () => {
  const {id} = useParams();
  const [productView, setProductView] = useState({});
  useEffect(() => {
      axios.get(`https://api-products-kpiv.onrender.com/produtos/${id}`)
          .then(data => setProductView(data.data))
          .catch(err => console.error("Erro ao buscar produtos: ", err));
  }, [])
  return (
  <div className='w-[49%]'>
    
    <Carousel arrows infinite={false} dots={false}>
      
      {produtos.map((item, index) => (
        <div key={index} className={`w-full bg-[#ccc] text-white h-120 content-center`}><img src={`${productView.img}`}alt="" className='mx-auto w-120'/>{console.log(item)}</div>
      ))}
      
    </Carousel>
  </div>
  )}
;
export default Gallery;