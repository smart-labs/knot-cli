module.exports = (toolbox) => {

    const { exec } = require('child_process');
    const { print: { success, warning, error, table } } = toolbox;
    const commands = {
        'digitalCounter': 'digital-counter',
        'analogAlert': 'analog-alert',
        'multisensor': 'multisensor',
        'dc': 'digital-counter',
        'al': 'analog-alert',
        'ms': 'multisensor',
        'blink': 'blink',
        'button': 'button',
        'thermo': 'thermo',
        'toggle': 'toggle',
        'plate': 'plate',
        'tank': 'tank'
    };


    async function cloneExample(argument) {

        if (Object.keys(commands).includes(argument)) {
            await downloadProject(commands[argument]);

        } else {
            warning('Below are the sample designs available. use as `knot-cli clone <function>`');
            await tableExamples();
        }
    }

    async function tableExamples() {
        table(
            [
                ['Projects', 'function'],
                ['analog alert', '--al, --analogAlert'],
                ['blink', '--blink'],
                ['button', '--button'],
                ['digital counter', '--dc, --digitalCounter'],
                ['multisensor', '--ms, --multisensor'],
                ['plate', '--plate'],
                ['tank', '--tank'],
                ['thermo', '--thermo'],
                ['toggle', '--toggle'],
            ], { format: 'markdown' },
        );
    }

    async function downloadProject(projectName) {

        if (await confirmOverwrite(projectName) == false) return;

        exec(`svn co https://github.com/CESARBR/zephyr-knot-sdk/trunk/apps/${projectName}`, (err, stdout, stderr) => {
            if (err)
                error(stderr);
            else
                success(`${projectName} project has been cloned`);
        });
    }

    async function confirmOverwrite(projectName) {
        var res = await toolbox.confirmOverwrite(projectName);

        if (res == true)
            exec(`rm -rf ${projectName}`);

        return res;
    }

    toolbox.cloneExample = cloneExample;

}