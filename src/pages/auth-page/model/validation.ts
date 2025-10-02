import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string().email("Неверная почта").required("Обязательное поле"),
    password: Yup.string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле"),
});
