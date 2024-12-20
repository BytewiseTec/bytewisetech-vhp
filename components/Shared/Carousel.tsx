import Image, { StaticImageData } from 'next/image'

interface Slide {
  image: StaticImageData | string
  alt: string
}

interface CarouselProps {
  id: string
  slides: Slide[]
}

const Carousel: React.FC<CarouselProps> = ({ id, slides }) => {
  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            type="button"
            data-bs-target={`#${id}`}
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
            <Image src={slide.image} className="d-block" alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
