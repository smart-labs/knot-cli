module.exports = (toolbox) => {

    const { print: { error } } = toolbox;

    async function validateParameters(options) {

        var total = 0;
        var digital = 0;

        if (options.digital || options.d) {

            digital = await parseInt(options.digital || options.d);

            if ((digital < 0) || !(Number.isInteger(digital))) {
                error("Invalid argument for digital parameter");
                return false;
            }
        }

        total = digital;

        if (total > 15) {
            error("Sensor limit exceeded! Maximum number allowed is 15");
            return false;
        }

        return { q_total: total, q_digital: digital };
    }

    toolbox.validateParametersApp = validateParameters;
}