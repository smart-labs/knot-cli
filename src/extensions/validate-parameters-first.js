module.exports = (toolbox) => {

    async function validateParameters(options) {

        var arg = (Object.keys(options)[0]);

        return arg || null;
    }

    toolbox.validateParametersFirst = validateParameters;

}