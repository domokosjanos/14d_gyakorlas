import { useState } from "react";

function Rick() {
    const [rick, setRick] = useState("https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15443821/RAM_S2_Ep205.0.0.1505932128.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100");

    return (
        <div>
            <img className="w-80" src={rick} alt="Rick" />
        </div>
    );
}

export default Rick;
