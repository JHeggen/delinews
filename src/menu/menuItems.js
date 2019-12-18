import React from 'react';

var menuMargin = {
    marginLeft: '5%'
};

var titleStyle = {
    textAlign: 'left',
    paddingTop: '20px'
}

var menuItemStyle = {
    textAlign: 'left',
    padding: '10px'
}

var alignLeft = {
    textAlign: 'left'
}

var redLineStyle = {
    background: '#d43031',
    width: '60px',
    height: '2px'
};

const items = [
    {
        dayOfWeek : "Mittwoch",
        mealOne : "Sloppy Joe mit Fries or Soup or Salad",
        mealTwo : "Curry Chicken mit Reis und Veggies",
        soupOne : "Spinach, Mushroom & Barley",
        soupTwo : "Tomato, Corn & Black Beans"
    }
];

const listItems = items.map((item, i) =>
/* fix styles on container .... */
<div>
        <tr>
            <td style={titleStyle}>
                <h3>{item.dayOfWeek}
                    <div style={redLineStyle}></div>
                </h3>
            </td>
        </tr>

        <tr>
            <td style={menuItemStyle}>
                <span>{item.mealOne}</span> <br/>
                <span>{item.mealTwo}</span>
            </td>
            <td style={alignLeft}>
                <span>{item.soupOne}</span> <br/>
                <span>{item.soupTwo}</span>
            </td>
        </tr>
</div>
);

function MenuItems() {
  return (
    <table width='800px' style={menuMargin}>
        <tbody>
        <tr>
            <td style={titleStyle}>
                <h3>Mittwoch
                    <div style={redLineStyle}></div>
                </h3>
            </td>
        </tr>

        <tr>
            <td style={menuItemStyle}>
                <span>Sloppy Joe mit Fries or Soup or Salad</span> <br/>
                <span>Curry Chicken mit Reis und Veggies</span>
            </td>
            <td style={alignLeft}>
                <span>Spinach, Mushroom & Barley</span> <br/>
                <span>Tomato, Corn & Black Beans</span>
            </td>
        </tr>
        {listItems}
        </tbody>

    </table>
  );
}

export default MenuItems;
