import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import realtyFormSchema from "./validation/RealtyFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import useStyles from "./style";

interface IRealtyForm {
  nome: string;
  link: string;
}

const realtyFormInitialValues: IRealtyForm = {
  nome: "",
  link: "",
};

function RealtyForm() {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<IRealtyForm>({
    resolver: yupResolver(realtyFormSchema),
    defaultValues: realtyFormInitialValues,
  });

  const onSubmit = () => {
    console.log("Enviei");
  };

  return (
    <Grid container xs={12} alignItems={"center"} justifyContent={"center"}>
      <Box
        className={classes.paper}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={2}
      >
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            Cadastro de Imobiliárias
          </Typography>
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
                fullWidth
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
                fullWidth
              />
            </Grid>
          )}
        />
        <Grid item xs={12} justifyContent={"flex-end"}>
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
  );
}

export default RealtyForm;
