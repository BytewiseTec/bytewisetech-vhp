import Image from 'next/image'
import dayjs from 'dayjs'
import { PiArrowUpRightBold } from 'react-icons/pi'
import Script from 'next/script'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import generateStructuredData from '@/utils/structured-data'
import { query } from '@/app/ApolloClient'
import { renderDomToReact } from '@/utils/renderers'
import { CopyToClipboardLink } from '@/components/Shared/CopyToClipboardLink'
import { AddToBookmarks } from '@/components/Shared/AddToBookmarks'
import { ShareLink } from '@/components/Shared/ShareLink'

import PageBanner from '../../../components/PageBanner'
import IconCalendar from '../../../public/assets/images/icons/icon_calendar.svg'
import IconUser from '../../../public/assets/images/icons/icon_user.svg'
import SearchIcon from '../../../public/assets/images/icons/icon_search.svg'

import { GET_BLOG_POST, GET_BLOG_POST_CATEGORIES, GET_BLOG_POST_ID, GetBlogPostCategoriesQuery, GetBlogPostIdQuery, GetBlogPostQuery } from './query'



interface BlogDetailsPageProps {
  params: Promise<{ slug: string; }>
}

export async function generateMetadata(
  { params }: BlogDetailsPageProps,
): Promise<Metadata> {
  const { slug } = await params
  const { data: blogPostIdResponse } = await query<GetBlogPostIdQuery>({
    query: GET_BLOG_POST_ID,
    variables: {
      slug,
    }
  })

  const { items } = blogPostIdResponse.blogCollection || {}

  if (!items?.length) {
    return {}
  }

  const { data: blogPostData } = await query<GetBlogPostQuery>({
    query: GET_BLOG_POST,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { blog: post } = blogPostData || {}

  return {
    title: `${post.title} - Bytewise Technologies`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    openGraph: {
      locale: 'en_US',
      type: 'website',
      title: `${post.title} - Bytewise Technologies`,
      description: post.excerpt,
      url: `https://bytewisetechnologies.com/blog/${slug}`,
      siteName: 'Bytewise Technologies',
      images: [
        {
          url: post.banner?.url,
          width: post.banner?.width,
          height: post.banner?.height,
          alt: post.banner?.title,
        },
        {
          url: post.thumbnail?.url,
          width: post.thumbnail?.width,
          height: post.thumbnail?.height,
          alt: post.thumbnail?.title,
        }
      ],
    } as const,
  }
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params
  const [blogPostIdResponse, blogPostCategoriesResponse] = await Promise.all([
    query<GetBlogPostIdQuery>({
      query: GET_BLOG_POST_ID,
      variables: {
        slug,
      }
    }),
    query<GetBlogPostCategoriesQuery>({
      query: GET_BLOG_POST_CATEGORIES,
    }),
  ])

  const { items: categories = [] } = blogPostCategoriesResponse.data?.blogCollection || {}

  const categoryCounts = categories.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // const allTags = Array.from(categories.reduce((acc, { tags }) => {
  //   tags?.forEach((tag) => {
  //     acc.add(tag)
  //   })
  //   return acc
  // }, new Set<string>()) || [])

  const { items } = blogPostIdResponse.data?.blogCollection || {}

  if (!items?.length) {
    notFound()
  }

  const { data: blogPostData } = await query<GetBlogPostQuery>({
    query: GET_BLOG_POST,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { blog: post } = blogPostData || {}

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://bytewisetechnologies.com/blog' },
        { '@type': 'ListItem', position: 3, name: post.title },
      ],
    },
    {
      '@type': 'BlogPosting',
      headline: post.title,
      image: post.banner?.url,
      thumbnailUrl: post.thumbnail?.url,
      description: post.excerpt,
      datePublished: post.publishedDate,
      dateModified: post.sys.publishedAt,
      genre: post.category,
      url: `https://bytewisetechnologies.com/blog/${slug}`,
      publisher: {
        '@id': 'https://bytewisetechnologies.com/#organization',
      }
    }
  ])

  return (
    <>
      <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} id="structured-data" />

      <PageBanner
        title={post.title}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title },
        ]}
      />

      <section className="blog_details_section section_space ">
        <div className="container">
          <div className="post_meta_wrap mb-4">
            <ul className="category_btns_group unordered_list">
              <li><a href="#!">{post.category}</a></li>
            </ul>
            <ul className="post_meta unordered_list">
              <li>
                <a href="#!">
                  <Image src={IconCalendar} alt="Icon Calendar" /> {dayjs(post.publishedDate).format('MM/DD/YYYY')}
                </a>
              </li>
            </ul>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="post_meta unordered_list">
                <li>
                  <a href="#!">
                    <Image src={IconUser} alt="Icon User" /> by {post.author.fullName}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="post_meta unordered_list justify-content-md-end">
                <li>
                  <CopyToClipboardLink />
                </li>
                <li>
                  <AddToBookmarks />
                </li>
              </ul>
            </div>
          </div>
          <hr className="mb-10" />
          <div className="pb-0 ">
            <div className="row">
              <div className="col-lg-12">
                <div className='padding-setting w-90'>
                  <h1>{post.title}</h1>
                  {renderDomToReact(post.body.json)}
                </div>
                <hr className="mt-0 mb-5" />
                <div className="row padding-setting">
                  <div className="col-md-6">
                    <ul className="tags_list unordered_list">
                      {post.tags?.map((tag) => (
                        <li key={tag}>
                          <a href="#!">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="post_share_link">
                      <ul className="social_icons_block unordered_list justify-content-md-end">
                        <li>
                          <ShareLink to="facebook" />
                        </li>
                        <li>
                          <ShareLink to="twitter" />
                        </li>
                        <li>
                          <ShareLink to="linkedin" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4">
                <aside className="sidebar ps-lg-5">
                  <div className="search_form">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <div className="form-group">
                      <input className="form-control" type="search" name="search" placeholder="Search your keyword" />
                      <button type="submit" title="Search">
                        <Image src={SearchIcon} alt="Search Icon" />
                      </button>
                    </div>
                  </div>
                  <div className="post_category_wrap">
                    <h3 className="sidebar_widget_title">Categories</h3>
                    <ul className="post_category_list unordered_list_block">
                      {categoryCounts && Object.entries(categoryCounts).map(([category, count]) => (
                        <li key={category}>
                          <a href="#!">
                            <PiArrowUpRightBold size={20} />
                            <span>{category}</span>
                            <span>({count})</span>
                          </a>
                        </li>
                      ))}
                    </ul> */}
            </div>
            {/* <div className="popular_tags">
                    <h3 className="sidebar_widget_title">Popular Tags</h3>
                    <ul className="tags_list unordered_list">
                      {allTags.map((tag) => (
                        <li key={tag}>
                          <a href="#!">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
            {/* </aside>
              </div> 
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  const { data } = await query<GetBlogPostCategoriesQuery>({
    query: GET_BLOG_POST_CATEGORIES,
  })

  const { items } = data?.blogCollection || {}

  const paths = items?.map(({ slug }) => ({
    slug,
  }))

  return paths
}
