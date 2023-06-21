import React from 'react';



export const Practicerender: React.FC = () => {
    const isLoggedIn = true;
    let content;
  
    if (isLoggedIn) {
      content = <p>aaaaa</p>;
    } else {
      content = <p>bbbbb</p>;
    }
  
    return (
      <div>
        {content}
      </div>
    );
  };

