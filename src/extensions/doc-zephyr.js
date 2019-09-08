module.exports = (toolbox) => {

    const opn = require('opn');
    const { print: { success } } = toolbox;

    async function openDocZephyr(argument) {

        if (argument == 'api' || argument == 'a') {
            opn('https://docs.zephyrproject.org/latest/reference/index.html');

        } else if (argument == 'start' || argument == 's') {
            opn('https://docs.zephyrproject.org/latest/getting_started/index.html');

        } else {
            opn('https://docs.zephyrproject.org/latest/');

        }

        success('Zephyr documentation opened');
    }

    toolbox.openDocZephyr = openDocZephyr;
}