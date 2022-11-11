import { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context'
import Card from '../ui/Card'
import classes from './MeetUpItem.module.css'

function MeetUpItem(props){
    const favouritesCtx = useContext(FavouritesContext);
    const isFavourites = favouritesCtx.itemIsFavourite(props.id);

    const toggleFavouriteStatusHandler = ()=>{
       if(isFavourites){
            favouritesCtx.removeFavourite(props.id);
       }else{
        favouritesCtx.addFavourite({
            id : props.id,
            title : props.title,
            description : props.description,
            image : props.image,
            address : props.address,
        })
       }
    }

    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt = {props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteStatusHandler}>{isFavourites ? 'Remove From Favorites' : 'To Favorites'}</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetUpItem;