import { Box, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import IForm from "../i-form";

export default function Form() {
  const { watch } = useFormContext<IForm>();

  return (
    <Box component="form" mt={1}>
      <Controller
        name="name"
        render={({ field }) => <TextField label="Name" {...field} />}
      />

      <Typography>{watch("name")}</Typography>
    </Box>
  );
}
