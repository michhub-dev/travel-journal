

export default function Data(props) {
    
    return (
        <>
          <section className="main-container">
            <img src={props.imageUrl} />
            <div className="content" >
                <img src={props.logo} alt="map" />
                <span className="location">{props.location}</span>
                <a href={props.googleMapsUrl} className="a"/>
                <h2></h2>
            </div>
          </section>
        </>
    )
}