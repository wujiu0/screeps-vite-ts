/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.spawnsCreep');
 * mod.thing == 'a thing'; // true
 */


const Producer = {
  run() {
  },
  produceCreep(spawn: StructureSpawn, type: CreepType, group: number) {
    if (spawn.store.getUsedCapacity(RESOURCE_ENERGY) >= type.cost) {
      spawn.spawnCreep(type.body, type.role + '-' + Date.now(), {
        memory: {
          role: type.role,
          group: group,
        },
      });
      console.log('生产了一个' + type.role);
      console.log(spawn.memory.creepsCount[type.role]);
      spawn.memory.creepsCount[type.role]++;
      console.log(spawn.memory.creepsCount[type.role]);
    }
  },
  

  init(spawn: StructureSpawn) {
    if (spawn.memory.initFlag) return;
    spawn.memory.creepsCount = {
      harvester: 0,
      upgrader: 0,
      builder: 0,
    };
    spawn.memory.initFlag = true;
  },
};

export default Producer;
