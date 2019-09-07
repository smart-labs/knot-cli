module.exports = (toolbox) => {

    const { print: { error } } = toolbox;

    async function validateParameters(options) {

        var arg = (Object.keys(options)[0]);

        return arg || null;
    }

    toolbox.validateParametersDoc = validateParameters;
}