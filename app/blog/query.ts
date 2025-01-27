import gql from 'graphql-tag'

import { Media } from '../content.types'

export type BlogPostSlide = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  banner: Media;
  tags: string[];
  publishedDate: string;
}

export type GetBlogPostSlidesQuery = {
  blogCollection: {
    items: BlogPostSlide[];
  }
}

export const GET_BLOG_POST_SLIDES = gql`
  query GetBlogPostSlides {
    blogCollection(limit: 3, order: [publishedDate_DESC], where: { private: false }) {
      items {
        _id
        title
        slug
        excerpt
        tags
        banner {
          title
          url
          height
          width
        }
        publishedDate
      }
    }
  }
`

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: Media;
  category: string;
  publishedDate: string;
}

export type GetBlogPostsListQuery = {
  blogCollection: {
    items: BlogPost[];
  }
}

export const GET_BLOG_POSTS_LIST = gql`
  query GetBlogPostsList {
    blogCollection(order: [publishedDate_DESC], where: { private: false }) {
      items {
        _id
        title
        slug
        excerpt
        thumbnail {
          title
          url
          height
          width
        }
        category
        publishedDate
      }
    }
  }
`
