

export default function Data(props) {
    
    return (
        <>
          <section className="main-container">
            <img src={props.imageUrl} className="content-img"/>
            <div className="content" >
                <img src={props.logo} alt="map" className="map"/>
                <span className="location">{props.location}</span>
                <a href={props.googleMapsUrl} className="a">View on Google maps</a>
                <h3 className="title">{props.title}</h3>
                <p className="bold">{props.startDate}-{props.endDate}</p>
                <p className="description">{props.description}</p>
                <hr />
            </div>
          </section>
        </>
    )
}