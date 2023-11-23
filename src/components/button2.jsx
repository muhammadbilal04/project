import React from 'react';

const Btn2 = ({ children, style }) => {
    return (
      <button style={style} className='rounded-full bg-gradient-to-r from-[#6017a7] to-[#9d72cb]  font-semibold text-white py-4 w-full mx-auto '>
        {children}
      </button>
    );
  };
export default Btn2;


