import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PositionDescriptionsCell'

const DELETE_POSITION_DESCRIPTION_MUTATION = gql`
  mutation DeletePositionDescriptionMutation($id: Int!) {
    deletePositionDescription(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const PositionDescriptionsList = ({ positionDescriptions }) => {
  const { addMessage } = useFlash()
  const [deletePositionDescription] = useMutation(
    DELETE_POSITION_DESCRIPTION_MUTATION,
    {
      onCompleted: () => {
        addMessage('PositionDescription deleted.', {
          classes: 'rw-flash-success',
        })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Description</th>
            <th>Duties</th>
            <th>Education</th>
            <th>Experience</th>
            <th>Purpose</th>
            <th>Qualifications</th>
            <th>Skills</th>
            <th>Title</th>
            <th>Working conditions</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {positionDescriptions.map((positionDescription) => (
            <tr key={positionDescription.id}>
              <td>{truncate(positionDescription.id)}</td>
              <td>{timeTag(positionDescription.createdAt)}</td>
              <td>{truncate(positionDescription.description)}</td>
              <td>{truncate(positionDescription.duties)}</td>
              <td>{truncate(positionDescription.education)}</td>
              <td>{truncate(positionDescription.Experience)}</td>
              <td>{truncate(positionDescription.purpose)}</td>
              <td>{truncate(positionDescription.qualifications)}</td>
              <td>{truncate(positionDescription.skills)}</td>
              <td>{truncate(positionDescription.title)}</td>
              <td>{truncate(positionDescription.workingConditions)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.positionDescription({
                      id: positionDescription.id,
                    })}
                    title={
                      'Show positionDescription ' +
                      positionDescription.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPositionDescription({
                      id: positionDescription.id,
                    })}
                    title={'Edit positionDescription ' + positionDescription.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={
                      'Delete positionDescription ' + positionDescription.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(positionDescription.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PositionDescriptionsList
