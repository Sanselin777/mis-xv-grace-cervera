import useDB from "@/hooks/useDB";
import { Box, Container } from "@mui/material";

/**
 *
 * @returns React.ReactElement
 */
const Location = () => {
  const { maps } = useDB((db) => db.party.reception);
  return (
    <Box
      sx={{
        py: 15,
        backgroundColor: "background.default",
      }}
    >
      <Container>
        <Box
          component="iframe"
          title="Google Maps"
          owfullscreen=""
          loading="lazy"
          rrerpolicy="no-referrer-when-downgrade"
          src={maps.iframeSrc}
          sx={{
            width: "100%",
            height: 450,
            border: 0,
            borderColor: "divider",
            borderRadius: 1,
          }}
        />
      </Container>
    </Box>
  );
};

export default Location;
