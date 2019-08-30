module.exports = {
    name: 'create:app',
    alias: 'create',
    description: 'Create a new app. [ --digital <value> | -d <value> ]',
    run: async toolbox => {
        const {
            parameters,
            createApp,
            validateParameters,
            confirmeOverwrite
        } = toolbox

        const name = parameters.first;
        const options = parameters.options;

        if (await confirmeOverwrite(name) == false) return;

        var arguments = await validateParameters(options);

        if (arguments === false) return;

        await createApp(name, arguments);
    }
}