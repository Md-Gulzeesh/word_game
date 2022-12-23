import React, { useEffect } from 'react';
import {Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import { getPlayers } from '../Redux/action';

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashBoard = useSelector((store) => store.dashBoard);
  useEffect(() => {
    dispatch(getPlayers())
  }, [])
  
  return (
    <TableContainer w={"50%"} m={"5rem auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Score</Th>
            <Th>Level</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dashBoard.map((elem,index) => (
            <Tr key={index}>
              <Td>{elem.Name}</Td>
              <Td>{elem.Score}</Td>
              <Td>{elem.Difficulty_level}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Dashboard