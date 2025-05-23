import { Carousel } from 'antd';
import tenis from '../assets/produtctlistdetail/air-branco.svg'

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Gallery = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}><img src={tenis} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={tenis} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={tenis} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={tenis} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={tenis} alt="" /></h3>
      </div>
    </Carousel>
    <br/>
  </>
);
export default Gallery;