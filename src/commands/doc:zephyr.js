module.exports = {
    name: 'doc:zephyr',
    alias: 'docz',
    description: 'Zephyr Documentation',
    run: async toolbox => {

        const {
            openDocZephyr,
            parameters,
            validateParametersDoc
        } = toolbox;
        const options = parameters.options;

        var argument = await validateParametersDoc(options);

        await openDocZephyr(argument);
    }
}