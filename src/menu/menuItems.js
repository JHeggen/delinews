import React from 'react';

var menuMargin = {
    marginLeft: '5%'
};

var titleStyle = {
    textAlign: 'left',
    paddingTop: '20px'
}

var container = {
    width: '800px'
}

var menuItemStyle = {
    textAlign: 'left',
    padding: '10px'
}

var alignLeft = {
    width: '420px',
    textAlign: 'right'
}

var redLineStyle = {
    background: '#d43031',
    width: '60px',
    height: '2px'
};

const items = [
    {
        dayOfWeek : "Montag",
        mealOne : "Sloppy Joe mit Fries or Soup or Salad",
        mealTwo : "Curry Chicken mit Reis und Veggies",
        soupOne : "Spinach, Mushroom & Barley",
        soupTwo : "Tomato, Corn & Black Beans"
    },
    {
        dayOfWeek : "Dienstag",
        mealOne : "Sloppy Joe mit Fries or Soup or Salad",
        mealTwo : "Curry Chicken mit Reis und Veggies",
        soupOne : "Spinach, Mushroom & Barley",
        soupTwo : "Tomato, Corn & Black Beans"
    },
    {
        dayOfWeek : "Mittwoch",
        mealOne : "Sloppy Joe mit Fries or Soup or Salad",
        mealTwo : "Curry Chicken mit Reis und Veggies",
        soupOne : "Spinach, Mushroom & Barley",
        soupTwo : "Tomato, Corn & Black Beans"
    },
    {
        dayOfWeek : "Donnerstag",
        mealOne : "Sloppy Joe mit Fries or Soup or Salad",
        mealTwo : "Curry Chicken mit Reis und Veggies",
        soupOne : "Spinach, Mushroom & Barley",
        soupTwo : "Tomato, Corn & Black Beans"
    },
    {
        dayOfWeek : "Freitag",
        mealOne : "Sloppy Joe mit Fries or Soup or Salad",
        mealTwo : "Curry Chicken mit Reis und Veggies",
        soupOne : "Spinach, Mushroom & Barley",
        soupTwo : "Tomato, Corn & Black Beans"
    }
];

const listItems = items.map((item, i) =>
    <div style={container}>
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
        {listItems}

        </tbody>

    </table>
  );
}

export default MenuItems;
