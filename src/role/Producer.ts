/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.spawnsCreep');
 * mod.thing == 'a thing'; // true
 */


import config from '../config/config.ts';

const Producer = {
  run() {
  },
  produceCreep(spawn: StructureSpawn, type: CreepType) {
    if (spawn.room.energyAvailable >= type.cost) {
      // 类型计数器++
      spawn.memory.creepsStatus[type.role].count++;
      const {next} = spawn.memory.creepsStatus[type.role];
      spawn.spawnCreep(type.body, type.role + '-' + next, {
        memory: {
          role: type.role,
          num: next,
          group: next % 2,
          spawn: spawn.name,
        },
      });
      spawn.room.visual.text(type.role + '-' + Date.now(), spawn.pos.x + 1, spawn.pos.y, {
        align: 'left',
        opacity: 0.8,
      });
      console.log('生产了一个' + type.role, '当前数量：', spawn.memory.creepsStatus[type.role].count);
    }
  },


  init(spawn: StructureSpawn) {
    if (spawn.memory.initFlag) return;
    spawn.memory.creepsStatus = config.SPAWN_INIT_CONFIG;
    spawn.memory.initFlag = true;
  },
};

export default Producer;
