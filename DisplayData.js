import React from 'react';
import '../DisplayData.css';

const DisplayData = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <div class="person">
                    <div class="info">
                        <p>Name: {item.name.first} {item.name.last}</p>
                        <p>{item.email}</p>
                        <p>{item.cell}</p>
                        <p>{item.gender}</p>
                    </div>
                    <div class="pic">
                        <img src={item.picture.large} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayData
