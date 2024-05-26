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
      <Box display="flex" flexDirection="column" rowGap={8}>
        <Box borderBottom={1} sx={{ cursor: "pointer" }} width="100%">
          <Typography variant="subtitle1" color="text.primary" component="text">
            라이트모드
          </Typography>
        </Box>
        <Box borderBottom={1} sx={{ cursor: "pointer" }} width="100%">
          <Typography variant="subtitle1" color="text.primary" component="text">
            나이트모드
          </Typography>
        </Box>
        <Box borderBottom={1} sx={{ cursor: "pointer" }} width="100%">
          <Typography variant="subtitle1" color="text.primary" component="text">
            시스템연동
          </Typography>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Button variant="outlined">등록</Button>
      </Box>
    </Box>
  );
}
