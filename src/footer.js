import React from 'react';
import Socials from './footer/socials.js';
import HorizontalRule from './footer/hr.js';
import FinePrint from './footer/fineprint.js';

var footerBackground = {
    backgroundColor: '#fafafa',
    paddingBottom: '9px',
    paddingTop: '9px'
};

function Footer() {
  return (

    <tr>
    <td align="center" style={footerBackground}>                            
    <table>
    <tbody>
    <tr>
    <td>
        <Socials />
        <HorizontalRule />
        <FinePrint />
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>

  );
}

export default Footer;