import PositionDescriptionsLayout from 'src/layouts/PositionDescriptionsLayout'
import EditPositionDescriptionCell from 'src/components/EditPositionDescriptionCell'

const EditPositionDescriptionPage = ({ id }) => {
  return (
    <PositionDescriptionsLayout>
      <EditPositionDescriptionCell id={id} />
    </PositionDescriptionsLayout>
  )
}

export default EditPositionDescriptionPage
