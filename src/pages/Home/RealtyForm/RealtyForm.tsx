import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import realtyFormSchema from "./validation/RealtyFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import useCustomTheme from "../../../hooks/useCustomTheme";
import RealtyService from "../services/RealtyService";

interface IRealtyForm {
  name: string;
  link: string;
}

const realtyFormInitialValues: IRealtyForm = {
  name: "",
  link: "",
};

function RealtyForm() {
  const { greenColor } = useCustomTheme();

  const { control, handleSubmit, watch, reset } = useForm<IRealtyForm>({
    resolver: yupResolver(realtyFormSchema),
    defaultValues: realtyFormInitialValues,
  });

  const onSubmit = async () => {
    try {
      await RealtyService.createRealty(watch("name"), watch("link"));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component={"form"}
      rowGap={2}
      columnGap={10}
      sx={{ backgroundColor: greenColor.main }}
      padding={"5rem"}
      borderRadius={"1rem"}
      height={"50vh"}
      width={"50vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid container xs={12} gap={"1rem"}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            Cadastro de Imobiliárias
          </Typography>
        </Grid>
        <Grid item xs={12} height={"5rem"}>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                id="realty-name"
                label="Nome"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
                color={"primary"}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} height={"5rem"}>
          <Controller
            name="link"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                id="realty-link"
                label="Link"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Button
            id="button-form-realty"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealtyForm;
