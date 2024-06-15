// src/App.js
import React from "react";
import D2dStudentList from "./components/D2dStudentList";
import axios from "axios";
import { Box } from "@mui/material";

const data = [
  {
    programme: "Engineering",
    applicationNo: "APP123",
    seatNo: 1,
    candidateName: "John Doe",
    fathersName: "Robert Doe",
    marksSecured: 95,
    rank: 1,
    userId: "USR123",
    createdAt: "2023-05-01T00:00:00Z",
  },
  {
    programme: "Science",
    applicationNo: "APP124",
    seatNo: 2,
    candidateName: "Jane Smith",
    fathersName: "Michael Smith",
    marksSecured: 92,
    rank: 2,
    userId: "USR124",
    createdAt: "2023-05-02T00:00:00Z",
  },
  {
    programme: "Engineering and Technology",
    applicationNo: "241190900009",
    seatNo: 11808,
    candidateName: "Keval Kotadia",
    fathersName: "Brijeshkumar",
    marksSecured: 138,
    rank: 454,
    userId: "kevalkotadia",
    createdAt: "2024-06-13T06:25:46.776Z ",
  },
  // Add more static data as needed
];

function App() {
  axios.defaults.baseURL = "http://localhost:6969";
  return (
    <Box className="">
      <D2dStudentList />
    </Box>
  );
}

export default App;
