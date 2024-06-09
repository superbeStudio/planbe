import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Settings({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "#ececec" }}
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <h2 className="text-base"> 내 정보</h2>
      </Box>
      <Box width="100%" overflow="auto" display="flex" flex={1}>
        {children}
      </Box>
    </Box>
  );
}
