const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
    this.element = element;
    console.log(element);
};

SelectView.prototype.showAllInstruments = function () {
    PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
        const showAllInstruments = event.detail;
        this.populate(allInstruments);
        console.log(allInstruments);
    });

    this.element.addEventListener('change', (event) => {
        const selectIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
    });
};


SelectView.prototype.populateDropdown = function (instrumentFamilyData) {
    instrumentFamilyData.forEach((instrumentFamily, index) => {
        const option = document.createElement('option');
        option.textContent = instrument.name;
        option.value = index;
        this.element.appendChild(option);
    });
};

module.exports = SelectView;
