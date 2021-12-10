import "./restro.css";
import {Restroinput} from "./Restroinput"
function Restrodetails({ list, sorting, adderway,setAdderway, setList }) {
  console.log("status", sorting);
  if (adderway === false) {
    return (
      <>
        {list.map((e) => (
          <div className="structure shadow mb-5 bg-body rounded">
            {/* inside structure */}
            <div className="structureinside ">
              {/* title heading  logo grid */}
              <div className="gridder">
                {/* 1st for image */}
                <img className="dish" src={e.img} alt="dish pic" />
                {/* 2nd grid */}
                <div>
                  <h3 className="h3">{e.rest_name}</h3>
                  <p className="m-1 gray">{e.rest_menu}</p>
                  {sorting ? (
                    <p className="m-1 gray">Costs ₹{e.rest_price *2} for double</p>
                  ) : (
                    <p className="m-1 gray">Costs ₹{e.rest_price} for single</p>
                  )}

                  {/* insider 2nd grid */}
                  <div className="insgrid">
                    <p className="m-1">Min ₹{e.rest_minprice}</p>
                    <p className="text-center m-1">•</p>
                    <p className="m-1">Up to {e.rest_time} min</p>
                  </div>
                  {/* checking is sorting method is true or not, if true need to render the line of cost for two person */}
      
                  {e.pay_method === "all" ? (
                    <p className="m-1">
                      Accepts {e.pay_method} modes of payment
                    </p>
                  ) : (
                    <p className="m-1">Accepts only {e.pay_method} payment</p>
                  )}
                </div>
                {/* 3rd grid */}
                <div>
                  <div className="rating">{e.rest_rat} </div>
                  <div className="fontsmall gray">{e.rest_votes} votes</div>
                  <div className="fontsmall gray">{e.rest_review} reviews</div>
                </div>
              </div>
              {/* last div for payment */}
              <div className="container-fluid paymentgrid">
                <input
                  className="form-control ml-4"
                  placeholder="Enter here"
                  type="text"
                />
                <button className="btn btn-success">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    //----------open form to add new restaurants-----------//
    return (
      <>
      <Restroinput list={list} setList={setList} adderway={adderway} setAdderway={setAdderway} />
      </>
    );
  }
}

export { Restrodetails };
