const helper = require('@iobroker/vis-2-widgets-testing');
const adapterName = require('../package.json').name.split('.').pop();

describe('vis-2-widgets-collection', () => {
    before(async function () {
        this.timeout(180000);
        // install js-controller, web and vis-2-beta
        // await helper.startIoBroker({additionalAdapters: ['vis-2', 'web' , 'radar-trap']});
        await helper.startIoBroker();
        await helper.startBrowser(process.env.CI === 'true');
        await helper.createProject();

        // open widgets
        await helper.palette.openWidgetSet(null, adapterName);
        await helper.screenshot(null, '02_widgets_opened');
    });

    it('Check all widgets', async function () {
        this.timeout(60000);
        const widgets = await helper.palette.getListOfWidgets(null, adapterName);
        // an empty palette means the widget set did not load; without this check the loop below would pass
        if (!widgets.length) {
            throw new Error(`No widgets of "${adapterName}" in the palette - the widget set did not load`);
        }
        for (let w = 0; w < widgets.length; w++) {
            const wid = await helper.palette.addWidget(null, widgets[w]);
            await helper.screenshot(null, `10_${widgets[w]}`);
            await helper.view.deleteWidget(null, wid);
        }
        return Promise.resolve();
    });

    after(async function () {
        this.timeout(5000);
        await helper.stopBrowser();
        return helper.stopIoBroker();
    });
});
