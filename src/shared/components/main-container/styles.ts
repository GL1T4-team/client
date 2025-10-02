import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    bottom: 50px;
    right: 50px;

    display: grid;
    grid-template-columns: 1fr 5fr;

    border-radius: 45px;
    color: #0a0909;
    background-color: #fefefe;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`;
