import useDB from "@/hooks/useDB";
import { Box, Stack } from "@mui/material";
import React from "react";
import ProfilMempelai from "./ProfilMempelai";

/**
 * Komponent bride
 *
 * @returns React.ReactElement
 */
const Mempelai = () => {
  const { woman, man } = useDB((db) => db.party.bride);
  return (
    <Box>
      <ProfilMempelai bride={man} />
      <ProfilMempelai bride={woman} />
    </Box>
  );
};

export default Mempelai;
