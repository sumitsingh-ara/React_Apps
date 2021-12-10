import './foodtemplate.css';
function Foodtemplate({color,date,logo,giftby,payment,mobileos}) {
    let styles ={
        background:color,
    }
    return(
        <>
        <div style={styles} className="background">
            {/* 1st box */}
            <div className="datelogo">
                <div>{date}</div>
                <img class="image" src={logo} alt="logo" />
            </div>
            {/* 2nd box */}
            <div className ="casestudy">Case  Study</div>
            {/* 3rd box */}
            <div className ="giftby"><h1>{giftby}</h1></div>
            <div className ="giftby"><h1>{payment}</h1></div>
            <div className ="mobileos">{mobileos}</div>
        </div>
        </>
    )
}

export {Foodtemplate};