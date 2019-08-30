module.exports = (toolbox) => {

    const { template, print: { success, error }, filename } = toolbox;

    async function createApp(name, arguments) {

        if (!name) {
            error('App name must be specified');
            return;
        }

        await createAppFiles(name, arguments);
        await createConfigFiles(name, arguments.q_total);

        success(`Created ${name} app`);
    }

    async function createConfigFiles(name, q_total) {

        await template.generate({
            template: 'config/prj.config.ejs',
            target: `${name}/prj.config`,
            props: { name: name, q_total: q_total }

        });

        await template.generate({
            template: 'config/setup.config.ejs',
            target: `${name}/setup.config`,
            props: { name: name }

        });
    }

    async function createAppFiles(name, arguments) {

        await template.generate({
            template: 'program.c.ejs',
            target: `${name}/src/${name}.c`,
            props: { name: name, q_digital: arguments.q_digital, q_total: arguments.q_total },
        });

        await template.generate({
            template: 'lib/knot.h',
            target: `${name}/lib/knot.h`
        });
    }

    toolbox.createApp = createApp;
};