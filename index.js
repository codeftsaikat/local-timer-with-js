const clock = document.querySelector('#clock');

setInterval(() => {
        let date = new Date();
        const setTime = date.toLocaleTimeString();
        const setDate = date.toLocaleDateString();
        clock.innerHTML = `${setTime} <br/> ${setDate}`
}, 1000)