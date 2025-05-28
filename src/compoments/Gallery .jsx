import { Carousel } from 'antd';
import '../index.css'
import { BuyBox } from './BuyBox';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const produtos = [1, 2, 3, 4, 5]
const Gallery = () => (
  <div className='w-[49%]'>
    
    <Carousel arrows infinite={false} dots={false}>
      
      {produtos.map((item, index) => (
        <div key={index} className='w-full bg-blue-500 text-white text-center h-100 content-center'>item {item}</div>
      ))}
      
    </Carousel>
  </div>
  
);
export default Gallery;