import React from 'react';

var alignCenter = {
  marginLeft: '220px'
}

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

var borderCollapse = {
    borderCollapse: "collapse"
}

var socialPaddingStyle = {
    paddingRight: "10px",
    paddingBottom: "9px" 
}

var socialInnerPaddingStyle = {
    padding: "5px 10px"
}

const socials = [ 
  {
      socialName: 'FPR on Facebook',
      socialURL: 'https://www.facebook.com/fraserparkrestaurant/',
      imgSrc: 'https://ci5.googleusercontent.com/proxy/KLWDyxU_2JT5nOGTE6_NSp-hT37kpCU8B8HLih6GyBnhKJEvCDQsIeq4uLfJ7CQWsSCfpfcbCXVh74IrAuFYiXcU4R2sPN1CInMYwE7DpPIiYM9dGmBbl7FrtmeFZ6I=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png'
  },
  {
    socialName: 'FPR on Instagram',
    socialURL: 'https://www.instagram.com/fraserpark.restaurant/',
    imgSrc: 'https://ci3.googleusercontent.com/proxy/Kxmv_VOWHxRbx9ha8NMR9nONZZkGxv2vyrUOlpQhi5_ieDBEPqRomk1Twd6kvqAcUM1ccGIxTgC8Rh1TvQcdKf-Ql5F87HSw4DKkcKIdL9Gz-WFmaHDWBrvzjPHt2CVn=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png'
  },
  {
    socialName: 'FPR email',
    socialURL: 'mailto:restaurantfraserpark@gmail.com',
    imgSrc: 'https://ci4.googleusercontent.com/proxy/CN2TGY41iQ8-JlJusCJqa9ZgFzIbwDfrZalQQwICUriegku1Wn699FFjD8P16f7TcJfMjs2079iiaNHlTMEB_ycokWszqlIE6C2ARHGgBzltagK-BZ2ZBFztsd76V5Eq0fLlG4R8=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-forwardtofriend-48.png'
},
  {
    socialName: 'fraserparkrestaurant.com',
    socialURL: 'http://www.fraserparkrestaurant.com/',
    imgSrc: 'https://ci5.googleusercontent.com/proxy/FR4I0VM10pxcUwbQ63iIF6cAOqyzEbM1yC4ru84XQ1cT1RbvvmtJzUt4RdH1WUB452ecisGFRwh877ppJp5BhUmQhUWIABs5JUY80JFlBF08huivKdmS6R-dPg=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png'
  },
  {
    socialName: 'FPR on Google',
    socialURL: 'https://www.google.com/maps/place/Fraser+Park+Restaurant/@49.1939038,-122.9998742,17z/data=!3m1!4b1!4m5!3m4!1s0x548676041e9619f7:0x39f3b68fe8fb837a!8m2!3d49.1939038!4d-122.9976855',
    imgSrc: 'https://www.androidpolice.com/wp-content/uploads/2016/09/nexus2cee_product_logo_maps_round_launcher_color_48.png'
  }
];


const listSocials = socials.map((social, i) =>

<div style={alignCenter}>
  <table align="left" style={borderCollapse}>
    <tbody><tr>
        <td style={socialPaddingStyle}>
            <table style={borderCollapse}>
                <tbody><tr>
                    <td style={socialInnerPaddingStyle}>
                        <table style={borderCollapse}>
                            <tbody><tr>

                                    <td>
                                        <a href={social.socialURL} target="'_blank'" rel="noopener noreferrer">
                                          <img alt={social.socialName} src={social.imgSrc} height="24" width="24" /></a>
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
  </div>
);

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

    {listSocials}

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