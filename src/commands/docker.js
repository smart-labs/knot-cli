module.exports = {
    name: 'docker',
    description: 'open docker cesarbr/knot-zephyr-sdk:latest',
    run: async toolbox => {

        const { exec, spawnSync } = require('child_process');
        const { print: { error, success } } = toolbox;

        exec('pwd', (err, res) => {
            if (!err) {
                success('open docker cesarbr/knot-zephyr-sdk:latest ~' + res);
                spawnSync('docker', ['run', '-ti', '--privileged', '-v', '/dev:/dev', '-v', `${res.trim()}/:/workdir`, 'cesarbr/knot-zephyr-sdk:latest'], { stdio: 'inherit' });
            } else {
                error('there was an error opening the docker: \n' + err);
            }
        });
    }
}