import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import realtyFormSchema from "./validation/RealtyFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRealtyForm {
  nome: string;
  link: string;
}

const realtyFormInitialValues: IRealtyForm = {
  nome: "",
  link: "",
};

function RealtyForm() {
  const { control, handleSubmit } = useForm<IRealtyForm>({
    resolver: yupResolver(realtyFormSchema),
    defaultValues: realtyFormInitialValues,
  });

  const onSubmit = () => {
    console.log("Enviei");
  };

  return (
    <Paper>
      <Grid
        container
        width={"400px"}
        height={"500px"}
        padding={"10px"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography fontWeight={"bold"}>Cadastro de Imobiliárias</Typography>
        </Grid>
        <Controller
          name="nome"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Grid item xs={12} height={60}>
              <TextField
                id="realty-name"
                label="Nome"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
              />
            </Grid>
          )}
        />
        <Controller
          name="link"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Grid item xs={12} height={60}>
              <TextField
                id="realty-link"
                label="Link"
                variant="outlined"
                value={value}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
              />
            </Grid>
          )}
        />
        <Grid item xs={12} justifyContent={"flex-end"}>
          <Button
            id="button-form-realty"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RealtyForm;
