import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PatternSlider() {
  return (
    <FormControl>
      <RadioGroup
        // Make a row containing two radio buttons
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        // Set a default value for vibration pattern
        defaultValue="Staccato"
        name="row-radio-buttons-group"

        // define the two vibration patterns
      >
        <FormControlLabel value="Staccato" control={<Radio />} label="Staccato (default)" />
        <FormControlLabel value="Swing" control={<Radio />} label="Swing" />
      </RadioGroup>
    </FormControl>
  );
}