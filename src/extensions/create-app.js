module.exports = (toolbox) => {

    const { template, print: { success, error } } = toolbox;

    async function createApp(name) {

        if (!name) {
            error('App name must be specified');
            return;
        }

        await createAppFiles(name);
        await createConfigFiles(name);

        success(`Created ${name} app`);
    }

    async function createConfigFiles(name) {

        await template.generate({
            template: 'config/prj.config.ejs',
            target: `${name}/prj.config`,
            props: { name: name }

        });

        await template.generate({
            template: 'config/setup.config.ejs',
            target: `${name}/setup.config`,
            props: { name: name }

        });
    }

    async function createAppFiles(name) {

        await template.generate({
            template: 'program.c.ejs',
            target: `${name}/src/${name}.c`,
            props: { name: name }
        });

        await template.generate({
            template: 'lib/knot.h',
            target: `${name}/lib/knot.h`
        });
    }

    toolbox.createApp = createApp;
};