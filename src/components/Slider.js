import React from 'react';
import {SlideContainer} from "../styles/common";

const Slider = ({value, onChange, min, max, getLabel}) => {

  return (
    <div className="col-md-10 col-sm-6">
      <SlideContainer>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          title="Numbers only"
          className="slider"
          onChange={onChange}
        />
        <div>
          <div className="float-left">
            <small>
              {getLabel(min)}
            </small>
          </div>
          <div className="float-right">
            <small>
              {getLabel(max)}
            </small>
          </div>
        </div>
      </SlideContainer>
    </div>
  );
};

export default Slider;