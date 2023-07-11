import CreepUtil from '../utils/CreepUtil.ts';

/**
 * 拾荒者
 */
const Pioneer = {
  run(creep: Creep) {
    creep.say('pioneer');
    CreepUtil.checkLifeTime(creep);
    const resources = creep.room.find(FIND_DROPPED_RESOURCES);
    // 如果背包未满，且地图上有散落的资源，则去拾取
    if (creep.store.getFreeCapacity() > 0 && resources.length > 0) {
      const {group} = creep.memory;
      this.pioneer(creep, resources[group]);
    } else {
      const targets = creep.room.find(FIND_MY_STRUCTURES).filter((structure) => {
        return (structure.structureType === STRUCTURE_SPAWN) &&
          structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
      });
      if (targets.length > 0) {
        this.transfer(creep, <StructureSpawn>targets[0]);
      }
    }
  },

  /**
   * 采集能量
   * @param creep
   * @param source
   */
  pioneer(creep: Creep, source: Resource) {
    if (creep.pickup(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
    }
  },

  /**
   * 输送能量
   * @param creep
   * @param target
   */
  transfer(creep: Creep, target: StructureSpawn) {
    if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
    }
  },


};
export default Pioneer;
