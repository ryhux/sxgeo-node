import SxGeo from '../dist/sxgeo.js';

const geoInstance = new SxGeo('test/SxGeoCity.dat', 1);
const result = geoInstance.getCityFull('1.1.1.1');
console.log(result);