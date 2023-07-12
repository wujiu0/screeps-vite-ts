import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

const Builder = {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
    creep.say('B');
    if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.building = false;
      creep.say('🔄 harvest');
    }
    if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
      creep.memory.building = true;
      creep.say('🚧 build');
    }

    if (creep.memory.building) {

      const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        const targetIndex = 0;
        // const targetIndex = targets.length -1;
        if (creep.build(targets[targetIndex]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[targetIndex], {visualizePathStyle: {stroke: '#ffffff'}});
        }
      }
    } else {
      CreepUtil.takeOut(creep, RoomUtil.findAllContainer(creep.room)[creep.memory.group]);
      // const sources = creep.room.find(FIND_SOURCES);
      // if (creep.harvest(sources[creep.memory.group]) == ERR_NOT_IN_RANGE) {
      //   creep.moveTo(sources[creep.memory.group], {visualizePathStyle: {stroke: '#ffaa00'}});
      // }
    }
  },

};


export default Builder;
