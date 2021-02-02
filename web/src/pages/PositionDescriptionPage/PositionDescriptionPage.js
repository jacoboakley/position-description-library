import PositionDescriptionsLayout from 'src/layouts/PositionDescriptionsLayout'
import PositionDescriptionCell from 'src/components/PositionDescriptionCell'

const PositionDescriptionPage = ({ id }) => {
  return (
    <PositionDescriptionsLayout>
      <PositionDescriptionCell id={id} />
    </PositionDescriptionsLayout>
  )
}

export default PositionDescriptionPage
