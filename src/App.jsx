import * as React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const Form = ({ onSubmit, form, dispatch, isSubmitDisabled }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="field__wrapper">
        <div className="input__wrapper">
          <label className="" htmlFor="startDate">
            Start Date
          </label>
          <input
            name="startDate"
            value={form.startDate.value}
            onChange={dispatch}
            required={form.startDate.required}
          />
        </div>
        <div className="input__wrapper">
          <label className="label__input" htmlFor="endDate">
            End Date
          </label>
          <input
            name="endDate"
            value={form.endDate.value}
            onChange={dispatch}
            required={form.endDate.required}
          />
        </div>
      </div>
      <div className="field__wrapper">
        <div className="input__wrapper">
          <label className="label__input" htmlFor="morningShiftHigh">
            Morning Shift
          </label>
          <input
            name="morningShiftHigh"
            value={form.morningShiftHigh.value}
            onChange={dispatch}
            required={form.morningShiftHigh.required}
          />
        </div>
        <div className="input__wrapper">
          <label className="label__input" htmlFor="afternoonShiftHigh">
            Afternoon Shift
          </label>
          <input
            name="afternoonShiftHigh"
            value={form.afternoonShiftHigh.value}
            onChange={dispatch}
            required={form.afternoonShiftHigh.required}
          />
        </div>
      </div>
      <div className="field__wrapper">
        <div className="input__wrapper">
          <label className="label__input" htmlFor="morningShiftLow">
            Morning Shift
          </label>
          <input
            name="morningShiftLow"
            value={form.morningShiftLow.value}
            onChange={dispatch}
            required={form.morningShiftLow.required}
          />
        </div>
        <div className="input__wrapper">
          <label className="label__input" htmlFor="afternoonShiftLow">
            Afternoon Shift
          </label>
          <input
            name="afternoonShiftLow"
            value={form.afternoonShiftLow.value}
            onChange={dispatch}
            required={form.afternoonShiftLow.required}
          />
        </div>
      </div>
      <input
        type="submit"
        onClick={onSubmit}
        value="Submit"
        disabled={!isSubmitDisabled}
      />
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  form: PropTypes.object,
  isSubmitDisabled: PropTypes.bool,
}

function App() {
  const [form, setForm] = React.useState({
    startDate: {
      value: '',
      required: true,
    },
    endDate: {
      value: '',
      required: true,
    },
    morningShiftHigh: {
      value: '',
      required: true,
    },
    afternoonShiftHigh: {
      value: '',
      required: true,
    },
    morningShiftLow: {
      value: '',
      required: true,
    },
    afternoonShiftLow: {
      value: '',
      required: true,
    },
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.debug('Submit form')
  }

  const onFieldChange = ({ target }) => {
    const modifiedField = {
      required: form[target.name].required,
      value: target.value,
    }
    setForm({
      ...form,
      [target.name]: modifiedField,
    })
  }

  const areNsdConfigurationModalRequiedFieldFilled = (() => {
    const requiredFields = Object.keys(form).filter((key) => form[key].required)
    const areAllRequiredFieldsFilled = requiredFields.every(
      (field) => form[field].value,
    )
    return areAllRequiredFieldsFilled
  })()

  return (
    <>
      <h1>Forms test</h1>
      <Form
        dispatch={onFieldChange}
        form={form}
        isSubmitDisabled={areNsdConfigurationModalRequiedFieldFilled}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default App
