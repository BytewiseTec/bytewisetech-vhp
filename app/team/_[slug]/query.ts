import { Document } from '@contentful/rich-text-types'
import { gql } from '@apollo/client'
export interface Skill {
  label: string;
  description: string;
  color:string;
}
export interface Media {
  title: string
  url: string
  height: number
  width: number
}
export interface TeamMember {
  _id: string
  fullName: string
  title: string
  experience: string
  email: string
  p0: {
    json: Document
  }
  p1: {
    json: Document
  }
  phone: string
  social: string[]
  skills: string
  skillLevel:Skill[]
  bio: string
  qualifications:string[]
  portrait: Media

  slug: string 
}
export interface TeamMemberIdQuery {
  teamCollection: {
    items: { sys: { id: string } }[]
  }
}
export interface TeamMemberQuery {
  team: TeamMember;
}

export const GET_TEAMMEMBER_ID = gql`
 query TeamCollection($slug: String!) {
    teamCollection(where: { slug: $slug }){
        items {
            sys {
                id
            }
        }
    }
}
`
export const GET_TEAM_MEMBER = gql`
 query Team($id: String!){
    team(id: $id) {
        _id
        fullName
        title
        experience
        email
        phone
        social
        skills
        skillLevel
        bio
        qualifications
        slug
         p0 {
          json
        }
        p1 {
          json
        }
        portrait {
            title
            url
            width
            height
        }
    }
}
`