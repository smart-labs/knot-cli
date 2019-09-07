module.exports = (toolbox) => {

    const { filesystem, prompt } = toolbox;

    async function confirmOverwrite(name) {

        var folder = filesystem.exists(`${name}`);
        if (folder == 'dir') {
            if (!await prompt.confirm('A directory with this name already exists! Do you really want to overwrite?'))
                return false;
        }

        return true;
    }

    toolbox.confirmOverwrite = confirmOverwrite;
}