import { object, string } from "yup";

const CAMPO_OBRIGATORIO = "Campo obrigatório.";

const realtyFormSchema = object().shape({
  name: string().required(CAMPO_OBRIGATORIO),
  link: string().required(CAMPO_OBRIGATORIO),
});

export default realtyFormSchema;
