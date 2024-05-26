import { Box } from "@mui/material";
import Result from "./result/page";
import Consume from "./consume/page";
import { StatisticsTabType } from "./layout";

export default function Statistics({
  params,
}: {
  params: { tab: StatisticsTabType };
}) {
  if (params.tab === "result") return <Result />;
  if (params.tab === "consume") return <Consume />;
  return <Box>empty</Box>;
}
