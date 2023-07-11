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
      const num = spawn.memory.creepsCount[type.role]++;
      const group = num % 2;
      spawn.spawnCreep(type.body, type.role + '-' + Date.now(), {
        memory: {
          role: type.role,
          num,
          group,
          spawn: spawn.name,
        },
      });
      spawn.room.visual.text(type.role + '-' + Date.now(), spawn.pos.x + 1, spawn.pos.y, {
        align: 'left',
        opacity: 0.8,
      });
      console.log('生产了一个' + type.role);
      console.log(spawn.memory.creepsCount[type.role]);
    }
  },


  init(spawn: StructureSpawn) {
    if (spawn.memory.initFlag) return;
    spawn.memory.creepsCount = config.SPAWN_INIT_CONFIG;
    spawn.memory.initFlag = true;
  },
};

export default Producer;
