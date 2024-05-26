"use client";

import { Box, Button, Typography } from "@mui/material";

export default function Category() {
  return (
    <Box
      width="100%"
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding={8}
    >
      <Box borderBottom={1} sx={{ cursor: "pointer" }} width="100%">
        <Typography variant="subtitle1" color="text.primary" component="text">
          화폐입력
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Button variant="outlined">등록</Button>
      </Box>
    </Box>
  );
}
