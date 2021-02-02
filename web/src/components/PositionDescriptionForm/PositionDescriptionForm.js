import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PositionDescriptionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.positionDescription?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.positionDescription?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="duties"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duties
        </Label>
        <TextField
          name="duties"
          defaultValue={props.positionDescription?.duties}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="duties" className="rw-field-error" />

        <Label
          name="education"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Education
        </Label>
        <TextField
          name="education"
          defaultValue={props.positionDescription?.education}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="education" className="rw-field-error" />

        <Label
          name="Experience"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Experience
        </Label>
        <TextField
          name="Experience"
          defaultValue={props.positionDescription?.Experience}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Experience" className="rw-field-error" />

        <Label
          name="purpose"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Purpose
        </Label>
        <TextField
          name="purpose"
          defaultValue={props.positionDescription?.purpose}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="purpose" className="rw-field-error" />

        <Label
          name="qualifications"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Qualifications
        </Label>
        <TextField
          name="qualifications"
          defaultValue={props.positionDescription?.qualifications}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="qualifications" className="rw-field-error" />

        <Label
          name="skills"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Skills
        </Label>
        <TextField
          name="skills"
          defaultValue={props.positionDescription?.skills}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="skills" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.positionDescription?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="workingConditions"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Working conditions
        </Label>
        <TextField
          name="workingConditions"
          defaultValue={props.positionDescription?.workingConditions}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="workingConditions" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PositionDescriptionForm
