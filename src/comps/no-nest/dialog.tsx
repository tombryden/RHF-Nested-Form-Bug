import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Form from "./form";
import { FormProvider, useForm } from "react-hook-form";
import IForm from "../i-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TestDialog({ open, onClose }: Props) {
  const formMethods = useForm<IForm>({
    defaultValues: {
      name: "Default",
    },
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Non-Nested Form Dialog</DialogTitle>
      <DialogContent>
        <FormProvider {...formMethods}>
          <Form />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
