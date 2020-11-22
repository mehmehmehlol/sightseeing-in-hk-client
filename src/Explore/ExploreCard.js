import React from 'react';

const ExploreCard = ({place}) => {
    const {name, category, description, address, phone_number, website } = place
    return(
        <div>
            <h2>{name}</h2>
            <p>What's so exiting about this place! <br/>
                {description}
            </p>
            <div>
                More Information:
                Website: <a src={website}></a>
                Address: {address}
                Phone Number: {phone_number}
                
            </div>
        </div>
    )
};

export default ExploreCard;