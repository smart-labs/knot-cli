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
            template: 'config/prj.conf.ejs',
            target: `${name}/prj.conf`,
            props: { name: name, q_total: q_total }

        });

        await template.generate({
            template: 'config/setup.conf.ejs',
            target: `${name}/setup.conf`,
            props: { name: name }

        });

        await template.generate({
            template: 'config/CMakeLists.txt.ejs',
            target: `${name}/CMakeLists.txt`,
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
            template: 'lib/utility.h',
            target: `${name}/lib/utility.h`
        });
    }

    toolbox.createApp = createApp;
};