import React from "react";
import getAddedValue from "../../utilities/getAddedValue";
import "./Slider.css";
import leftIcon from "../../images/left-arrow.svg";
import rightIcon from "../../images/right-arrow.svg";

const Slider = ({ lowest, highest, value, setValue }) => {
    const divide = highest / value;
    const handleInput = (e) => {
        const value = e.target.value;
        setValue(value);
    };
    const handleIncrease = () => {
        if (value < highest) {
            setValue(value + 1);
        } else if (value >= highest) {
            return;
        }
    };
    console.log(value);
    const handleDecrease = () => {
        if (value > 0) {
            setValue(value - 1);
        } else if (value <= 0) {
            return;
        }
    };

    const addedValue = getAddedValue(highest, divide);

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
                    <div className="value left">
                        <img
                            src={leftIcon}
                            alt="Left Icon"
                            onClick={handleDecrease}
                        />
                    </div>
                    <input
                        type="range"
                        min={lowest}
                        max={highest}
                        value={value}
                        steps="1"
                        onChange={handleInput}
                    />
                    <div className="value right">
                        <img
                            src={rightIcon}
                            alt="Right Icon"
                            onClick={handleIncrease}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
