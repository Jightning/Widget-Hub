import { createSignal, createEffect } from "solid-js";

const TimeWidget = () => {
  const [time, setTime] = createSignal(new Date());
  
  //const displayHours = time().getHours();
  //const displayMinutes = time().getMinutes()

  createEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second
  
    return () => clearInterval(intervalId); // Cleanup on effect disposal
  });
  
  return (
    <div class="rounded-lg w-72 h-24 p-4 widget-body">
        <img class="sun-image t-0 w-4 h-4 float-right" src="images/sun.svg" alt="light mode icon" />
        <div class="time">
          {() => {
            let hours = time().getHours();
            let minutes = time().getMinutes();
            let adjustedHours = hours >= 12 ? hours - 12 : hours;
            let finalHours = adjustedHours < 10 ? "0" + adjustedHours : adjustedHours
            let finalMinutes = minutes < 10 ? "0" + minutes : minutes;
            return finalHours + ":" + finalMinutes}
          }
            <span class="am-pm">
                {time().getHours() >= 12 ? "PM" : "AM"}
            </span>
        </div>
        
    </div>
  )
}

export default TimeWidget