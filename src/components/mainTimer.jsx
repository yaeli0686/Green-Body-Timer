import React from 'react';

const MainTimer = ({ time }) => {
    return (
        <div className="digits">
            {time}s
        </div>
    );
}

export default MainTimer;