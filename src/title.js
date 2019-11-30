import React from 'react';

var redLineStyle = {
    marginLeft: '46%',
    background: '#d43031',
    width: '60px',
    height: '2px'
};

var italic = {
    fontStyle: 'italic'
};

function Title() {
  return (
      
    <div>
        <h2>
          THE DELI NEWS
            <div style={redLineStyle}></div>
        </h2>

        <div>
            <span style={italic}>
              Gaststaette und Metzgerei
            </span><br/>
            <span>
              “May be hard to find but difficult to forget”
            </span><br/>
            <span>
              Seit 1997
            </span>
        </div>
    </div>

  );
}

export default Title;