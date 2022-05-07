import React from "react";

import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { options } from "./grpc/client";

interface Props {
  handleSizeChange: (event: Event, value: number | number[]) => void;
}

function OptionsContainer(props: Props) {
  // var option: Options.AsObject = {
  //   hasLowercase: false,
  //   hasNumber: false,
  //   hasSymbols: false,
  //   hasUppercase: false,
  // };
  const handleHasLowercaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    options.setHasLowercase(event.target.checked);
  };
  const handleHasNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    options.setHasNumber(event.target.checked);
  };
  const handleHasSymbolsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    options.setHasSymbols(event.target.checked);
  };
  const handleHasUppercaseChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    options.setHasUppercase(event.target.checked);
  };

  return (
    <div>
      <h3>Password size</h3>
      <Slider
        valueLabelDisplay="auto"
        max={50}
        min={4}
        defaultValue={4}
        onChange={props.handleSizeChange}
      />
      <h3>Select characters options</h3>
      <FormGroup onChange={() => console.log(options.toObject())}>
        <FormControlLabel
          control={<Switch onChange={handleHasLowercaseChange} />}
          label="Has lowercase"
        />
        <FormControlLabel
          control={<Switch onChange={handleHasNumberChange} />}
          label="Has number"
        />
        <FormControlLabel
          control={<Switch onChange={handleHasSymbolsChange} />}
          label="Has symbols"
        />
        <FormControlLabel
          control={<Switch onChange={handleHasUppercaseChange} />}
          label="Has uppercase"
        />
      </FormGroup>
    </div>
  );
}

export default OptionsContainer;
