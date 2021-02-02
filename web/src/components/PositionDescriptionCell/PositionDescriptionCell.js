import PositionDescription from 'src/components/PositionDescription'

export const QUERY = gql`
  query FIND_POSITION_DESCRIPTION_BY_ID($id: Int!) {
    positionDescription: positionDescription(id: $id) {
      id
      createdAt
      description
      duties
      education
      Experience
      purpose
      qualifications
      skills
      title
      workingConditions
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PositionDescription not found</div>

export const Success = ({ positionDescription }) => {
  return <PositionDescription positionDescription={positionDescription} />
}
