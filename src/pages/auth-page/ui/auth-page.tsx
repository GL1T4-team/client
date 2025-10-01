import {
    Container,
    AuthForm,
    Label,
    Input,
    Title, SubmitButton,
    InputWrapper
} from "@/pages/auth-page/ui/styles.ts";
import { Formik } from "formik";
import { validationSchema } from "@/pages/auth-page/model/validation.ts";

const AuthPage = ({}) => {
    return (
        <Container>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <AuthForm>
                        <Title>Авторизация</Title>

                        <InputWrapper>
                            <Label>Почта</Label>
                            <Input name="email" type="email" placeholder="ivanovivan@yandex.ru" />
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Пароль</Label>
                            <Input name="password" type="password" placeholder="введите свой пароль" />
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
