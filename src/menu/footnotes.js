import React from 'react';

var footnotesStyle = {
    marginLeft: '20%',
    marginTop: '50px',
    marginBottom: '50px'
};

function Footnotes() {
  return (
      
    <table style={footnotesStyle}>
        <tr>
            <td>
                OPEN THIS SUNDAY 10AM - 2PM 
            </td>
        </tr>
        <tr>
            <td>
                20 Years Proudly Serving You with Delicious Home Style Cooking
            </td>
        </tr>
    </table>

  );
}

export default Footnotes;