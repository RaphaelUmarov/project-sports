import { createContext } from 'react';

export const workouts = [{
    id:1,
    type: "Bike",
    distance : 30,
    duration : 20,
    day : '1',
    month : '1',
    year : '2023'
}, {
    id:2,
    type: "Ice Skating",
    distance : 30,
    duration : 80,
    day : '10',
    month : '3',
    year : '2024'
}];


const WorkoutsContext = createContext(workouts);
export {WorkoutsContext};
 const metric=createContext();
 export {metric};