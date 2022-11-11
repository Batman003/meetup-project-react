import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props){

    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
   const descriptionRef =  useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const imageUrl = imageRef.current.value;
        const address = addressRef.current.value;
        const description = descriptionRef.current.value;

        const meetUpData = {
            title : title,
            url : imageUrl,
            address : address,
            description : description
        }

       props.addMeetupData(meetUpData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" ref= {titleRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" ref= {imageRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" ref= {addressRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows='5' ref= {descriptionRef} required></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}


export default NewMeetupForm;