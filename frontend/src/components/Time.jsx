import React from 'react'

const Time = () => {
  return (
    <div>
        <div className="border rounded border-dark mb-1">
            <h3>Select a Time Slot</h3>
            {/*Check box for showing Movies Time */}
            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="3"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="3">
              10:00 AM
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="4"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="4">
              01:00 PM
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="4"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="4">
              03:00 PM
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="4"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="4">
              08:00 PM
            </label>
          </div>
    </div>
  )
}

export default Time