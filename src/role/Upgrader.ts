import CreepUtil from '../utils/CreepUtil.ts';

/**
 * controller 升级者
 */
const Upgrader = {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
    // 更改状态
    if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.upgrading = false;
      creep.say(creep.name + '🔄 harvest');
    }
    if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
      creep.memory.upgrading = true;
      creep.say(creep.name + '⚡ upgrade');
    }

    // 根据状态开始work
    if (creep.memory.upgrading) {
      if(!creep.room.controller) {
        console.error('no controller exist');
        return;
      }
      if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
      }
    } else {
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
      }
    }
  },
};

export default Upgrader;

