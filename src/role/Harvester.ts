import CreepUtil from '../utils/CreepUtil.ts';

/**
 * energy 采集收获者
 */
const Harvester = {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
    if (creep.store.getFreeCapacity() > 0) {
      // creep.say('🔄 harvest');
      const sources = creep.room.find(FIND_SOURCES);
      const {group} = creep.memory;
      this.harvest(creep, sources[group]);
    } else {
      // creep.say('🚧 transfer');
      const targets = creep.room.find(FIND_MY_STRUCTURES).filter((structure) => {
        return (structure.structureType === STRUCTURE_EXTENSION ||
            structure.structureType === STRUCTURE_SPAWN) &&
          structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
      });
      if (targets.length > 0) {
        this.transfer(creep, <StructureSpawn | StructureExtension>targets[0]);
      }
    }
  },

  /**
   * 采集能量
   * @param creep
   * @param source
   */
  harvest(creep: Creep, source: Source) {
    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
    }
  },

  /**
   * 输送能量
   * @param creep
   * @param target
   */
  transfer(creep: Creep, target: StructureSpawn | StructureExtension) {
    if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
    }
  },

};
export default Harvester;
