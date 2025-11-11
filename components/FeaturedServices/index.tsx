'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PiArrowUpRightBold } from 'react-icons/pi'

interface Service {
  _id: string
  name: string
  slug: string |String
  heading?: string
  heading2?: string
  banner?: {
    url: string
    width: number
    height: number
    title: string
  }
}

export default function FeaturedServices({ services }: { services: Service[] }) {
  return (
   
       <section className="service_section main-div">
     <div className="container">
       <div className="heading_block text-center">
         <h2 className="heading_text mb-0">Featured Services</h2>
       </div>
   
       <div className="columns_container">
         {services.map((service) => (
           <div className="columns_item" key={service._id}>
             <div className="service_block">
               
               <div className="service_image">
                {service.banner && (
                  <Image
                    src={service.banner.url}
                    alt={service.banner.title}
                    fill
                    sizes="(min-width: 1200px) 25vw, (min-width: 768px) 40vw, 100vw"
                    className="service_image_media"
                  />
                )}
               </div>
   
               {/* Heading */}
               <h3 className="service_title">
                 <Link href={`/services/${service.slug}`} title={service.name}>
                   {service.name}
                 </Link>
               </h3>
   
               {/* Links + Icons Row */}
               <div className="links_icons_wrapper">
                 <div className="icons_group">
                   <Link
                     className="icon_block"
                     href={`/services/${service.slug}`}
                     title={service.name}
                   >
                     <PiArrowUpRightBold size={20} />
                   </Link>
                   {/* Add more icons here if needed */}
                 </div>
   
                 <div className="links_wrapper">
                   <ul className="category_btns_group unordered_list">
                     <li>
                       <a>{service.heading || 'Growth'}</a>
                     </li>
                     <li>
                       <a>{service.heading2 || 'Marketing'}</a>
                     </li>
                   </ul>
                 </div>
               </div>
   
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>
  )
}
