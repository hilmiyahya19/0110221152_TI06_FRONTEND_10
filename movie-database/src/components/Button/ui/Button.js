import styled, {css} from "styled-components";
                    
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none ;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;

    //props variant
    background-color: ${(props) =>
        props.theme.colors[props.variant] || props.theme.colors["primary"]
    };

// props full                
${function (props){
    return (
        props.full &&
        css`
            display:block;
            width:100%;
            `
    );
}}
`;

export default Button;
