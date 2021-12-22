import * as React from "react";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DateTimePicker } from "@mui/lab";

export const DateTime = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        {...props}
        minutesStep={60}
        inputFormat="dd.MM.yyyy HH:mm"
        mask="__.__.____ __:__"
        views={["day", "hours"]}
        ampm={false}
        renderInput={(props) => (
          <TextField
            sx={{
              "& label.Mui-focused": {
                color: "#CCCCCC",
              },

              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: `1px solid #CCCCCC`,
                },
              },
            }}
            fullWidth
            {...props}
          />
        )}
        label="дата/время"
      />
    </LocalizationProvider>
  );
};
