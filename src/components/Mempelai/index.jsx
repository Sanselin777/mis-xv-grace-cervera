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
  const { gifts } = useDB((db) => db.party);
  return (
    <Box>
      <ProfilMempelai info={gifts} />
    </Box>
  );
};

export default Mempelai;
