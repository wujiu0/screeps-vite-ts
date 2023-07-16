import config from '../config/config.ts';
import { BUILDER_PLUS, HARVESTER_ULTRA, REPAIRER, TRANSPORTER, TRANSPORTER_PRO, UPGRADER_ULTRA } from '../types/CreepType.ts';

const Producer = {
  run() {
  },
  produceCreep(spawn: StructureSpawn, type: CreepType, room?: string) {
    console.log(`可用能量: ${spawn.room.energyAvailable},需要生产${type.role}，需要能量${type.cost}`);
    if (spawn.room.energyAvailable >= type.cost && !spawn.spawning) {
      // 类型计数器++
      const lastId = spawn.memory.creepsStatus[type.role].count++;
      // 获取是否有重生者，如果没有，使用计数器中的id
      let {next} = spawn.memory.creepsStatus[type.role];
      if (next == -1) next = lastId;
      // 加时间戳防止重名导致无法建造
      const res = spawn.spawnCreep(type.body, type.role + '-' + next + '-' + Date.now(), {
        memory: {
          role: type.role,
          num: next,
          room: room || spawn.room.name,
          group: next % 2,
          spawn: spawn.name,
        },
      });

      spawn.room.visual.text(type.role + '-' + next, spawn.pos.x + 1, spawn.pos.y, {
        align: 'left',
        opacity: 0.8,
      });
      // 建造完成之后，序号置为-1，表示没有重生者
      spawn.memory.creepsStatus[type.role].next = -1;
      console.log(res);
      console.log('生产了一个' + type.role, '当前数量：', spawn.memory.creepsStatus[type.role].count);
    }
  },


  init(spawn: StructureSpawn) {
    if (spawn.memory.initFlag) return;
    spawn.memory.creepsStatus = config.SPAWN_INIT_CONFIG;
    spawn.memory.initFlag = true;
  },
  config(spawn: StructureSpawn) {
    const {
      harvester,
      transporter,
      upgrader,
      repairer,
      builder,
    } = spawn.memory.creepsStatus;
    if (harvester.count < config.SPAWN_MAX_CREEP_COUNT.harvester) {
      Producer.produceCreep(spawn, HARVESTER_ULTRA);
    } else if (transporter.count < 1) {
      Producer.produceCreep(spawn, TRANSPORTER);
    } else if (transporter.count < config.SPAWN_MAX_CREEP_COUNT.transporter) {
      Producer.produceCreep(spawn, TRANSPORTER_PRO);
    } else if (upgrader.count < config.SPAWN_MAX_CREEP_COUNT.upgrader) {
      Producer.produceCreep(spawn, UPGRADER_ULTRA);
    } else if (repairer.count < config.SPAWN_MAX_CREEP_COUNT.repairer) {
      Producer.produceCreep(spawn, REPAIRER);
    } else if (builder.count < config.SPAWN_MAX_CREEP_COUNT.builder) {
      Producer.produceCreep(spawn, BUILDER_PLUS);
    }
  },
};

export default Producer;
