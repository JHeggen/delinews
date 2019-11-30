import React from 'react';
import Title from './title.js';
import MenuItems from './menuItems.js';

var tableStyle = {
  paddingTop: '9px'
};

var center = {
  textAlign: 'center'
}

function Menu() {
  return (
    <tr>
    <td style={tableStyle}>
    <table align="center">
    <tbody><tr>
    <td>

    <table>
      <tbody>
              <tr>
                  <td>
                      <table>
                          <tbody>
                              <tr>
                              <td style={center}>

                              <Title />
                              <MenuItems/>

                          
                          
                              </td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
        </tbody>
    </table>


    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
  );
}

export default Menu;
