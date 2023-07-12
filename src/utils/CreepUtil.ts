export default {
  /**
   * 检查creep是否需要续命
   * @param creep
   */
  checkLifeTime(creep: Creep) {

    // 如果是tmp Creep，不需要检查
    if (creep.memory.tmp) return;

    // 如果存活时间不足20，就开始续命
    // 注：判断条件不能设置为小于50，计数器会出现问题
    if (creep.ticksToLive && creep.ticksToLive === 50) {
      creep.say('🔄 renew');
      const spawn = Game.spawns[creep.memory.spawn];
      if (--spawn.memory.creepsStatus[creep.memory.role].count < 0)
        spawn.memory.creepsStatus[creep.memory.role].count = 0;
      // 传递重生者的序号
      console.log('renew', creep.name);
      spawn.memory.creepsStatus[creep.memory.role].next = creep.memory.num;
      // 不再设置自杀，只是更改计数器，通知spawn开始制造新的creep，然后等待自然死亡
      // creep.suicide();
    }
  },

  /**
   * 类型转化
   * @param creep
   * @param targetRole
   */
  convert(creep: Creep, {role: targetRole}: CreepType) {
    creep.memory.role = targetRole;
  },

  /**
   * 从建筑中获取能量
   * @param creep
   * @param src
   */
  takeOut(creep: Creep, src: Structure) {
    if (creep.withdraw(src, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(src, {visualizePathStyle: {stroke: '#ffaa00'}});
    }
  },
  /**
   * 输送能量
   * @param creep
   * @param target
   */
  transfer(creep: Creep, target: StructureSpawn | StructureExtension | StructureContainer) {
    if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
    }
  },
};
