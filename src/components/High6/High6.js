import React, { useState } from "react";
import Slider from "../Slider/Slider";

const High6 = () => {
    const [value, setValue] = useState(3);

    return (
        <div>
            <h2>Highest value is 6</h2>
            <Slider value={value} setValue={setValue} />
        </div>
    );
};

export default High6;
