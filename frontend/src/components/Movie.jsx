import React from 'react'

const Movie = () => {
  return (
    <div>
        
          <div className="border rounded border-dark mb-1">
          <h3>Select a Movie</h3>
            {/*Check box for showing Movies name */}
            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="1"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="1">
              Suraj par mangal bhari
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="2"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="2">
              Tenet
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="2"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="2">
              The war with grandpa
            </label>

            <input
              type="checkbox"
              class="btn-check"
              name="options-outlined"
              id="2"
              autocomplete="off"
            />
            <label class="btn btn-outline-danger" for="2">
              The perosnal history of David Copperfield
            </label>
          </div>
          
    </div>
  )
}

export default Movie