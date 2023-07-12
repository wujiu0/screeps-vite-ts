import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

/**
 * 拾荒者
 */
const Pioneer = {
  run(creep: Creep) {
    creep.say('pioneer');
    CreepUtil.checkLifeTime(creep);
    // 背包满了 -> 送
    if (creep.store.getFreeCapacity() == 0) {
      const targets = RoomUtil.findAllContainer(creep.room);
      CreepUtil.transfer(creep, targets[0]);
    } else {
      // 背包没满
      const resources = creep.room.find(FIND_DROPPED_RESOURCES);
      // 有掉落的资源 -> 捡
      if (resources.length > 0) {
        this.pioneer(creep, resources[0]);
      } else {
        // 没有掉落的资源 -> 等
        creep.moveTo(Game.flags['pioneer']);
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
