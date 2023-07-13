// 创建临时运输者
Game.spawns.Spawn1.spawnCreep(
    [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE],
    'transporter' + Game.time,
    {
        memory: {
            role: 'transporter',
            num: 999,
            group: 0,
            tmp: true,
        },
    });
// 临时拾荒者
Game.spawns.Spawn1.spawnCreep(
    [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE],
    'pioneer' + Game.time,
    {
        memory: {
            role: 'pioneer',
            num: 999,
            group: 0,
            tmp: true,
        },
    });
// 创建临时建造者
Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, WORK, CARRY, MOVE, MOVE],
    'builder' + Game.time,
    {
        memory: {
            role: 'builder',
            num: 999,
            group: 2,
            tmp: true,
        },
    });
// 创建临时升级者
Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE],
    'upgrader' + Game.time,
    {
        memory: {
            role: 'upgrader',
            num: 999,
            group: 0,
            tmp: true,
        },
    });
// 创建临时修复者
Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE],
    'repairer' + Game.time,
    {
        memory: {
            role: 'repairer',
            num: 1,
            group: 1,
        },
    },
);
