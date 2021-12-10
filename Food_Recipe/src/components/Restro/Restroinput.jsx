import { nanoid } from "nanoid";
import { useState } from "react";
import { Data } from "./Data";
function Restroinput({ list, setList, adderway, setAdderway }) {
  const [form, setForm] = useState({
    image: "",
    rest_name: "",
    rest_menu: "",
    rest_price: Number(""),
    cost_fortwo: "double",
    rest_time: Number(""),
    pay_method: Number(""),
    rest_minprice: Number(""),
    rest_rat: Number(""),
    rest_votes: Number(""),
    rest_review: Number(""),
    id: nanoid(4),
  });
  const handl = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sub = (e) => {
    e.preventDefault();
    let ar = Data;
    ar.push(form);
    setList(ar);
    console.log(ar);
    setAdderway(!adderway);
  };
  return (
    <>
      <div className="container p-5">
        <form onSubmit={sub} class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Restaurant Name</label>
            <input
              onChange={handl}
              name="rest_name"
              type="text" 
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">Restaurant Image</label>
            <input
              onChange={handl}
              name="image"
              type="text"
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-12">
            <label class="form-label">Menu</label>
            <input
              onChange={handl}
              name="rest_menu"
              type="text"
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">Price for one</label>
            <input
              onChange={handl}
              name="rest_price"
              type="number"
              class="form-control"
              id="inputCity"
              required="true"
            />
          </div>
          <div class="col-md-4">
            <label class="form-label">Payment option</label>
            <select
              onChange={handl}
              name="pay_method"
              class="form-select"
              required="true"
            >
              <option selected>Choose...</option>
              <option>all</option>
              <option>online</option>
              <option>cash</option>
            </select>
          </div>
          <div class="col-md-2">
            <label class="form-label">Time</label>
            <input
              onChange={handl}
              name="rest_time"
              type="number"
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">Minimum Price</label>
            <input
              onChange={handl}
              name="rest_minprice"
              type="number"
              class="form-control"
              required="true"
            />
            <label class="form-label">Review</label>
            <input
              onChange={handl}
              name="rest_review"
              type="number"
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-md-4">
            <label class="form-label">Rating</label>
            <input
              onChange={handl}
              name="rest_rat"
              type="number"
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-md-2">
            <label class="form-label">Votes</label>
            <input
              onChange={handl}
              name="rest_votes"
              type="number"
              class="form-control"
              required="true"
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                required="true"
              />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export { Restroinput };
