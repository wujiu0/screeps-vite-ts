/**
 * energy 采集收获者
 */
const Harvester = {
  run(creep: Creep) {
    if (creep.store.getFreeCapacity() > 0) {
      const sources = creep.room.find(FIND_SOURCES);
      const { group } = creep.memory;
      this.harvest(creep, sources[group]);
    } else {
      this.transfer(creep, Game.spawns['Spawn1']);
    }
  },

  /**
   * 采集能量
   * @param creep
   * @param source
   */
  harvest(creep: Creep, source: Source) {
    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source);
    }
  },

  /**
   * 输送能量
   * @param creep
   * @param target
   */
  transfer(creep: Creep, target: StructureSpawn) {
    if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }

};
export default Harvester;
