import Link from 'next/link'

type breadcrumbItem = {
  name: string
  url?: string
}

interface PageBannerProps {
  title: string
  children?: React.ReactNode
  breadcrumb?: breadcrumbItem[]
}

export default function PageBanner({ title, breadcrumb = [] }: PageBannerProps) {
  const isCurrent = (index: number) => index === breadcrumb.length - 1

  return (
    <section
      className="page_banner_section text-center"
    >
      <div className="container">
        <h1 className="page_title mb-0 text-white">{title}</h1>
      </div>

      {breadcrumb.length > 0 && (
        <nav aria-label="breadcrumb" className="bg-dark">
          <div className="container">
            <ol className="breadcrumb">
              {breadcrumb?.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item text-white ${isCurrent(index) ? 'active' : ''}`}
                  aria-current={isCurrent(index) ? 'page' : undefined}
                >
                  {item.url ? <Link href={item.url}>{item.name}</Link> : item.name}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      )}
    </section>
  )
}