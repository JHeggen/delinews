import React from 'react';

var bannerStyle = {
    background: 'url(http://fraserparkrestaurant.com/img/fpr_banner.png)',
    backgroundSize : 'cover'
};

var imageStyle = {
    height: '200px'
};

function Banner() {
  return (
    <tr>
    <td style={bannerStyle}>
    <table>
    <tbody>
    <tr>
    <td>

    <table>
        <tbody>
                <tr>
                    <td>
                        <table>
                            <tbody><tr>
                                <td style={imageStyle}>
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

export default Banner;
