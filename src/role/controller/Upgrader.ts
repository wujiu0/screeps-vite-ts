import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

/**
 * controller 升级者
 */
const Upgrader = {
  run(creep: Creep) {
    CreepUtil.checkLifeTime(creep);
    creep.say('U');
    const flag = RoomUtil.findAllContainer(creep.room).length >= 3;
    if (flag) {
      // 更改状态
      if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
        creep.memory.upgrading = false;
        creep.say(creep.name.substring(creep.name.length - 1) + '🔄');
      }
      if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
        creep.memory.upgrading = true;
        creep.say(creep.name.substring(creep.name.length - 1) + '⚡');
      }

      // 根据状态开始work
      if (creep.memory.upgrading) {
        if (!creep.room.controller) {
          console.error('no controller exist');
          return;
        }
        if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
        }
      } else {
        CreepUtil.takeOut(creep, RoomUtil.findAllContainer(creep.room)[1]);
      }
    } else {
      // 已经拥有了第三个container，开始围绕它进行升级
      // 更改状态
      (function () {
        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
          creep.memory.upgrading = false;
          creep.say(creep.name.substring(creep.name.length - 1) + '🔄');
        }
        if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
          creep.memory.upgrading = true;
          creep.say(creep.name.substring(creep.name.length - 1) + '⚡');
        }

        // 根据状态开始work
        if (creep.memory.upgrading) {
          if (!creep.room.controller) {
            console.error('no controller exist');
            return;
          }
          if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
          }
        } else {
          CreepUtil.takeOut(creep, RoomUtil.findAllContainer(creep.room)[1]);
        }
      })();
    }
  },
};

export default Upgrader;

