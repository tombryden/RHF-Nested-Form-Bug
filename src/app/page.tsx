"use client";

import NestedDialog from "@/comps/nest/nested-dialog";
import TestDialog from "@/comps/no-nest/dialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function DialogPage() {
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Non-Nested Form Dialog
      </Button>

      <Button variant="contained" onClick={() => setNestedOpen(true)}>
        Open Nested Form Dialog
      </Button>

      <TestDialog open={open} onClose={() => setOpen(false)} />
      <NestedDialog open={nestedOpen} onClose={() => setNestedOpen(false)} />
    </Box>
  );
}
