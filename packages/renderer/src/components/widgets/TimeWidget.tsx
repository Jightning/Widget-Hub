const TimeWidget = () => {
  return (
    <div className="rounded-lg w-72 h-24 p-4 widget-body">
        <img className="sun-image t-0 w-4 h-4 float-right" src="images/sun.svg" alt="light mode icon" />
        <div className="date ">
            9:35
            <span className="am-pm">
                AM
            </span>
        </div>
        
    </div>
  )
}

export default TimeWidget