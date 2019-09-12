module.exports = {
    name: 'clone:example',
    alias: 'clone',
    description: 'Clone sensors example.',
    run: async toolbox => {

        const {
            cloneExample,
            parameters,
            validateParametersFirst
        } = toolbox;
        const options = parameters.options;

        var argument = await validateParametersFirst(options);

        await cloneExample(argument);
    }
}