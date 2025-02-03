import gql from 'graphql-tag'

import { Media } from '@/app/content.types'
import { TeamMember } from '@/app/team/query'

export type BlogPost = {
  title: string;
  slug: string;
  thumbnail: Media;
  publishedDate: string;
  author: Pick<TeamMember, 'fullName'>;
}

export type GetLatestBlogPostsQuery = {
  blogCollection: {
    items: BlogPost[];
  }
}

export const GET_LATEST_BLOG_POSTS = gql`
  query GetLatestBlogPosts {
    blogCollection(limit: 3, order: [publishedDate_DESC], where: { private: false }) {
      items {
        title
        slug
        thumbnail {
          title
          url(transform: {
            width: 1640,
            height: 1304,
            resizeStrategy: FILL,
            resizeFocus: BOTTOM,
            format: JPG,
            quality: 90
          })
          height
          width
        }
        publishedDate
        author {
          fullName
        }
      }
    }
  }
`
