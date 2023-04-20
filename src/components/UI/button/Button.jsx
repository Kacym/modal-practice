import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    const {title, onClick} = props;
    return (
        <Muibutton onClick={onClick}>
            {title}
        </Muibutton>
        )
    }
    
const Muibutton = styled('button')`
    background-color: ${(p) => p.bgColor};
    width: 200px;
    height: 30px;
    color: ${(p) => p.color}
`;


export default Button