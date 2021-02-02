import { Link, routes } from '@redwoodjs/router'

import PositionDescriptions from 'src/components/PositionDescriptions'

export const QUERY = gql`
  query POSITION_DESCRIPTIONS {
    positionDescriptions {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No positionDescriptions yet. '}
      <Link to={routes.newPositionDescription()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ positionDescriptions }) => {
  return <PositionDescriptions positionDescriptions={positionDescriptions} />
}
