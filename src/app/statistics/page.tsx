import { Box } from "@mui/material";
import Result from "./(result)/result";

export default function Statistics({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Box>
      <Result />
    </Box>
  );
}
