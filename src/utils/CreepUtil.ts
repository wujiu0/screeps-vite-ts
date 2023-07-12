export default {
  /**
   * 检查存活时间
   */
  checkLifeTime(creep: Creep) {
    // 如果存活时间不足20，就开始续命
    // 注：判断条件不能小于20，计数器会出现问题
    if (creep.ticksToLive && creep.ticksToLive === 20) {
      creep.say('🔄 renew');
      const spawn = Game.spawns[creep.memory.spawn];
      if (--spawn.memory.creepsStatus[creep.memory.role].count < 0)
        spawn.memory.creepsStatus[creep.memory.role].count = 0;
      // 传递重生者的序号
      spawn.memory.creepsStatus[creep.memory.role].next = creep.memory.num;
      // 不再设置自杀，只是更改计数器，通知spawn开始制造新的creep，然后等待自然死亡
      // creep.suicide();
    }
  },

  /**
   * creep类型转化
   */
  convert(creep: Creep, {role: targetRole}: CreepType) {
    creep.memory.role = targetRole;
  },
};
