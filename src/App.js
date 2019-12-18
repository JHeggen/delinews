import React from 'react';
import Banner from './banner.js';
import Menu from './menu.js';
import Footer from './footer.js';

const tableStyle = function(x) { 
  return {
    borderCollapse: 'collapse',
    width: x
  };
};

var outerTableStyle = tableStyle('75%');
var innerTableStyle = tableStyle('100%');

function App() {
  return (
    <div className="App">
    <table style={outerTableStyle}>
    <tbody>
    <tr>
    <td>
    <table style={innerTableStyle}>
    <tbody>

      <Banner/>
      <Menu/>
      <Footer/>


    </tbody>
    </table>  
    </td>
    </tr>
    </tbody>
    </table>
    </div>
  );
}

export default App;
