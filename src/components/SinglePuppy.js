const AllPuppies = ({pup: {name, breed, status, imageUrl } }) => {
    return (
<>
    <h2>Name: {name}</h2>
    <p>Breed: {breed}</p>
    <p>Status: {status}</p> 
    <img src={imageUrl} />
    </>

    );
};

export default AllPuppies;