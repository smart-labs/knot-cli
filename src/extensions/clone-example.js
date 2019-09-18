module.exports = (toolbox) => {

    const { exec } = require('child_process');
    const { print: { success, warning, error, table } } = toolbox;
    const commands = {
        'digitalCounter': 'digital-counter',
        'analogAlert': 'analog-alert',
        'helloDongle': 'hello-dongle',
        'multisensor': 'multisensor',
        'dc': 'digital-counter',
        'al': 'analog-alert',
        'hd': 'hello-dongle',
        'ms': 'multisensor',
        'thermo': 'thermo',
        'toggle': 'toggle',
        'hello': 'hello',
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
                ['digital counter', '--dc, --digitalCounter'],
                ['hello dongle', '--hd, --helloDongle'],
                ['multisensor', '--ms, --multisensor'],
                ['hello', '--hello'],
                ['plate', '--plate'],
                ['tank', '--tank'],
                ['thermo', '--thermo'],
                ['toggle', '--toggle'],
            ], { format: 'markdown' },
        );
    }

    async function downloadProject(projectName) {

        if (await confirmOverwrite(projectName) == false) return;

        exec(`svn co https://github.com/CESARBR/zephyr-knot-sdk/tags/KNOT-v02.01-rc01/apps/${projectName}`, (err, stdout, stderr) => {
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