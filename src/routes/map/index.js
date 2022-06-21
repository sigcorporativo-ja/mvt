import html from './map.html'
const ZOOM_PROV = 6

export default class ViewMap extends HTMLElement {
  //Creado para que llame al mapa nada mas abrirse la aplicacion. Si no se llama al mapa en el costructor, no cargará, se mostrará en blanco y en la consola dará un error
  constructor() {
    super()
    this.sizeObserver = new ResizeObserver(() => {
      if (this.olMap) {
        this.olMap.updateSize()
      }
    })
  }

  //Llamada al html, se añade el evento para elegir la provincia y realizar el zoom
  connectedCallback() {
    this.innerHTML = html

    let geoJSON = new M.layer.GeoJSON({
      name: "Provincias",
      url: "http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:Provincias&maxFeatures=50&outputFormat=application/json"
    });

    // Capa MVT
    let mvt = new M.layer.MVT({
      url: 'https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=Bnfc4cWrRMT8V3mRgTLr',
      name: 'Capa MVT',
      projection: 'EPSG:3857',
    });

    //mvt.displayInLayerSwitcher = false;

    mvt.on(M.evt.LOAD, function() {
      //console.log("MVT Cargada");
      let olmvt = mvt.getImpl().getOLLayer();
      // mvt.getImpl().getOLLayer() instanceof ol.layer.VectorTile
      olms.applyStyle(olmvt, style1, 'openmaptiles', 'fixtures/osm-liberty/')
        .then(function() {
          console.log('ESTILO APLICADO');
          // Añado una capa GeoJSON y otra WMS
          //mapajs.addLayers(geoJSON);
          
        })
    });


    //Se crea el mapa
    this.mMap = new M.map({
      container: "map",
      projection: "EPSG:3857*m",
      controls: ["layerswitcher", "mouse"],
      layers: [geoJSON, mvt]
    })
    this.olMap = this.mMap.getMapImpl()
    this.sizeObserver.observe(this)
  }
}