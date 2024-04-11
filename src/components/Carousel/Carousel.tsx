import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useFetchBuscarPlantas } from "../../hook";
//import Plant from "../../api/api-plants";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//console.log(Plant());
// const images = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { images } = useFetchBuscarPlantas();
  const maxSteps = images.length;

  console.log(images);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ overflow: "hidden" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  overflow: "hidden",
                  height: "86vh",
                  width: "auto",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "black",
          },
          "& .MuiPaper-root": {
            backgroundColor: "lightgrey",
          },
          backgroundColor: "transparent",
          width: "auto",

          justifyContent: "center",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            sx={{
              backgroundColor: "transparent", // Fundo transparente
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)", // Fundo levemente escurecido ao passar o mouse
              },
              color: "black", // Cor do texto do botão
              // Outros estilos que você desejar adicionar
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{
              backgroundColor: "transparent", // Fundo transparente
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)", // Fundo levemente escurecido ao passar o mouse
              },
              color: "black", // Cor do texto do botão
              // Outros estilos que você desejar adicionar
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
