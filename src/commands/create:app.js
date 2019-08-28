module.exports = {
    name: 'create:app',
    description: 'Create new app',
    run: async toolbox => {
        const {
            parameters,
            createApp
        } = toolbox

        const name = parameters.first;

        await createApp(name);
    }
}