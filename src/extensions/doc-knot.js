module.exports = (toolbox) => {

    const opn = require('opn');
    const { print: { success } } = toolbox;

    async function openDocKnot(argument) {

        if (argument == 'cloud' || argument == 'c') {
            opn('https://knot-devel.cesar.org.br/doc/cloud/cloud.html');

        } else if (argument == 'gateway' || argument == 'g') {
            opn('https://knot-devel.cesar.org.br/doc/gateway/gateway.html');

        } else if (argument == 'thing' || argument == 't') {
            opn('https://knot-devel.cesar.org.br/doc/thing/thing.html');

        } else {
            opn('https://knot-devel.cesar.org.br/doc/general/introduction.html');

        }

        success('knot documentation opened');
    }

    toolbox.openDocKnot = openDocKnot;
}