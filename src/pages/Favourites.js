import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavouritesContext from "../store/favourites-context";

function Favourites(){

    const favoriteCtx = useContext(FavouritesContext);

    let content;
    if(favoriteCtx.totalFavourites === 0){
        content = <p>You got no favorites yes. Start adding some.</p>
    }else{
        content =  <MeetUpList meetups = {favoriteCtx.favourites} />
    }

    return (<section>
            <h1>My Favorites Meetups</h1>
           {content}
        </section>);
}


export default Favourites;