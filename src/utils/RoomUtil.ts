export default {

  /**
   * 寻找所有的spawn和extension
   * @param room
   */
  findAllEnergyStructure(room: Room) {
    return <(StructureExtension | StructureSpawn)[]>room.find(FIND_MY_STRUCTURES)
      .filter((structure) => {
        return structure.structureType === STRUCTURE_EXTENSION ||
          structure.structureType === STRUCTURE_SPAWN;
      });
  },
  /**
   * 寻找有空间的spawn和extension
   * @param room
   */
  findSurplusEnergyStructure(room: Room) {
    return this.findAllEnergyStructure(room)
      .filter((structure) => {
        return (structure).store.getFreeCapacity(RESOURCE_ENERGY) > 0;
      });
  },
  /**
   * 寻找有能量的spawn和extension
   */
  findHasEnergyStructure(room: Room) {
    return this.findAllEnergyStructure(room)
      .filter((structure) => {
          return (structure).store.getUsedCapacity(RESOURCE_ENERGY) > 0;
        },
      );
  },

  /**
   * 寻找所有的container
   */
  findAllContainer(room: Room) {
    return <StructureContainer[]>room.find(FIND_STRUCTURES).filter((structure) => structure.structureType === STRUCTURE_CONTAINER);
  },

};
