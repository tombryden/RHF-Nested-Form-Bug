import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import NestedForm from "./nested-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NestedDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Nested Form Dialog</DialogTitle>
      <DialogContent>
        <NestedForm />
      </DialogContent>
    </Dialog>
  );
}
