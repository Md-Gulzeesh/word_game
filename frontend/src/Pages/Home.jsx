import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storePlayer } from '../Redux/action';

const Home = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [playerData, setPlayerData] = useState({
    Name:"",
    Difficulty_level:""
  })
  const handleChange = (e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setPlayerData({
      ...playerData,
      [name]:value
    })
  }
  const handleSubmit = ()=>{
    if(playerData.Name !== "" && playerData.Difficulty_level !== ""){
      console.log(playerData);
      toast({
        title: "Data submitted",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch(storePlayer(playerData));
      setPlayerData({
        Name: "",
        Difficulty_level: "",
      });
      navigate("/playzone")
    }else{
      toast({
        title: "Please fill all fields",
        status: "error",
        duration: 2000,
         isClosable: true,
         position: "top",
        });
        console.log(playerData);
    }
  }
  return (
    <FormControl w={{ base: "80%", md: "50%", lg: "30%" }} m={"8rem auto"}>
      <VStack>
        <Input
          name="Name"
          value={playerData.Name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
        />
        <Select name='Difficulty_level' onChange={handleChange} placeholder="Select difficulty level">
          <option value="High level">High level</option>
          <option value="Medium level">Medium level</option>
          <option value="Low level">Low level</option>
        </Select>
      </VStack>
      <Flex mt={"10px"} justify={"flex-end"}>
        <Button colorScheme={"twitter"} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
}

export default Home