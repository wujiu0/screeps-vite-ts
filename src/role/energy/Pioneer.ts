import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

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
      this.pioneer(creep, resources[0]);
    } else {
      const targets = RoomUtil.findAllContainer(creep.room).filter(container => container.store.getFreeCapacity() > 0);
      if (targets.length > 0) {
        CreepUtil.transfer(creep, targets[0]);
      }
    }
  },

  /**
   * 捡取能量
   * @param creep
   * @param source
   */
  pioneer(creep: Creep, source: Resource) {
    if (creep.pickup(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source, {visualizePathStyle: {stroke: '#d000ff'}});
    }
  },

};
export default Pioneer;
