import * as React from 'react'
import './App.css'

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
      <form onSubmit={onSubmit}>
        <div className="field__wrapper">
          <div className="input__wrapper">
            <label className="" htmlFor="startDate">
              Start Date
            </label>
            <input
              name="startDate"
              value={form.startDate.value}
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
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
              onChange={onFieldChange}
              required={form.afternoonShiftLow.required}
            />
          </div>
        </div>
        <input
          type="submit"
          onClick={onSubmit}
          value="Submit"
          disabled={!areNsdConfigurationModalRequiedFieldFilled}
        />
      </form>
    </>
  )
}

export default App
