import React from "react";
import "./Slider.css";

const Slider = ({ lowest, highest, value, setValue }) => {
    const divide = highest / value;
    const handleInput = (e) => {
        const value = e.target.value;
        setValue(value);
    };

    let addedValue = 0;

    if (highest <= 10) {
        if (divide > 4) {
            addedValue = 8;
        }
    } else {
        if (divide === Infinity || divide >= 6.6666666666666667) {
            addedValue = 9;
        } else if (divide >= 4) {
            addedValue = 8;
        } else if (divide >= 3) {
            addedValue = 7;
        } else if (divide > 2.5) {
            addedValue = 6.5;
        } else if (divide > 2) {
            addedValue = 6;
        } else if (divide === 2) {
            addedValue = 5.5;
        } else if (divide >= 1.7857142857142858) {
            addedValue = 5.35;
        } else if (divide >= 1.6666666666666667) {
            addedValue = 5;
        } else if (divide >= 1.4492753623188406) {
            addedValue = 4;
        } else if (divide >= 1.25) {
            addedValue = 3.15;
        } else if (divide >= 1.11) {
            addedValue = 2.7;
        } else if (divide >= 1) {
            addedValue = 2;
        }
    }
    return (
        <div className="App">
            <div className="range">
                <div className="sliderValue">
                    <span
                        style={{
                            left: `${
                                (value / highest) * 100 + addedValue + "%"
                            }`,
                        }}
                    >
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
