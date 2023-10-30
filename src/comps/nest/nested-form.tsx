import { Box, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import IForm from "../i-form";

export default function NestedForm() {
  const { control, watch } = useForm<IForm>({
    defaultValues: {
      name: "Default",
    },
  });

  return (
    <Box component="form" mt={1}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <TextField label="Name" {...field} />}
      />

      <Typography>{watch("name")}</Typography>
    </Box>
  );
}
