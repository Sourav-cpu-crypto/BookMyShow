import React from 'react'

const Seats = () => {
  return (
    <div>
        <div className="border rounded border-dark mb-1">
            <h3>Select The Seats</h3>
            {/*Check box for showing Movies Seats Type */}
            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="5"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="5">
              <div className="m-0 p-0">Type A1</div>
              <div><input type='number'/></div>
            </label>
            

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="6"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="6">
              <div className="m-0 p-0">Type A2</div>
              <div><input type='number'/></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="6"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="6">
              <div className="m-0 p-0">Type A3</div>
              <div><input type='number'/></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="6"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="6">
              <div className="m-0 p-0">Type A4</div>
              <div><input type='number'/></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="6"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="6">
              <div className="m-0 p-0">Type D1</div>
              <div><input type='number'/></div>
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="6"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger .d-flex flex-row" for="6">
              <div className="m-0 p-0">Type D2</div>
              <div><input type='number'/></div>
            </label>
          </div>
    </div>
  )
}

export default Seats