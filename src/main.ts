import Harvester from './role/Harvester';
import Upgrader from './role/Upgrader.ts';
import Producer from './role/Producer.ts';
import Builder from './role/Builder.ts';
import { BUILDER, COMMUNICATOR, HARVESTER, HARVESTER_PLUS, PIONEER, UPGRADER, UPGRADER_PLUS } from './types/CreepType.ts';
import Pioneer from './role/Pioneer.ts';


const main = {
  loop() {
    // 初始化spawn
    const spawn1 = Game.spawns['Spawn1'];
    Producer.init(spawn1);


    // 设置spawn生产规则
    const {harvester, upgrader, pioneer, builder} = spawn1.memory.creepsStatus;
    if (harvester.count < 3) {
      Producer.produceCreep(spawn1, HARVESTER_PLUS);
    } else if (upgrader.count < 2) {
      Producer.produceCreep(spawn1, UPGRADER_PLUS);
    } else if (pioneer.count < 1) {
      Producer.produceCreep(spawn1, PIONEER);
    } else if (builder.count < 6) {
      Producer.produceCreep(spawn1, BUILDER);
    }
    // 清理不存在的creep Memory
    for (let name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
      }
    }
    // 设置creep工作规则
    for (let name in Game.creeps) {
      const creep = Game.creeps[name];
      switch (creep.memory.role) {
        case COMMUNICATOR.role:
          creep.say('don\'t kill me', true);
          break;
        case HARVESTER.role:
          Harvester.run(creep);
          break;
        case UPGRADER.role:
          Upgrader.run(creep);
          break;
        case BUILDER.role:
          Builder.run(creep);
          break;
        case PIONEER.role:
          Pioneer.run(creep);
          break;
        default:
          console.log('creep.role is not defined');
      }
    }
  },
};
export default main;
