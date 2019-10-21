module.exports = {
    name: 'doc:knot',
    alias: 'dock',
    description: 'KNoT Documentation. [ --cloud, --gateway, --thing or --start ]',
    run: async toolbox => {

        const {
            openDocKnot,
            parameters,
            validateParametersFirst
        } = toolbox;
        const options = parameters.options;

        var argument = await validateParametersFirst(options);

        await openDocKnot(argument);
    }
}