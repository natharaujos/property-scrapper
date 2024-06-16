import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import realtyFormSchema from "./validation/RealtyFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import RealtyService from "../services/RealtyService";

interface IRealtyForm {
  name: string;
  link: string;
}

interface IRealtyFormPros {
  getRealtiesData(): Promise<void>;
}

const realtyFormInitialValues: IRealtyForm = {
  name: "",
  link: "",
};

function RealtyForm({ getRealtiesData }: IRealtyFormPros) {
  const { control, handleSubmit, watch, reset } = useForm<IRealtyForm>({
    resolver: yupResolver(realtyFormSchema),
    defaultValues: realtyFormInitialValues,
  });

  const onSubmit = async () => {
    try {
      await RealtyService.createRealty(watch("name"), watch("link"));
      await getRealtiesData();
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
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item container xs={12} gap={"0.5rem"} width={"100%"}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            Cadastro de Imobiliárias
          </Typography>
        </Grid>
        <Box
          width={"100%"}
          height={"5rem"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Grid item xs={4}>
            <Controller
              name="name"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
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
          <Grid item xs={4}>
            <Controller
              name="link"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
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
          <Grid
            item
            xs={3.5}
            height={"3.5rem"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Button
              id="button-form-realty"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              fullWidth
            >
              Enviar
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default RealtyForm;
