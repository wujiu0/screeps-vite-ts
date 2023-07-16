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


    const {group} = creep.memory;
    const containers = RoomUtil.findAllContainer(creep.room);
    if (creep.memory.transferring) {
      if (group == 0 || group == 1) {
        // 第【0】组的运输者，优先从container【0】中取出能量输送给spawn或者extension
        const spawnAndExtensions = RoomUtil.findSurplusEnergyStructure(creep.room);
        if (spawnAndExtensions.length > 0) {
          CreepUtil.transfer(creep, spawnAndExtensions[0]);
        } else {
          // 如果spawn或者extension都已满，则将能量存储到container【1】中
          const containers = RoomUtil.findAllContainer(creep.room);
          CreepUtil.transfer(creep, containers[1]);
        }
      } else if (group == 1) {
        // 第【1】组的运输者，只负责从container【1】中取出能量输送给upgrader使用的container【2】
        CreepUtil.transfer(creep, containers[2]);
      }

    } else {
      // 首先检查creep所处的房间是否正确，如果不正确，就移动到正确的房间
      // (运输者搬运能量时需要回到主房间，所以只在非transferring时检查)
      if (creep.memory.room && creep.room.name !== creep.memory.room) {
        creep.moveTo(new RoomPosition(25, 25, creep.memory.room));
        return;
      }
      // 如果地图上有掉落的资源，优先捡起来
      const droppedResources = creep.room.find(FIND_DROPPED_RESOURCES);
      if (droppedResources.length > 0) {
        CreepUtil.pioneer(creep, droppedResources[0]);
      } else {
        // 从container中取出能量
        CreepUtil.takeOut(creep, containers[0]);
      }
    }
  },

};
