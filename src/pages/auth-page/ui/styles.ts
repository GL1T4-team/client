import styled from "styled-components";
import { Field, Form } from "formik";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        180deg,
        rgba(109, 168, 255, 1) 0%,
        rgba(109, 168, 255, 0.65) 100%
    );
`;

export const AuthForm = styled(Form)`
    width: fit-content;
    background: #fefefe;
    height: fit-content;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    padding: 40px;

    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: #0a0909;
    font-size: 48px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    font-size: 28px;
`;

export const Input = styled(Field)`
    width: 640px;
    height: 50px;
    background: #f4f7fc;
    padding: 10px;
    font-size: 24px;

    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.15);

    border: none;
    outline: none;
`;

export const SubmitButton = styled.button`
    width: 170px;
    height: 65px;
    background-color: #0a0909;
    border-radius: 20px;
    color: #fefefe;
    font-size: 30px;
    font-weight: 600;
    border: none;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
        background-color: rgba(10, 9, 9, 0.9);
    }
`;
