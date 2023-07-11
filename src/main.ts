import Harvester from './role/Harvester';
import Upgrader from './role/Upgrader.ts';
import Producer from './role/Producer.ts';
import Builder from './role/Builder.ts';
import { BUILDER, HARVESTER, UPGRADER } from './types/CreepType.ts';


const main = {
  loop() {
    // 初始化spawn
    const spawn1 = Game.spawns['Spawn1'];
    Producer.init(spawn1);

    // 设置spawn生产规则
    if (spawn1.memory.creepsCount[HARVESTER.role] < 8) {
      Producer.produceCreep(spawn1, HARVESTER, 0);
    }
    // 设置creep工作规则
    for (let name in Game.creeps) {
      const creep = Game.creeps[name];
      switch (creep.memory.role) {
        case HARVESTER.role:
          Harvester.run(creep);
          break;
        case UPGRADER.role:
          Upgrader.run(creep);
          break;
        case BUILDER.role:
          Builder.run(creep);
          break;
      }
    }
  },
};
export default main;
