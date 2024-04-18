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
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue="Staccato"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Staccato" control={<Radio />} label="Staccato (default)" />
        <FormControlLabel value="Swing" control={<Radio />} label="Swing" />
      </RadioGroup>
    </FormControl>
  );
}