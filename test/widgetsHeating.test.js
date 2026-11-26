const helper = require('@iobroker/vis-2-widgets-testing');
const { visWidgets } = require('../io-package.json').common;

// The heating types live in a palette set of their own: the second visWidgets entry, keyed by the set id
// (ADR-0118). Its components are the modules; a type's id is `tpl<Module>`.
const heatingSet = Object.keys(visWidgets).find(key => key !== 'vis2CollectionWidget');
const heatingTypes = visWidgets[heatingSet].components.map(name => `tpl${name}`);

describe('vis-2-widgets-collection: the heating set', () => {
    before(async function () {
        this.timeout(180000);
        await helper.startIoBroker();
        await helper.startBrowser(process.env.CI === 'true');
        await helper.createProject();

        await helper.palette.openWidgetSet(null, heatingSet);
        await helper.screenshot(null, '02_heating_widgets_opened');
    });

    it('lists every heating type in its palette group and inserts each', async function () {
        this.timeout(60000);
        const widgets = await helper.palette.getListOfWidgets(null, heatingSet);
        // an empty or partial group means the second visWidgets entry did not load
        const missing = heatingTypes.filter(type => !widgets.includes(type));
        if (missing.length) {
            throw new Error(`Not in the palette group "${heatingSet}": ${missing.join(', ')}`);
        }
        for (let w = 0; w < widgets.length; w++) {
            const wid = await helper.palette.addWidget(null, widgets[w]);
            await helper.screenshot(null, `20_${widgets[w]}`);
            await helper.view.deleteWidget(null, wid);
        }
    });

    after(async function () {
        this.timeout(5000);
        await helper.stopBrowser();
        return helper.stopIoBroker();
    });
});
