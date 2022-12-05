import React from 'react';

const AllPuppies = (props) => {
    console.log(props);
    return (
        <div>
            <h1>All the puppies</h1>

            {props.puppies ? (
                props.puppies.map((pup) => {
                    return (
                        <div key={pup.id}>
                        <h2>This puppy is: {pup.name}</h2>
                        </div>
                    );
                })
            )   :   (
                        <h2>no puppies here</h2>
            )}
        </div>
    );
};

export default AllPuppies;