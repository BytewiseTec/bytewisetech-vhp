import Link from 'next/link'
import Image from 'next/image'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { FaRegCircleUser } from 'react-icons/fa6'
import dayjs from 'dayjs'

import IconCalendar from '../../public/assets/images/icons/icon_calendar.svg'

import { BlogPost } from './query'

interface BlogPostsProps {
  posts: BlogPost[]
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <section className="blog_section blog_section_space section_decoration">
      <div className="container">
          <div className="heading_block text-center">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{ backgroundImage: 'url(\'/assets/images/shapes/shape_title_under_line.svg\')' }}
            >
              Our Articles
            </div>
            <h2 className="heading_text mb-0">
              Latest <mark>Articles</mark>
            </h2>     
        </div>
        <div className="row justify-content-center">
          {posts.map((post) => (
            <div className="col-lg-4" key={post.slug}>
              <div className="blog_post_block layout_2">
                <div className="blog_post_image">
                  <Link className="image_wrap" href={`/blog/${post.slug}`} title={post.title}>
                    {post.thumbnail?.url && (
                      <Image
                        src={post.thumbnail.url}
                        alt={post.thumbnail.title}
                        width={post.thumbnail.width}
                        height={post.thumbnail.height}
                      />
                    )}
                    <i>
                      <PiArrowUpRightBold size={50} />
                    </i>
                  </Link>
                </div>
                <div className="blog_post_content p-0">
                  <h3 className="blog_post_title mb-0">
                    <Link href={`/blog/${post.slug}`} title={post.title}>
                      {post.title}
                    </Link>
                  </h3>
                  <ul className="post_meta unordered_list">
                    <li>
                      <Link href="/blog">
                        <FaRegCircleUser /> By <b>{post.author.fullName}</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <Image src={IconCalendar} alt="Calendar icon" /> {dayjs(post.publishedDate).format('MMM DD, YYYY')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}