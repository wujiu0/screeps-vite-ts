import CreepUtil from '../../utils/CreepUtil.ts';
import RoomUtil from '../../utils/RoomUtil.ts';

const Repairer = {
  run(creep: Creep) {
    // 检测存活时间
    CreepUtil.checkLifeTime(creep);
    creep.say('R');
    if (creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.repairing = false;
      creep.say('🔄harvest');
    }
    if (!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
      creep.memory.repairing = true;
      creep.say('🛠️repair');
    }

    const containers = RoomUtil.findAllContainer(creep.room).filter((container) => {
      return container.hits < container.hitsMax * 0.8;
    });
    const roads = RoomUtil.findAllRoad(creep.room).filter((road) => {
        return road.hits < road.hitsMax * 0.7;
      },
    );
    const targets = (<Structure[]>containers).concat(roads);
    // 如果没有需要修理的container，就去flag处等待
    if (targets.length === 0) {
      creep.moveTo(Game.flags['Repairer']);
      return;
    }
    if (creep.memory.repairing) {
      if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
      }
    } else {
      CreepUtil.takeOut(creep, containers[creep.memory.group]);
    }
  },

};


export default Repairer;
