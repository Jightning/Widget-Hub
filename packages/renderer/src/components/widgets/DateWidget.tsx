import { createSignal, createEffect } from "solid-js";

const DateWidget = () => {
    const [time, setTime] = createSignal(new Date());

    createEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000); // Update every second
    
      return () => clearInterval(intervalId); // Cleanup on effect disposal
    });

    return (
      <div class="rounded-lg w-72 h-16 p-4 widget-body mb-4">
          <div class="date w-fit">{() => {
            let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
            return months[time().getMonth()] + " " + time().getDate() + " " + time().getFullYear()
          }}</div>
       </div>
      
    )
  }
  
  export default () => DateWidget