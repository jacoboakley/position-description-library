import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const PositionDescriptionsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.positionDescriptions()} className="rw-link">
            PositionDescriptions
          </Link>
        </h1>
        <Link
          to={routes.newPositionDescription()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New PositionDescription
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default PositionDescriptionsLayout
