import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 25px;
`;

export const Button = styled.button`
cursor: pointer;

font-size: 20px;
font-weight: bold;
text-transform: capitalize;

border: none;
border-radius: 4px;
background-color: lightblue;
box-shadow: 0px 1px 4px rgba(55, 19, 187, 0.25);

width: 150px;
padding-top: 5px;
padding-bottom: 5px;

&:not(:last-child){
margin-right: 15px;
}
`;