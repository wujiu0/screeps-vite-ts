import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

/**
 * energy 采集收获者
 */
const Harvester = {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
    // 首先检查creep所处的房间是否正确，如果不正确，就移动到正确的房间
    if (creep.memory.room && creep.room.name !== creep.memory.room) {
      creep.moveTo(new RoomPosition(25, 25, creep.memory.room));
      return;
    }
    if (!creep.store.getCapacity()) {
      // 身上没有空间，只需要走到container上持续打工
      // creep.say('╰(*°▽°*)╯');
      // const sources = creep.room.find(FIND_SOURCES);
      // const containers = RoomUtil.findAllContainer(creep.room);
      // const {group} = creep.memory;
      // this.staticHarvest(creep, sources[group], containers[group].pos);
      const sources = creep.room.find(FIND_SOURCES);
      // const {group} = creep.memory;
      // this.harvest(creep, sources[group]);
      this.harvest(creep, sources[0]);
    } else if (creep.store.getFreeCapacity() > 0) {
      // 身上有空间但是没有满，自由采集能量
      const sources = creep.room.find(FIND_SOURCES);
      // const {group} = creep.memory;
      // this.harvest(creep, sources[group]);
      this.harvest(creep, sources[0]);
    } else {
      // 身上有空间并且满了，去建筑里面放能量
      console.log(creep.name, 'transfer');
      // creep.say('🚧 transfer');
      const targets = RoomUtil.findSurplusEnergyStructure(creep.room);
      if (targets.length > 0) {
        CreepUtil.transfer(creep, targets[0]);
      }
    }
  },

  /**
   * 静态采集能量
   * @param creep 采集者
   * @param source 能量源
   * @param workplace 工作地点
   */
  staticHarvest(creep: Creep, source: Source, workplace: RoomPosition) {
    creep.moveTo(workplace, {visualizePathStyle: {stroke: '#ffaa00'}});
    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
    }
  },
  /**
   * 采集能量
   * @param creep 采集者
   * @param source 能量源
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
