import classes from './Card.module.css'

function Card(props) {
return <div className={classes.card}>
    {props.children}
</div>
}

export default Card

//every component receives the children prop by default. Holding the content between the card tags