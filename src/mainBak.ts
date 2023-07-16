import Harvester from './role/energy/Harvester.ts';
import Upgrader from './role/controller/Upgrader.ts';
import Producer from './role/Producer.ts';
import Builder from './role/construction/Builder.ts';
import { BUILDER, COMMUNICATOR, HARVESTER, REPAIRER, TRANSPORTER, UPGRADER } from './types/CreepType.ts';
import Transporter from './role/energy/Transporter.ts';
import Repairer from './role/construction/Repairer.ts';


const main = {
  loop() {
    // 清理不存在的creep Memory
    for (let name in Memory.creeps) {
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
      }
    }

    // 初始化spawn
    const spawn1 = Game.spawns['Spawn1'];
    Producer.init(spawn1);

    // 设置spawn生产规则
    Producer.config(spawn1);

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
        case TRANSPORTER.role:
          Transporter.run(creep);
          break;
        case UPGRADER.role:
          Upgrader.run(creep);
          break;
        case BUILDER.role:
          Builder.run(creep);
          break;
        case REPAIRER.role:
          Repairer.run(creep);
          break;
        default:
          console.log(` ${creep.name},${creep.memory.role} is not defined`);
      }
    }
  },
};
export default main;
