const SxGeo = require('../dist/sxgeo').default;

const geoInstance = new SxGeo('test/SxGeoCity.dat', 1);
const result = geoInstance.getCityFull('1.1.1.1');
console.log(result);