const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentView = require('./views/instrument_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  constselectElement = document.querySelector('select#instrument-families');
  const instrumentFamily = new SelectView(selectElement);
  console.log(instrumentFamily);
  instrumentFamily.showAllInstruments();
  console.log(instrumentFamily);






});
