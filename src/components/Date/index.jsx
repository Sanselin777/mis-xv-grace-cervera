import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { color, motion } from "framer-motion";
import TextMask from "../TextMask";
import CardTanggal from "./CardTanggal";

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

const fotoVariants = {
  hidden: {
    scale: 1.3,
  },
  show: {
    scale: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponent date
 *
 * @returns Reacr.ReactElement
 */
const Date = () => {
  const textHeader = "Acompañanos a celebrar este día tan especial";
  const { reception, galery } = useDB((db) => db.party);

  return (
    <Container sx={{ py: 15, backgroundColor: "text.primary" }}>
      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          component={motion.div}
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true }}
        >
          <Typography
            color="text.secondary"
            variant="h6"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {textHeader.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Typography
            color="text.secondary"
            variant="h2"
            sx={{ textAlign: "center", my: 3 }}
          >
            {reception.date.split(" ").map((text, key) => (
              <TextMask key={key} variants={textVariants}>
                {text}
              </TextMask>
            ))}
          </Typography>

          <Divider sx={{ borderColor: "text.secondary" }} />
        </Grid>

        <Grid item md={6} xs={12}>
          <CardTanggal
            title="Mis 15 años"
            date={reception.date}
            hour={reception.hour}
            location={reception.location}
            address={reception.address}
            link={reception.maps.link}
            secondaryMessage={reception.secondaryMessage}
            notKidsMessage={reception.notKidsMessage}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            component={motion.img}
            variants={fotoVariants}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: true }}
            src={galery.date}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Date;
