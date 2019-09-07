module.exports = {
    name: 'create:app',
    alias: 'create',
    description: 'Create a new app. [ --digital <value> | -d <value> ]',
    run: async toolbox => {
        const {
            parameters,
            createApp,
            validateParametersApp,
            confirmOverwrite
        } = toolbox

        const name = parameters.first;
        const options = parameters.options;

        if (await confirmOverwrite(name) == false) return;

        var arguments = await validateParametersApp(options);

        if (arguments === false) return;

        await createApp(name, arguments);
    }
}