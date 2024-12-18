import Image, { StaticImageData } from 'next/image'

interface Slide {
  image: StaticImageData | string
  alt: string
}

interface CarouselProps {
  slides: Slide[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div id="carouselIndicators" className="d-flex carousel slide w-100 h-100 align-items-center justify-content-center" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to={index.toString()}
            className={index === 0 ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === 0 ? 'true' : undefined}
            key={index}>
          </button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <Image src={slide.image} className="d-block w-100" alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
