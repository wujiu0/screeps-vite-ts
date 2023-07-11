/**
 * 低级采集者
 */
const HARVESTER_LOW: CreepType = {
  role: 'harvester',
  body: [WORK, CARRY, MOVE],
  cost: 200,
};
/**
 * 采集者
 */
const HARVESTER: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, CARRY, MOVE],
  cost: 300,
};
/**
 * 中级采集者
 */
const HARVESTER_PLUS: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, CARRY, MOVE, MOVE],
  cost: 300,
};
/**
 * 高级采集者
 */
const HARVESTER_PRO: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, WORK, CARRY, MOVE, MOVE],
  cost: 450,
};
/**
 * 升级者
 */
const UPGRADER: CreepType = {
  role: 'upgrader',
  body: [WORK, CARRY, MOVE],
  cost: 200,
};
/**
 * 建造者
 */
const BUILDER: CreepType = {
  role: 'builder',
  body: [WORK, CARRY, MOVE, CARRY, MOVE],
  cost: 300,
};
/**
 * 交流者
 */
const COMMUNICATOR: CreepType = {
  role: 'communicator',
  body: [WORK, CARRY, MOVE, CARRY, MOVE],
  cost: 300,
};
/**
 * 拾荒者
 */
const PIONEER: CreepType = {
  role: 'pioneer',
  body: [WORK, CARRY, MOVE, MOVE, MOVE],
  cost: 300,
};
/**
 * 临时角色
 */
const TEMP: CreepType = {
  role: 'temp',
  body: [WORK, CARRY, MOVE],
  cost: 300,
};
export { HARVESTER_LOW, HARVESTER, HARVESTER_PLUS, HARVESTER_PRO, UPGRADER, BUILDER, COMMUNICATOR, PIONEER, TEMP};
