import React from "react";
function Searchbar() {
    return (
        <div className="upheader">
            <div className="upheadercontainer">
                <div className="search-box">
                    <input type="text" placeholder="Search.."></input>
                </div>
                <div className="upheader-link" >

                    <a className="support" href="/#">Support</a>
                    <a className="stores" href="/#">Stores</a>
                </div>
            </div>

        </div>
    );
}
export default Searchbar;