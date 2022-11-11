import {useEffect, useState} from "react"
import MeetUpList from "../components/meetups/MeetUpList";

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is first meetup',
//         image : 'https://media.gettyimages.com/id/1207663571/photo/empty-pavement-with-modern-architecture.jpg?s=612x612&w=gi&k=20&c=HOXes9ocKgFP2JGi8XGHz2SRs3Rrvmyu2Q6UQ8e5bI4=',
//         address : 'Mumbai, India',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'

//     },
//     {
//         id: 'm2',
//         title: 'This is second meetup',
//         image : 'https://media.gettyimages.com/id/1207663571/photo/empty-pavement-with-modern-architecture.jpg?s=612x612&w=gi&k=20&c=HOXes9ocKgFP2JGi8XGHz2SRs3Rrvmyu2Q6UQ8e5bI4=',
//         address : 'Sydney, Australia',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
//     },
//     {
//         id: 'm3',
//         title: 'This is third meetup',
//         image : 'https://media.gettyimages.com/id/1207663571/photo/empty-pavement-with-modern-architecture.jpg?s=612x612&w=gi&k=20&c=HOXes9ocKgFP2JGi8XGHz2SRs3Rrvmyu2Q6UQ8e5bI4=',
//         address : 'Tokyo, Japan',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
//     }

// ]

function AllMeetups(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetUps, setLoadedMeetUps] = useState([]);

    useEffect(()=>{

        setIsLoading(true);
        fetch(
            'https://react-getting-started-ce9f8-default-rtdb.firebaseio.com/meetups.json'
         ).then((response) => {
            return response.json();
        }).then((data)=>{
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id : key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            console.log(meetups)
            setIsLoading(false);
            setLoadedMeetUps(meetups); 
        });
    }, []);

    

    if(isLoading){
        return (
            <section>Loading...</section>
        );
    }

    return (
        <section>
            <h1>All Meetups List</h1>
            <MeetUpList meetups={loadedMeetUps} />
        </section>
    )
}

export default AllMeetups;