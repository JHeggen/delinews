import React from 'react';

var width = {
    width: "60%",
    margin: "0 auto"
};

var innerStyle = {
    minWidth: "100%",
    paddingBottom: "18px"
};

var tableStyle = {
    minWidth: "100%",
    borderTop: "2px solid #ddd"
};

function HorizontalRule() {
  return (

    <table style={width}>
        <tbody>
            <tr>
                <td style={innerStyle}>
                    <table style={tableStyle}>
                        <tbody><tr>
                            <td>
                                <span></span>
                            </td>
                        </tr>
                    </tbody></table>

                </td>
            </tr>
        </tbody>
    </table>

  );
}

export default HorizontalRule;