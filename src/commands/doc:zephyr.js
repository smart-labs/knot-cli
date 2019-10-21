module.exports = {
    name: 'doc:zephyr',
    alias: 'docz',
    description: 'Zephyr Documentation. [ --api or --start ]',
    run: async toolbox => {

        const {
            openDocZephyr,
            parameters,
            validateParametersFirst
        } = toolbox;
        const options = parameters.options;

        var argument = await validateParametersFirst(options);

        await openDocZephyr(argument);
    }
}