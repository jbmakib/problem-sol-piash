import React from "react";
import "./Slider.css";

const Slider = ({ lowest, highest, value, setValue }) => {
    const handleInput = (e) => {
        const value = e.target.value;
        setValue(value);
    };
    return (
        <div className="App">
            <div className="range">
                <div className="sliderValue">
                    <span style={{ left: `${(value / highest) * 100 + "%"}` }}>
                        {value}
                    </span>
                </div>
                <div className="field">
                    <div className="value left">{lowest || 0}</div>
                    <input
                        type="range"
                        min={lowest}
                        max={highest}
                        defaultValue={value}
                        steps="1"
                        onInput={handleInput}
                    />
                    <div className="value right">{highest}</div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
