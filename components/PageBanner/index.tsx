interface PageBannerProps {
  title: string
  children: React.ReactNode
}

export default function PageBanner({ title, children }: PageBannerProps) {
  return (
    <section
      className="page_banner_section text-center"
      style={{ backgroundImage: 'url(\'assets/images/shapes/bg_pattern_4.svg\')' }}
    >
      <div className="container">
        <div className="heading_focus_text text-white">
          {children}
        </div>
        <h1 className="page_title mb-0 text-white">{title}</h1>
      </div>
    </section>
  )
}