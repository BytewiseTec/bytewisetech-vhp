import React from 'react'
import { GET_FEATURED, FeatureQuery } from './query'
import { query } from '../../app/ApolloClient'
import Image from 'next/image'

export default async function Featured() {
const { data, loading, error } = await query<FeatureQuery>({
  query:GET_FEATURED
})

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading feature: {error.message}</div>
  if (!data || !data.partnerCollection.items.length) {
    return <div>No service available</div>
  }

  return (<></>
    // <div className="feature_partners_section">
    //   <div className="container position-relative">
    //     <div className="title_text text-white">
    //       Our Featured Partner&apos;s
    //     </div>
    //     <div className="client_logo_carousel">
    //       <div className="swiper-wrapper">
    //         {
    //           data.partnerCollection.items.map((feature,index) =>(
    //             <div className="swiper-slide" key={index}>
    //             <div className="client_logo_item">
    //             <Image src={feature.logo.url} alt={feature.company} width={feature.logo.width} height={feature.logo.height} />
    //             </div>
    //           </div>
    //           ))
    //         }
    //       </div>
        
    //     </div>
    //   </div>
    // </div>
  )
}