import * as React from 'react'
import './App.css'

const ACTIONS = {
  START_DATE_UPDATE: 'start_date_update',
  END_DATE_UPDATE: 'end_date_update',
  MORNING_SHIFT_HIGH_UPDATE: 'morning_shift_high_update',
  AFTERNOON_SHIFT_HIGH_UPDATE: 'afternoon_shift_high_update',
  MORNING_SHIFT_LOW_UPDATE: 'morning_shift_low_update',
  AFTERNOON_SHIFT_LOW_UPDATE: 'afternoon_shift_low_update',
}

const formReducer = (formState, action) => {
  const { type } = action

  switch (type) {
    case ACTIONS.START_DATE_UPDATE: {
      const field = { ...formState.startDate }
      field.value = action.payload
      return {
        ...formState,
        startDate: field,
      }
    }
    case ACTIONS.END_DATE_UPDATE: {
      const field = { ...formState.endDate }
      field.value = action.payload
      return {
        ...formState,
        endDate: field,
      }
    }
    case ACTIONS.MORNING_SHIFT_HIGH_UPDATE: {
      const field = { ...formState.morningShiftHigh }
      field.value = action.payload
      return {
        ...formState,
        morningShiftHigh: field,
      }
    }
    case ACTIONS.AFTERNOON_SHIFT_HIGH_UPDATE: {
      const field = { ...formState.afternoonShiftHigh }
      field.value = action.payload
      return {
        ...formState,
        afternoonShiftHigh: field,
      }
    }
    case ACTIONS.MORNING_SHIFT_LOW_UPDATE: {
      const field = { ...formState.morningShiftLow }
      field.value = action.payload
      return {
        ...formState,
        morningShiftLow: field,
      }
    }
    case ACTIONS.AFTERNOON_SHIFT_LOW_UPDATE: {
      const field = { ...formState.afternoonShiftLow }
      field.value = action.payload
      return {
        ...formState,
        afternoonShiftLow: field,
      }
    }
    default:
      return formState
  }
}

function App() {
  const [form, dispatch] = React.useReducer(formReducer, {
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
              onChange={({ target: { value } }) =>
                dispatch({ type: ACTIONS.START_DATE_UPDATE, payload: value })
              }
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
              onChange={({ target: { value } }) =>
                dispatch({ type: ACTIONS.END_DATE_UPDATE, payload: value })
              }
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
              onChange={({ target: { value } }) =>
                dispatch({
                  type: ACTIONS.MORNING_SHIFT_HIGH_UPDATE,
                  payload: value,
                })
              }
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
              onChange={({ target: { value } }) =>
                dispatch({
                  type: ACTIONS.AFTERNOON_SHIFT_HIGH_UPDATE,
                  payload: value,
                })
              }
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
              onChange={({ target: { value } }) =>
                dispatch({
                  type: ACTIONS.MORNING_SHIFT_LOW_UPDATE,
                  payload: value,
                })
              }
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
              onChange={({ target: { value } }) =>
                dispatch({
                  type: ACTIONS.AFTERNOON_SHIFT_LOW_UPDATE,
                  payload: value,
                })
              }
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
