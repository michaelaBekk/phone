export default function Header() {
    return(
        <div className="flexbox justify-content-between">
            <p className="bolder" style={{marginLeft:'20px'}}>Phone</p>
            <span className="material-icons bolder" style={{marginRight:'20px', marginTop:'12px', cursor:'pointer'}}>search</span>
            {/* <input type="search" name="search" placeholder="search" /> */}
        </div>
    )
}