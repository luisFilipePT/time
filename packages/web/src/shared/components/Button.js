import styled from 'styled-components'

const VARIANT_MAPPER = {
    GREEN: {
        backgroundColor: '#a3be8c',
        boxShadowStart: '#93ab7e',
        boxShadowEnd: '#b3d19a',
        color: '#3b4252',
    },
    RED: {
        backgroundColor: '#bf616a',
        boxShadowStart: '#ac575f',
        boxShadowEnd: '#d26b75',
        color: '#d8dee9',
    },
    BLUE: {
        backgroundColor: '#5e81ac',
        boxShadowStart: '#3d5470',
        boxShadowEnd: '#7faee8',
        color: '#d8dee9',
    },
}

const StyledButton = styled.button`
    //Reset default styles
    text-decoration: none;
    border: none;
    font-size: inherit;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${({ variant }) => VARIANT_MAPPER[variant].backgroundColor};
    box-shadow: 4px 4px 7px ${({ variant }) =>
        VARIANT_MAPPER[variant].boxShadowStart};, -4px -4px 7px ${({
    variant,
}) => VARIANT_MAPPER[variant].boxShadowEnd};
    padding: 8px;
    margin: 10px;
    color: ${({ variant }) => VARIANT_MAPPER[variant].color};
    font-weight: bold;
    height: 40px;
    min-width: 100px;
    cursor: pointer;

    :hover :focus {
        background: #89a174;
    }

    :hover {
        transform: scale(1.01);
    }

    :active {
        transform: scale(0.99);
    }
`

const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
