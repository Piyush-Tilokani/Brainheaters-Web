module.exports = {
    apps : [
    {
        name:"website",
        args:"start",
        script: 'npm',
        watch:false,
        exec_mode:"fork",
        instances:"1",
        max_memory_restart: "500M",
    },
    ]
};