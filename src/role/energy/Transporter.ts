import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

/**
 * energy 运输者
 *  这里采取优先输送原则，当身上有能量时，优先输送能量，当身上没有能量时，再去获取能量
 */
export default {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
    creep.say('T');
    // 改变状态
    if (creep.memory.transferring && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.transferring = false;
      creep.say('🔄takeUp');
    }
    if (!creep.memory.transferring && creep.store.getFreeCapacity() == 0) {
      creep.memory.transferring = true;
      creep.say('✅transfer');
    }

    if (creep.memory.transferring) {
      // 将能量输送给spawn或者extension,这个优先级是最高的
      const targets = RoomUtil.findSurplusEnergyStructure(creep.room);
      if (targets.length > 0) {
        CreepUtil.transfer(creep, targets[0]);
      } else {
        // 如果没有需要输送的目标，则将能量存储到container3中
        const containers = RoomUtil.findAllContainer(creep.room);
        CreepUtil.transfer(creep, containers[3]);
      }
    } else {
      // 从container中取出能量
      const containers = RoomUtil.findAllContainer(creep.room);
      const {group} = creep.memory;
      CreepUtil.takeOut(creep, containers[group]);
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
