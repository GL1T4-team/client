import {
    Container,
    AuthForm,
    Label,
    Input,
    Title,
    SubmitButton,
    InputWrapper,
} from "@/pages/auth-page/ui/styles.ts";
import { ErrorMessage, Formik } from "formik";
import { validationSchema } from "@/pages/auth-page/model/validation.ts";
import { useAuthStore } from "@/features/auth/model/store";

const AuthPage = ({}) => {
    const { login } = useAuthStore();
    return (
        <Container>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        await login(values.email, values.password);
                    } catch (err) {
                        console.error("Ошибка входа", err);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <AuthForm>
                        <Title>Авторизация</Title>

                        <InputWrapper>
                            <Label>Почта</Label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="ivanovivan@yandex.ru"
                            />
                            <ErrorMessage name="email" component="div" />
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Пароль</Label>
                            <Input
                                name="password"
                                type="password"
                                placeholder="введите свой пароль"
                            />
                            <ErrorMessage name="password" component="div" />
                        </InputWrapper>

                        <SubmitButton type={"submit"} disabled={isSubmitting}>
                            Войти
                        </SubmitButton>
                    </AuthForm>
                )}
            </Formik>
        </Container>
    );
};

export default AuthPage;
