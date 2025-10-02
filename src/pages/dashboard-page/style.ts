import styled from "styled-components";

export const Container = styled.div`	
	height: 90%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;  
  	grid-template-rows: auto auto;  
  	gap: 10px; 
	padding: 2rem 2rem 2rem 0;
`

export const Widget = styled.div`
	width: 100%;
	height: 100%;
	background-color: #F4F7FC;
	border-radius: 20px;
	box-shadow: inset 0 4px 4px rgba(0,0,0,0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	font-weight: 500;
	color: #718096;
	user-select: none;
`