const cardImage = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    padding: "0",
    margin: "0"
}

const cardTitle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black'
}

const cardDescription = {
    fontSize: '16px',
    color: 'darkgray'
}

const buttonStyle = {
    backgroundImage: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
    border: "none",
    borderRadius: "6px",
    color: "white",
    borderWidth: "1px",
    borderColor: "black",
}

const cardContainer = {
    padding: "6px",
    backgroundColor: "white",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "450px",
    height: "auto",
}

const showMessage = () => {
    alert("Well done you clicked the button!");
}

const Card = ({title, description, profilePic} : {title: string, description: string, profilePic: string}) => {
    return (
        <div style={cardContainer}>
            <img style={cardImage} src={profilePic} alt={title} />
            <h2 style={cardTitle}>{title}</h2>
            <p style={cardDescription}>{description}</p>
            <button style={buttonStyle}onClick={showMessage}>Click Me!</button>
        </div>
    )
}

export default Card