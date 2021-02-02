import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/PositionDescriptionsCell'

const DELETE_POSITION_DESCRIPTION_MUTATION = gql`
  mutation DeletePositionDescriptionMutation($id: Int!) {
    deletePositionDescription(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const PositionDescription = ({ positionDescription }) => {
  const { addMessage } = useFlash()
  const [deletePositionDescription] = useMutation(
    DELETE_POSITION_DESCRIPTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.positionDescriptions())
        addMessage('PositionDescription deleted.', {
          classes: 'rw-flash-success',
        })
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete positionDescription ' + id + '?')
    ) {
      deletePositionDescription({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PositionDescription {positionDescription.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{positionDescription.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(positionDescription.createdAt)}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{positionDescription.description}</td>
            </tr>
            <tr>
              <th>Duties</th>
              <td>{positionDescription.duties}</td>
            </tr>
            <tr>
              <th>Education</th>
              <td>{positionDescription.education}</td>
            </tr>
            <tr>
              <th>Experience</th>
              <td>{positionDescription.Experience}</td>
            </tr>
            <tr>
              <th>Purpose</th>
              <td>{positionDescription.purpose}</td>
            </tr>
            <tr>
              <th>Qualifications</th>
              <td>{positionDescription.qualifications}</td>
            </tr>
            <tr>
              <th>Skills</th>
              <td>{positionDescription.skills}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{positionDescription.title}</td>
            </tr>
            <tr>
              <th>Working conditions</th>
              <td>{positionDescription.workingConditions}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPositionDescription({ id: positionDescription.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(positionDescription.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default PositionDescription
