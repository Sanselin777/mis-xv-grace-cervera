import { transition } from "@/animation/transition";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponent keluarga besar untuk footer
 *
 * @param {obect} props
 * @returns
 */
const KeluargaBesar = ({ title, firstName, lastName, parent }) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="p"
          sx={{
            textAlign: "center",
            fontFamily: "Arizonia",
            color: "background.paper",
          }}
        >
          {parent.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontFamily: "Arizonia",
          }}
        >
          {fullName.split(" ").map((text, key) => (
            <TextMask key={key} variants={textVariants}>
              {text}
            </TextMask>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

/**
 * Prop types
 */
KeluargaBesar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default KeluargaBesar;
