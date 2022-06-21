import html from './home.html'
import './home.css'
import config from '@/app-config'

export default class ViewHome extends HTMLElement {
  //Creado para que llame al mapa nada mas abrirse la aplicacion. Si no se llama al mapa en el costructor, no cargará, se mostrará en blanco y en la consola dará un error
  constructor() {
    super()
    this.sizeObserver = new ResizeObserver(() => {
      if (this.olMap) {
        this.olMap.updateSize()
      }
    })
  }

  //Llamada al html y las funciones
  connectedCallback() {
    this.innerHTML = html
    const controller = this.querySelector('ion-alert-controller')
    const button = this.querySelector('#btnAlert')
    button.controller = controller
    button.addEventListener('click', this.handleButtonClick, false)
    this.sizeObserver.observe(this)
  }

  //Al pulsar el botón se abre una ventana
  handleButtonClick(evt) {
    let contentMessage = `<p class="alert-footer"><small>Template made by <a href="https://github.com/sigcorporativo-ja/app-mapea-templates">SIGCorporativo</a><small></p>`
    if (config.isApp) {
      contentMessage =
        `<ul class="alert-ul">
                          <li><b>Platform:</b> ${device.platform}</li>
                          <li><b>Manufacturer:</b> ${device.manufacturer}</li>
                          <li><b>Model:</b> ${device.model}</li>
                          <li><b>uuid:</b> ${device.uuid}</li>
                        </ul>` + contentMessage
    }
    let alert = document.createElement('ion-alert')
    alert.header = 'Info'
    alert.message = contentMessage
    alert.buttons = [
      {
        text: 'Ok',
        handler: () => {
          console.log('Alert Ok')
        },
      },
    ]
    document.body.appendChild(alert)
    alert.present()
  }
}
