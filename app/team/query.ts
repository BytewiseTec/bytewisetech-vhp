import { gql } from '@apollo/client'

export interface Media {
  title: string;
  url: string;
  height: number;
  width: number;
}

export interface TeamMember {
  _id: string;
  fullName: string;
  title: string;
  experience: string;
  email: string;
  phone: string;
  social: string[];
  skills: string[];
  bio: string;
  education: string;
  portrait: Media;
  slug: string; 
}

export interface TeamCollectionQuery {
  teamCollection: {
    items: TeamMember[];
  };
}
export const GET_TEAM_COLLECTION = gql`
  query TeamCollection {
    teamCollection(where: { private: false }) {
      items {
        _id
        fullName
        title
        experience
        email
        phone
        social
        skills
        bio
        education
        slug
        portrait {
          title
          url
          height
          width
        }
      }
    }
  }
`