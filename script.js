// API SIMPLE

const divHarry = document.getElementById("divHarry")
const divClima = document.getElementById("divClima")
const formClima = document.getElementById("formClima")
const API_KEY = "f9e65ee57960b9731044c2f3d2129615";

function consultarPersonaje(){fetch("http://hp-api.herokuapp.com/api/characters/students")
.then(response => response.json())
.then(({name, species, house, actor}) => {
    
    divHarry.innerHTML = `  
    <div>
        <h2> Harry Potter Fan</h2>
        <p>Nombre:  ${name}</p>
        <p>Especies:  ${species}</p>
        <p>Casa: ${house}</p>
        <p>Actor:  ${actor}</p>
    </div>`
})
}
consultarPersonaje()

setInterval(() => {
    consultarPersonaje()
},30000)


formClima.addEventListener(`submit`, (e) =>{
    e.preventDefault()
    const datForm = new FormData(e.target)

})

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get("ciudad")},${datForm.get("provincia")},${datForm.get("pais")}&appid=${API_KEY}`)
        .then(response => response.json ())
        .then(data => {
            let { lat, lon, name, country } = data
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(({main, weather}) => {
                let {feels_like :sensacionTermica, humidity: humedad, pressure: presion, temp} = main
                let desClima = weather[0].description
                console.log(sensacionTermica, humedad, presion, temp)
                console.log(desClima)
                divClima.innerHTML = ` <div>
                    <h2> Clima en ${name}</h2>
                    <p>Provincia: ${state}/p>
                    <p>Pais: ${country}</p>
                    <p>Temperatura: ${temp} °C </p>
                    <p>SensacionTermica: ${sensacionTermica}</p>
                    <p>Humdad: ${humedad} % </p>
                    <p>Presion: ${presion} hPa</p>
                    <p>Descripsion: ${desClima}</p>
                    
                </div>`
            })
        })
