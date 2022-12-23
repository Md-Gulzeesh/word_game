import React, { useEffect } from "react";
import { Box, Grid, GridItem, Flex, VStack, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Playzone = () => {
  const timerRef = useRef();
  const [typedWord, setTypedWord] = useState("");
  const [newWord, setNewWord] = useState("");
  const [timer, setTimer] = useState(null);
  const [score, setScore] = useState(0);
  const currentPlayer = useSelector((store) => store.currentPlayer);
  useEffect(() => {
    if (currentPlayer.Difficulty_level === "High level") {
      setTimer(10);
      getNewWord();
    } else if (currentPlayer.Difficulty_level === "Medium level") {
      setTimer(20);
      getNewWord();
    } else {
      setTimer(30);
      getNewWord();
    }
  }, []);

  useEffect(() => {
    timerRef.current =
      timer > 0 &&
      setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

    return () => {
      clearInterval(timerRef.current);
      postPlayer();
    };
  }, [timer]);
  const handleSubmit = () => {
    if (newWord.length === 4) {
      if (typedWord === newWord) {
        setScore((prev) => prev + 4);
        getNewWord();
      } else {
        setScore((prev) => prev - 4);
        getNewWord();
      }
    } else {
      if (typedWord === newWord) {
        setScore((prev) => prev + 10);
        getNewWord();
      } else {
        setScore((prev) => prev - 10);
        getNewWord();
      }
    }
    setTypedWord("");
  };
  const getNewWord = async () => {
    try {
      let { data } = await axios.get(
        "https://mock-13-keyboard.onrender.com/playzone/word"
      );
      setNewWord(data);
    } catch (error) {
      console.log(error);
    }
  };
  const postPlayer = async () => {
    try {
      currentPlayer.Score = score;
      await axios.post(
        "https://mock-13-keyboard.onrender.com/playzone",
        currentPlayer
      );
      console.log("posted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box background={"#02bdd5"} pt={"5rem"} height={"100vh"}>
      <Flex gap={"5px"} justify={"flex-end"} pr={"4rem"}>
        <span
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "#262c2c",
            color: "#02bdd5",
          }}
        >
          Score: {score}
        </span>
        <span
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "#262c2c",
            color: "#02bdd5",
          }}
        >
          {timer}s
        </span>
      </Flex>
      <Flex
        fontSize={"22px"}
        w={"20%"}
        m={"10px auto"}
        justify={"space-between"}
      >
        <span>Word:</span>
        <span
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "#262c2c",
            color: "#02bdd5",
            marginLeft: "5px",
          }}
        >
          {newWord}
        </span>
      </Flex>
      <Flex fontSize={"22px"} w={"20%"} m={"auto"} justify={"space-between"}>
        <span>Typed Word:</span>
        <span
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            background: "#262c2c",
            color: "#02bdd5",
            marginLeft: "5px",
          }}
        >
          {typedWord}
        </span>
      </Flex>
      <Grid
        w={"80%"}
        m={"auto"}
        position={"absolute"}
        top={"50%"}
        left={"10%"}
        borderRadius={"10px"}
        background={"#262c2c"}
        p={"1rem"}
        templateColumns="repeat(12, 1fr)"
        gap={5}
      >
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          ~
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          1
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          2
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          3
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          4
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          5
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          6
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          7
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          8
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          9
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          0
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord("");
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          delete
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          tab
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          Q
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          W
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          E
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          R
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          T
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          Y
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          U
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          I
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          O
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          P
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          /
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          Caps
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          A
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          S
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          D
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          F
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          G
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          H
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          J
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          K
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          L
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={handleSubmit}
          cursor={"pointer"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          colSpan={2}
          textAlign={"center"}
        >
          Enter
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          Shift
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          Z
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          X
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          C
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          V
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          B
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          N
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          M
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          {"<"}
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={(e) => {
            setTypedWord((prev) => prev + e.target.textContent);
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          {">"}
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          colSpan={2}
        >
          Shift
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <BsGlobe2 style={{ margin: "0 0 0 30%", fontSize: "20px" }} />
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          control
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          option
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          alt
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          onClick={() => {
            setTypedWord((prev) => prev + " ");
          }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          colSpan={4}
        >
          Space
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          alt
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          textAlign={"center"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          option
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <FiArrowLeft style={{ margin: "0 0 0 30%", fontSize: "20px" }} />
        </GridItem>
        <GridItem
          color={"#02bdd5"}
          p={"10px"}
          borderRadius={"6px"}
          _hover={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          cursor={"pointer"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <FiArrowRight style={{ margin: "0 0 0 30%", fontSize: "20px" }} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Playzone;
