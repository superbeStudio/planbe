import { Box, Button, Card, CardContent, Fab } from "@mui/material";
import Chart from "./_chart";
import GoalItem from "./_list";

export default function Goal() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding={2}
      gap={2}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        gap={2}
        width="100%"
        flex={1}
      >
        <Card sx={{ display: "flex", flex: 1 }}>
          <CardContent
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Chart />
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", flex: 1 }}>
          <CardContent
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Chart />
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" width="100%" justifyContent="flex-end">
        <Button>목표 생성</Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        width="100%"
        flex={1}
        flexDirection="column"
      >
        <GoalItem />
        <GoalItem />
        <GoalItem />
        <GoalItem />
        <GoalItem />
        <GoalItem />
      </Box>
    </Box>
  );
}
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];
