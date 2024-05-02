import { parentVariants, transition } from "@/animation/transition";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Komponent kata-kata pembuka
 *
 * @returns React.ReactElement
 */
const Words = () => {
  const bibleVerse =
    "He aquí, herencia de Jehová son los hijos; Cosa de estima el fruto del vientre.(Salmo 127:3)";
  const words =
    "El Señor nos ha dado  una herencia maravillosa, parte de esa herencia se llama Grace!!  Durante 15 años hemos visto la bondad de Dios reflejada en nuestra hija queremos agradecer al Señor y trasmitir nuestro amor a nuestra preciosa princesa para lo cual hemos planeado una fiesta por sus XV, en la cual nos gustaría que estuvieras presente y así disfrutar de un excelente tiempo entre amigos y familiares.";

  return (
    <Container
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: 20,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
          fontSize: {
            md: "3em",
            xs: "2em",
          },
        }}
      >
        {bibleVerse.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", mt: 5 }}
      >
        {words.split(" ").map((text, key) => (
          <TextMask key={key} variants={textVariants}>
            {text}
          </TextMask>
        ))}
      </Typography>
    </Container>
  );
};

export default Words;
