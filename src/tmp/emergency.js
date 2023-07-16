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
// 创建临时建造者
Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, CARRY, MOVE],
    'TBuilder1',
    {
        memory: {
            role: 'builder',
            num: 999,
            group: 0,
            tmp: true,
        },
    });
Game.spawns.Spawn1.spawnCreep(
    [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
    'TBuilder0',
    {
        memory: {
            role: 'builder',
            num: 999,
            group: 0,
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
//创建临时攻击者
Game.spawns.Spawn1.spawnCreep(
    [ATTACK, ATTACK, ATTACK, MOVE],
    'TAttacker');
Game.getObjectById('64b19b83ae5199e68646efd1').room.find(FIND_HOSTILE_SPAWNS);
Game.getObjectById('64b19b83ae5199e68646efd1').attack(Game.getObjectById('64b19b83ae5199e68646efd1').room.find(FIND_HOSTILE_SPAWNS)[0]);


// 前往W21N38的采集者，采集能量并带回来
if (creep.name === 'TBuilder1') {
    if (creep.pos.roomName === 'W21N38') {
        const sources00 = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources00[creep.memory.group]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources00[creep.memory.group], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    } else {
        creep.moveTo(new RoomPosition(37, 48, 'W21N38'));
    }
}

// 创建临时房间预订者
Game.spawns.Spawn1.spawnCreep(
    [CLAIM, MOVE, MOVE],
    'TReserver1',
    {
        memory: {
            role: 'reserver',
            num: 999,
            group: 0,
            tmp: true,
        },
    });

if (creep.memory.tmp) {

    if (creep.pos.roomName == 'W21N38') {
        const sources00 = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources00[creep.memory.group]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources00[creep.memory.group], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    } else {
        creep.moveTo(new RoomPosition(37, 48, 'W21N38'));
    }
} else {
    const ind = RoomUtil.findAllContainer(creep.room).length > 1 ? 1 : 0;
    CreepUtil.takeOut(creep, RoomUtil.findAllContainer(creep.room)[ind]);
}

