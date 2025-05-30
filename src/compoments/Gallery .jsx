import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const bgColors = ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF'];

const Gallery = ({
  className = '',
  width = '100%',
  height = '500px',
  radius = '0px',
  showThumbs = false,
  pag = false,
  images = null,
  children = null, // componente a ser exibido no lado direito do slide
}) => {
  const { id } = useParams();
  const [productView, setProductView] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (!images) {
      axios
        .get(`https://api-products-kpiv.onrender.com/produtos/${id}`)
        .then((res) => setProductView(res.data))
        .catch((err) => console.error('Erro ao buscar produto:', err));
    }
  }, [id, images]);

  const imgArray = images && images.length > 0
    ? images.map((item, i) => ({ src: item.src, bg: bgColors[i % bgColors.length] }))
    : productView?.img
      ? Array.from({ length: 5 }, (_, i) => ({ src: productView.img, bg: bgColors[i] }))
      : [];

  if (!imgArray.length) return null;

  return (
    <div className={`w-[49%] ${className}`} style={{ width }}>
      {!images && (
        <h2 className="text-sm mb-4">
          <span className="font-bold">HOME /</span> Produtos / {productView.categoria} {productView.marca} / {productView.titulo}
        </h2>
      )}

      <Swiper
        modules={[Navigation, Thumbs, Pagination]}
        navigation
        pagination={pag ? { clickable: true } : false}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-md"
      >
        {imgArray.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                height,
                backgroundColor: images ? "#FFF" : slide.bg,
                borderRadius: radius,
              }}
              className={`flex items-center justify-center ${
                images ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex items-center justify-center ${
                  images ? 'w-1/2' : 'w-full'
                }`}
              >
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  style={{ borderRadius: radius }}
                  className="max-h-full object-contain"
                />
              </div>

              {images && (
                <div className="w-1/2 p-4">
                  {children}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showThumbs && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={25}
          slidesPerView={5}
          watchSlidesProgress
          className="mt-4"
        >
          {imgArray.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: '117px',
                  height: '95px',
                  backgroundColor: slide.bg,
                  borderRadius: radius,
                }}
                className="flex items-center justify-center border-2 border-transparent cursor-pointer hover:border-primary swiper-slide-thumb-active:border-primary"
              >
                <img
                  src={slide.src}
                  alt={`Thumb ${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: radius,
                    objectFit: 'contain',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Gallery;
