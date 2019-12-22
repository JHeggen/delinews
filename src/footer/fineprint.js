import React from 'react';

var tdStyle = {
    color: '#656565',
    fontSize: '12px',
    textAlign: 'center'
};

function FinePrint() {
  return (

<table>
    <tbody>
        <tr>
            <td>
                <table>
                    <tbody>
                        <tr>
                        <td style={tdStyle}>

                            <em>Copyright © 2019 FPR, All rights reserved.</em>
   <br/>
    You are receiving this email because you have subscribed to our weekly newsletter. To unsubscribe, please reply with 'unsubscribe'.
    <br/>
    <br/>
    <strong>Hours of operation:</strong>
    <br/>

    <div>
        <div>
            <span>Monday - Friday: 6:30 AM - 2:00 PM</span><br/>
            <span>Saturday: 7:00 AM - 2:00 PM</span><br/>
            <span>Sunday: 10:00 AM - 2:00 PM</span><br/>
            <span>Closed Stat Holidays</span>
        </div>
        <br/>
    </div>

    <br/>
    <br/>
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

export default FinePrint;