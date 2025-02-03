import { Document } from '@contentful/rich-text-types'
import gql from 'graphql-tag'

import { TeamMember } from '@/app/team/query'

import { EntryId, Media } from '../../content.types'

export interface GetBlogPostIdQuery {
  blogCollection: {
    items: EntryId[];
  };
}

export const GET_BLOG_POST_ID = gql`
  query GetBlogPostId($slug: String!) {
    blogCollection(where: { slug: $slug }) {
      items {
        sys {
          id
        }
      }
    }
  }
`

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedDate: string;
  private: boolean;
  thumbnail: Media;
  banner: Media;
  author: Pick<TeamMember, 'fullName'>;
  body: {
    json: Document;
  };
  sys: {
    publishedAt: string;
  };
}

export interface GetBlogPostQuery {
  blog: BlogPost;
}

export const GET_BLOG_POST = gql`
  query GetBlogPostQuery($id: String!) {
    blog(id: $id) {
      _id
      title
      slug
      excerpt
      category
      tags
      publishedDate
      private
      thumbnail {
        title
        url(
          transform: {
            width: 624
            height: 672
            resizeStrategy: FILL
            resizeFocus: BOTTOM
            backgroundColor: "rgb:321032"
            cornerRadius: 100
            format: JPG
            quality: 90
          }
        )
        height
        width
      }
      banner {
        title
        url(
          transform: {
            width: 2580
            height: 1190
            resizeStrategy: FILL
            resizeFocus: BOTTOM
            backgroundColor: "rgb:321032"
            format: JPG
            quality: 90
          }
        )
        width
        height
      }
      author {
        fullName
      }
      body {
        json
      }
      sys {
        publishedAt
      }
    }
  }
`

export interface BlogPostCategory {
  category: string;
  tags: string[];
  slug: string;
}

export interface GetBlogPostCategoriesQuery {
  blogCollection: {
    items: BlogPostCategory[];
  };
}

export const GET_BLOG_POST_CATEGORIES = gql`
  query GetBlogPostCategories {
    blogCollection(where: { private: false }) {
      items {
        category
        tags
        slug
      }
    }
  }
`
