import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CarouselSection() {
  const promoItems = [
    {
      id: 1,
      discount: '50% OFF',
      title: 'SUPER DELICIOUS FOOD',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      discount: '50% OFF',
      title: 'SPECIAL CHEF MENU',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      discount: '30% OFF',
      title: 'WEEKEND SPECIAL DEALS',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="carousel-section">
      <h2 className="section-title">Special Offers & Banners</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {promoItems.map((item) => (
          <SwiperSlide key={item.id} style={{ paddingBottom: '30px' }}>
            <div className="promo-card">
              <img src={item.image} alt={item.title} className="promo-card-bg" />
              <div className="promo-card-overlay">
                <span className="promo-discount-badge">{item.discount}</span>
                <h3 className="promo-card-title">{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}