import { useState } from "react";
import { Restrodetails } from "./Restrodetails";
import { Data } from "./Data";
import { Buttons } from "./Buttons";

function Restrodata() {
  const [list, setList] = useState(Data);
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [paymentflag, setPaymentFlag] = useState(false);
  const [paymethod, setPayMethod] = useState("null");
  const [sorting, setSorting] = useState(false);
  const [sortingway, setSortingway] = useState();
  const [adderway,setAdderway] = useState(false);
  return (
    <>
      <Buttons
        count={count}
        paymentflag={paymentflag}
        paymethod={paymethod}
        setSorting={setSorting}
        setSortingway={setSortingway}
        setFlag={setFlag}
        setCount={setCount}
        setPaymentFlag={setPaymentFlag}
        setPayMethod={setPayMethod}
        setAdderway={setAdderway}
      />
      {/* checking if sorting needed or not */}
      <div className="showingrid">
        <Restrodetails
        adderway={adderway}
        setAdderway={setAdderway}
          sorting={sorting}
          setList={setList}
          list={
            sorting === false
              ? list.filter((e) => {
                  if (flag === true && paymentflag === false) {
                    if (e.rest_rat >= count) {
                      return e;
                    }
                  } else if (flag === true && paymentflag === true) {
                    if (e.rest_rat >= count && e.pay_method === paymethod) {
                      return e;
                    }
                  } else if (flag === false && paymentflag === true) {
                    if (e.pay_method === paymethod) {
                      return e;
                    }
                  } else {
                    return e;
                  }
                  // if sorting needed then check whether its needed in ascending order or descending
                })
              : sortingway === "asc"
              ? list
                  .filter((e) => {
                    if (flag === true && paymentflag === false) {
                      if (e.rest_rat >= count) {
                        return e;
                      }
                    } else if (flag === true && paymentflag === true) {
                      if (e.rest_rat >= count && e.pay_method === paymethod) {
                        return e;
                      }
                    } else if (flag === false && paymentflag === true) {
                      if (e.pay_method === paymethod) {
                        return e;
                      }
                    } else {
                      return e;
                    }
                  })
                  .sort(function (a, b) {
                    return a.rest_price*2 - b.rest_price*2;
                  }) //if needed in descending
              : list
                  .filter((e) => {
                    if (flag === true && paymentflag === false) {
                      if (e.rest_rat >= count) {
                        return e;
                      }
                    } else if (flag === true && paymentflag === true) {
                      if (e.rest_rat >= count && e.pay_method === paymethod) {
                        return e;
                      }
                    } else if (flag === false && paymentflag === true) {
                      if (e.pay_method === paymethod) {
                        return e;
                      }
                    } else {
                      return e;
                    }
                  })
                  .sort(function (a, b) {
                    return b.rest_price*2 - a.rest_price*2;
                  })
          }
        />
      </div>
    </>
  );
}

export { Restrodata };
