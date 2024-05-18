import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh" flexDirection="row">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="units">Units</MenuItem>
            <MenuItem value="sales">Profit</MenuItem>
            <MenuItem value="sales">Loss</MenuItem>
          </Select>
        </FormControl>
        
          <OverviewChart view={view} marginLeft="50px"/>
        
      </Box>
    </Box>
  );
};

export default Overview;
