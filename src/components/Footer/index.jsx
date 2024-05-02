import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import {
  Box,
  Button,
  CardActions,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import KeluargaBesar from "./KeluargaBesar";
import { iconVariants } from "../Date/CardTanggal";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";

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
 * Text variant
 */
const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  show: {
    scaleX: 1,
    originX: 0.5,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Footer komponen
 */
const Footer = () => {
  const { man, woman } = useDB((db) => db.party.bride);
  const doaRestu =
    "Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.";
  const berbahagia = "Kami Yang Berbahagia";

  const { confirmation, father, mother } = useDB((db) => db.party);
  const { title, warning, thanks, greetings, urlForm } = confirmation;

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      py={18}
    >
      <Container>
        <Grid
          container
          spacing={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", fontFamily: "Arizonia" }}
            >
              {title.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>

          <Grid item xs={12} mb={5}>
            <Divider
              sx={{ my: 5 }}
              component={motion.div}
              variants={dividerVariants}
            >
              <FavoriteTwoToneIcon sx={{ fontSize: 50 }} />
            </Divider>
            <CardActions sx={{ p: 5 }}>
              <Button
                component={motion.a}
                variants={iconVariants}
                disableElevation
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                startIcon={<PendingActionsTwoToneIcon />}
                href={urlForm}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: 10 }}
              >
                Confirmar Asistencia
              </Button>
            </CardActions>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {warning.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", mt: "2rem" }}>
              {thanks.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
            <Typography variant="h4" sx={{ textAlign: "center", mt: "2rem" }}>
              {greetings.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <KeluargaBesar
              parent={father.parent}
              title="Mempelai Pria"
              firstName={father.firstName}
              lastName={father.lastName}
            />
          </Grid>

          {/* Mempelai woman */}
          <Grid item md={6} xs={12} sx={{ mt: { md: 0, xs: 5 } }}>
            <KeluargaBesar
              parent={mother.parent}
              title="Mempelai Wanita"
              firstName={mother.firstName}
              lastName={mother.lastName}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
