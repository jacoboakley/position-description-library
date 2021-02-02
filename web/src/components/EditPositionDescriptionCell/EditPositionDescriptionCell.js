import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PositionDescriptionForm from 'src/components/PositionDescriptionForm'

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
const UPDATE_POSITION_DESCRIPTION_MUTATION = gql`
  mutation UpdatePositionDescriptionMutation(
    $id: Int!
    $input: UpdatePositionDescriptionInput!
  ) {
    updatePositionDescription(id: $id, input: $input) {
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

export const Success = ({ positionDescription }) => {
  const { addMessage } = useFlash()
  const [updatePositionDescription, { loading, error }] = useMutation(
    UPDATE_POSITION_DESCRIPTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.positionDescriptions())
        addMessage('PositionDescription updated.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input, id) => {
    updatePositionDescription({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PositionDescription {positionDescription.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PositionDescriptionForm
          positionDescription={positionDescription}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
