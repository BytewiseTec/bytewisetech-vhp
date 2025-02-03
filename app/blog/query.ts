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
          url(transform: {
            width: 2580,
            height: 1200,
            resizeStrategy: FILL,
            resizeFocus: BOTTOM,
            backgroundColor: "rgb:321032",
            format: JPG,
            quality: 90
          })
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

export type GetBlogPostsListQueryVariables = {
  limit: number;
  skip: number;
}

export type GetBlogPostsListQuery = {
  blogCollection: {
    total: number;
    limit: number;
    skip: number;
    items: BlogPost[];
  }
}

export const GET_BLOG_POSTS_LIST = gql`
  query GetBlogPostsList($limit: Int!, $skip: Int!) {
    blogCollection(
      order: [publishedDate_DESC],
      where: { private: false },
      limit: $limit,
      skip: $skip
    ) {
      total
      limit
      skip
      items {
        _id
        title
        slug
        excerpt
        thumbnail {
          title
          url(transform: {
            width: 624,
            height: 672,
            resizeStrategy: FILL,
            resizeFocus: FACES,
            format: JPG,
            quality: 90
          })
          height
          width
        }
        category
        publishedDate
      }
    }
  }
`

export type GetCategoryCountQuery = {
  blogCollection: {
    total: number;
  }
}

export const GET_CATEGORY_COUNT = gql`
  query GetCategoryCount {
    blogCollection(where: { private: false }) {
      total
    }
  }
`
