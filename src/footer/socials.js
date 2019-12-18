import React from 'react';

var tableStyle = {
    minWidth: "100%",
    borderCollapse: "collapse"
};

var allPadding = {
    padding: '9px'
};

var leftRightPadding = {
    paddingleft: '9px',
    paddingRight: '9px'
};

function Socials() {
  return (

<table style={tableStyle}>
<tbody>
<tr>
<td style={allPadding}>
<table style={tableStyle}>
<tbody>
<tr>
<td style={leftRightPadding}>
<table style={tableStyle}>
<tbody>
<tr>
<td style={allPadding}>
<table align="center" style={tableStyle}>
<tbody>
<tr>
<td align="center">

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
</tbody>
</table>

  );
}

export default Socials;