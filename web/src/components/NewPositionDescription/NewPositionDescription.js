import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PositionDescriptionForm from 'src/components/PositionDescriptionForm'

import { QUERY } from 'src/components/PositionDescriptionsCell'

const CREATE_POSITION_DESCRIPTION_MUTATION = gql`
  mutation CreatePositionDescriptionMutation(
    $input: CreatePositionDescriptionInput!
  ) {
    createPositionDescription(input: $input) {
      id
    }
  }
`

const NewPositionDescription = () => {
  const { addMessage } = useFlash()
  const [createPositionDescription, { loading, error }] = useMutation(
    CREATE_POSITION_DESCRIPTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.positionDescriptions())
        addMessage('PositionDescription created.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onSave = (input) => {
    createPositionDescription({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New PositionDescription
        </h2>
      </header>
      <div className="rw-segment-main">
        <PositionDescriptionForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewPositionDescription
