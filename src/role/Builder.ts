import CreepUtil from '../utils/CreepUtil.ts';

const Builder = {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
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
        const targetIndex = targets.length -1;
        if (creep.build(targets[targetIndex]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[targetIndex], {visualizePathStyle: {stroke: '#ffffff'}});
        }
      }
    } else {

      // this.takeOut(creep, creep.room.find(FIND_MY_STRUCTURES).find() )
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[creep.memory.group]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[creep.memory.group], {visualizePathStyle: {stroke: '#ffaa00'}});
      }
    }
  },

  /**
   * 从建筑中取出能量
   */
  takeOut(creep: Creep, src: Structure) {
    if (creep.withdraw(src, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(src, {visualizePathStyle: {stroke: '#ffaa00'}});
    }
  },
};


export default Builder;
