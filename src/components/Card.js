export default function Card(props){
    return (
        <div className={"card"}>
            <span>{props.stats.rating}</span>
        </div>
    )
}