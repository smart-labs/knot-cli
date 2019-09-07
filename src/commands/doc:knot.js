module.exports = {
    name: 'doc:knot',
    alias: 'dock',
    description: 'Documentation',
    run: async toolbox => {

        const {
            openDocKnot,
            parameters,
            validateParametersDoc
        } = toolbox;
        const options = parameters.options;

        var argument = await validateParametersDoc(options);

        await openDocKnot(argument);
    }
}