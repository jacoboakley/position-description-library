export const schema = gql`
  type PositionDescription {
    id: Int!
    createdAt: DateTime!
    description: String!
    duties: String!
    education: String!
    Experience: String!
    purpose: String!
    qualifications: String!
    skills: String!
    title: String!
    workingConditions: String!
  }

  type Query {
    positionDescriptions: [PositionDescription!]!
    positionDescription(id: Int!): PositionDescription
  }

  input CreatePositionDescriptionInput {
    description: String!
    duties: String!
    education: String!
    Experience: String!
    purpose: String!
    qualifications: String!
    skills: String!
    title: String!
    workingConditions: String!
  }

  input UpdatePositionDescriptionInput {
    description: String
    duties: String
    education: String
    Experience: String
    purpose: String
    qualifications: String
    skills: String
    title: String
    workingConditions: String
  }

  type Mutation {
    createPositionDescription(
      input: CreatePositionDescriptionInput!
    ): PositionDescription!
    updatePositionDescription(
      id: Int!
      input: UpdatePositionDescriptionInput!
    ): PositionDescription!
    deletePositionDescription(id: Int!): PositionDescription!
  }
`
