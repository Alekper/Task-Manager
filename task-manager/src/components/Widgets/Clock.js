import React from 'react';
import AnalogClock from 'analog-clock-react';

function ClockApp() {
    let options = {
        width: "220px",
        border: true,
        borderColor: "#172c52",
        baseColor: "#152135",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
        }
    };
  return (
    <div>
          <AnalogClock {...options} />

    </div>
  );
}

export default ClockApp