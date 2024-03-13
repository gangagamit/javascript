{
    function clock(){
    let hour = document.getElementById('hours');
    let minutes = document.getElementById('minute');
    let periods = document.getElementById('period');
    let seconds = document.getElementById('second');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >=12 ? "PM" : "AM";

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    periods.innerHTML = ampm;
};
    setInterval(clock,1000);
}