interface PageBannerProps {
  title: string
  children?: React.ReactNode
}

export default function PageBanner({ title, children }: PageBannerProps) {
  return (
    <section
      className="page_banner_section text-center"
    >
      <div className="container">
        <h1 className="page_title mb-0 text-white">{title}</h1>
      </div>
    </section>
  )
}