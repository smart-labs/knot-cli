module.exports = (toolbox) => {

    const { filesystem, prompt } = toolbox;

    async function confirmOverwrite(name) {

        var folder = filesystem.exists(`${name}`);
        if (folder == 'dir') {

            return await prompt.confirm('A directory with this name already exists! Do you really want to overwrite?');
        }

        return null;
    }

    toolbox.confirmOverwrite = confirmOverwrite;
}