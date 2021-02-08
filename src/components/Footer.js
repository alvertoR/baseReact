import { render } from '@testing-library/react';
import React from 'react';

import './styles/Footer.css';

function Footer(props){
    return(
        <div>
            {props.down && (
                <h3 className="down-normal">Desarrollado por @alvertoayalaR</h3>
            )}
            
            {!props.down && (
                <h3 className="down">Desarrollado por @alvertoayalaR</h3>
            )}
        </div>
    )
}

export default Footer;