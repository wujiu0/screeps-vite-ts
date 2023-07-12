import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

const Repairer = {
  run(creep: Creep) {
    // 检测存活时间
    CreepUtil.checkLifeTime(creep);
    creep.say('R');
    if (creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.repairing = false;
      creep.say('🔄harvest');
    }
    if (!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
      creep.memory.repairing = true;
      creep.say('🛠️repair');
    }

    const containers = RoomUtil.findAllContainer(creep.room).filter((container) => {
      return container.hits < container.hitsMax * 0.8;
    });
    if (creep.memory.repairing) {

      // if (creep.repair(containers[creep.memory.group]) == ERR_NOT_IN_RANGE) {
      //   creep.moveTo(containers[creep.memory.group], {visualizePathStyle: {stroke: '#ffffff'}});
      // }
      if (creep.repair(containers[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(containers[0], {visualizePathStyle: {stroke: '#ffffff'}});
      }
    } else {
      CreepUtil.takeOut(creep, containers[creep.memory.group]);
    }
  },

};


export default Repairer;
