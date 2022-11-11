import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup(){

    const navigate = useNavigate();

    const meetUpDataHandler=(meetUpData)=>{
        fetch('https://react-getting-started-ce9f8-default-rtdb.firebaseio.com/meetups.json',
        {
            method : 'POST',
            body : JSON.stringify(meetUpData),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(()=> {
            navigate('/')
        });
    }

    return (
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm addMeetupData={meetUpDataHandler} />
        </section>
    );
}

export default NewMeetup;