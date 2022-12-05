import React from 'react';
import AllPuppies from './AllPuppies';
import SinglePuppy from './SinglePuppy';


const puppies = [{
    id: 9979,
    name: "GoodBoy",
    breed: "",
    status: "bench",
    imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2022-12-03T23:47:05.574Z",
    updatedAt: "2022-12-03T23:47:05.574Z",
    teamId: 533,
    cohortId: 283
},
{
    id: 9908,
    name: "Tony",
    breed: "Australian Shepherd",
    status: "bench",
    imageUrl: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80",
    createdAt: "2022-12-03T17:01:58.123Z",
    updatedAt: "2022-12-03T17:01:58.123Z",
    teamId: null,
    cohortId: 283
},
{
    id: 9909,
    name: "Bestestest Boy",
    breed: "The Best",
    status: "bench",
    imageUrl: "https://u-mercari-images.mercdn.net/photos/m56818105009_1.jpg?width=1024&height=1024&format=pjpg&auto=webp&fit=crop&_=1640487845",
    createdAt: "2022-12-03T17:04:54.083Z",
    updatedAt: "2022-12-03T17:04:54.083Z",
    teamId: null,
    cohortId: 283
},
{
    id: 9910,
    name: "Ike",
    breed: "Hound",
    status: "bench",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-basset_hound_yawning.jpg",
    createdAt: "2022-12-03T17:52:48.621Z",
    updatedAt: "2022-12-03T17:52:48.621Z",
    teamId: null,
    cohortId: 283
},
{
    id: 9806,
    name: "Lamont",
    breed: "Great Dane/Lab",
    status: "bench",
    imageUrl: "https://animalso.com/wp-content/uploads/2019/02/Great-Dane-Lab-mix-2.jpg", "createdAt": "2022-12-02T20:37:10.507Z", "updatedAt": "2022-12-02T20:37:10.507Z",
    teamId: null,
    cohortId: 283
}];

const Main = () => {
    return (
        <div>
            <h1>Welcome to the Puppy Bowl</h1>
            <AllPuppies puppies={puppies} />
            <SinglePuppy pup={puppies[1]} />
            {/*<AllPuppies puppy={puppies[1]}/>
            <AllPuppies puppy={puppies[2]}/>
            <AllPuppies puppy={puppies[3]}/> */}
        </div>
    );
};

export default Main;