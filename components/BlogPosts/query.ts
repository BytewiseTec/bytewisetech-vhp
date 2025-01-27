import { Media } from '@/app/content.types'
import { TeamMember } from '@/app/team/query'
import gql from 'graphql-tag'

export type BlogPost = {
  title: string;
  slug: string;
  body: {
    json: Document;
  };
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
        body {
          json
        }
        thumbnail {
          title
          url
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
