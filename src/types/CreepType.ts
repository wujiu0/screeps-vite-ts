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
  cost: 350,
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
 * 超级采集者(苦逼打工人)
 */
const HARVESTER_ULTRA: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, WORK, WORK, WORK, MOVE],
  cost: 550,
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
 * 中级升级者
 */
const UPGRADER_PLUS: CreepType = {
  role: 'upgrader',
  body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
  cost: 550,
};
/**
 * 建造者
 */
const BUILDER: CreepType = {
  role: 'builder',
  body: [WORK, CARRY, MOVE, CARRY, MOVE],
  cost: 300,
};
const BUILDER_PLUS: CreepType = {
  role: 'builder',
  body: [WORK, WORK, CARRY, MOVE, CARRY, MOVE],
  cost: 400,
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
  body: [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
  cost: 300,
};

// 运输者
const TRANSPORTER: CreepType = {
  role: 'transporter',
  body: [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE],
  cost: 300,
};
// 中级运输者
const TRANSPORTER_PLUS: CreepType = {
  role: 'transporter',
  body: [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
  cost: 500,
};
// 修理者
const REPAIRER: CreepType = {
  role: 'repairer',
  body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE],
  cost: 500,
};
/**
 * 临时角色
 */
const TEMP: CreepType = {
  role: 'temp',
  body: [WORK, CARRY, MOVE],
  cost: 300,
};
export {
  HARVESTER_LOW, HARVESTER, HARVESTER_PLUS, HARVESTER_PRO, HARVESTER_ULTRA,
  TRANSPORTER, TRANSPORTER_PLUS,
  UPGRADER, UPGRADER_PLUS,
  BUILDER, BUILDER_PLUS,
  REPAIRER,
  COMMUNICATOR, PIONEER, TEMP,
};
