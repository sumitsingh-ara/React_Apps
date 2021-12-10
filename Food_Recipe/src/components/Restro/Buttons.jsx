
function Buttons({count,paymentflag,paymethod,setSorting,setSortingway,setFlag,setCount,setPaymentFlag,setPayMethod,setAdderway}) {
    return(
        <>
         <div className="allbuttonslist">
        <button onClick={()=>{
            setAdderway(false)
        }} className="btn btn-success">Home</button>
        <button className="btn btn-primary" onClick={()=>{
            setFlag(true)
            setCount(4)
        }} >4star</button>
         <button className="btn btn-primary" onClick={()=>{
            setFlag(true)
            setCount(3)
        }} >3star</button>
         <button className="btn btn-primary" onClick={()=>{
            setFlag(true)
            setCount(2)
        }} >2star</button>
         <button className="btn btn-primary" onClick={()=>{
            setFlag(true)
            setCount(1)
        }} >1star</button>
         <button className="btn btn-primary" onClick={()=>{
            setFlag(true)
            setCount(0)
        }} >All Restro</button>
          <button className="btn btn-primary" onClick={()=>{
            setPaymentFlag(true)
            setPayMethod("cash")
            setCount(count)
        }} >Cash</button>
          <button className="btn btn-primary" onClick={()=>{
            setPaymentFlag(true)
            setPayMethod("online")
            setCount(count)
        }} >UPI</button>
          <button className="btn btn-primary" onClick={()=>{
            setPaymentFlag(true)
            setPayMethod("all")
            setCount(count)
        }} >Cash/Card/UPI</button>
        <button className="btn btn-danger" onClick={()=>{
            setPaymentFlag(false)
            setPayMethod("null")
            setCount(0)
            setSorting(false)
        }} >Discard filters</button>
        <button className="btn btn-primary" onClick={()=>{
            setPaymentFlag(paymentflag)
            setPayMethod(paymethod)
            setCount(count)
            setSorting(true)
            setSortingway("asc")
        }} >L 2 H -rates 2 persons</button>
        <button className="btn btn-primary" onClick={()=>{
            setPaymentFlag(paymentflag)
            setPayMethod(paymethod)
            setCount(count)
            setSorting(true)
            setSortingway("desc")
        }} >H 2 L -rates 2 persons</button>
        {/* modalller */}
        <button onClick={()=>{
            setAdderway(true)
        }} className="btn btn-success">Add Restro</button>
       
        </div>
        </>
    )
}
export {Buttons}