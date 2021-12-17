import React, { useState } from "react";
import Slider from "../Slider/Slider";

const High100 = () => {
    const [value, setValue] = useState(50);

    return (
        <div>
            <h2>Highest value is 100</h2>
            <Slider value={value} setValue={setValue} highest={100} />
        </div>
    );
};

export default High100;
