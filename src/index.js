//Importamos el view que creamos anteriormente en el index.js del template indicando la ruta de dicho js 
import config from './app-config'
import './global.css'
import 'regenerator-runtime/runtime'
import MapeaCard from './components/mapea-card'
import ViewHome from './routes/home'
import ViewMap from './routes/map'

console.info(`${config.name}@${config.version}`)

//Adjunta el evento cordova deviceready para acceder a las funciones del dispositivo
document.addEventListener('deviceready', onDeviceReady, false)
function onDeviceReady() {
  config.isApp = true
  M.proxy(false)
  //Aquí puede usar las funciones del dispositivo
}

//Define el elemento (route, components)
window.customElements.define('mapea-card', MapeaCard)
window.customElements.define('view-home', ViewHome)
window.customElements.define('view-map', ViewMap)
