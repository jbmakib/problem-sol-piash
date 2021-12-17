import React, { useState } from "react";
import Slider from "../Slider/Slider";

const High200 = () => {
    const [value, setValue] = useState(100);

    return (
        <div>
            <h2>Highest value is 200</h2>
            <Slider value={value} setValue={setValue} highest={200} />
        </div>
    );
};

export default High200;
