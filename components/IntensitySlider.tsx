import Slider from "@mui/material/Slider";



export default function IntensitySlider() {
    return (
        <Slider
        defaultValue={2}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={1}
        max={3} 
        color='primary'/>
      );
    
  }

