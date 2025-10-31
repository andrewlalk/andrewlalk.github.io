import React from 'react';
import styled from 'styled-components';
import { Row } from '../Styles/StyledComponents';

const FooterContainer = styled(Row)`
    align-items: center;
    color: silver;
    height: 30px;
    padding: 0 16px;
    font-size: 12px;
    gap: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);

    a {
        color: teal;
    }
`;



const Footer: React.FC = () => {
    return (
        <FooterContainer>

        </FooterContainer>
    );
};

export default Footer;