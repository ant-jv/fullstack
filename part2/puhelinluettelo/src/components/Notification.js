const Notification = ({ text, type }) => {
    if (text === null) {
        return null
    } else {
        if (type == "success") {
            return (
                <div className="notification success">
                    {text}
                </div>
            )
        } else if (type == "error") {
            return (
                <div className="notification error">
                    {text}
                </div>
            )
        }
    }
}

export default Notification