import { transition, parentVariants } from "@/animation/transition";
import { Box, Container, Grid, Typography, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import TextMask from "../TextMask";
import { iconVariants } from "../Date/CardTanggal";
import CardGiftcardTwoToneIcon from "@mui/icons-material/CardGiftcardTwoTone";

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
 * Komponen profil bride
 *
 * @param {object} props
 * @returns React.ReactElement
 */
const ProfilMempelai = ({ info }) => {
  const { title, message, account1, account2, accountOwner, bg, picture } =
    info;

  const showOwner = `(${accountOwner})`;

  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "text.secondary" }}
    >
      <Grid
        component={motion.div}
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: true }}
        item
        md={6}
        xs={12}
        order={{ md: 1, xs: 2 }}
        sx={{
          py: 10,
          minHeight: { md: "100vh", xs: 300 },
          backgroundColor: bg,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <CardContent
            sx={{
              pt: 5,
              px: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component={motion.div}
              variants={iconVariants}
              sx={{
                border: 2,
                borderColor: "text.secondary",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <CardGiftcardTwoToneIcon
                sx={{ fontSize: 70, color: "text.secondary" }}
              />
            </Box>
            <Typography
              color="text.secondary"
              variant="h3"
              component="h2"
              sx={{
                mb: 4,
                textAlign: "center",
                fontSize: { md: "5em" },
              }}
            >
              {title.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Typography
              color="text.secondary"
              variant="h5"
              component="div"
              sx={{ mb: 4, textAlign: "center" }}
            >
              {message.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Typography
              color="text.secondary"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {account1.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>

            <Typography
              color="text.secondary"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {account2.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
            <Typography
              color="text.secondary"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {showOwner.split(" ").map((text, key) => (
                <TextMask key={key} variants={textVariants}>
                  {text}
                </TextMask>
              ))}
            </Typography>
          </CardContent>
        </Container>
      </Grid>

      <Grid
        item
        md={6}
        xs={12}
        order={{ md: 2, xs: 1 }}
        sx={{
          overflow: "hidden",
          height: {
            md: "100vh",
            xs: 450,
          },
        }}
      >
        <Box
          component={motion.img}
          variants={fotoVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true }}
          src={picture}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(ProfilMempelai);
