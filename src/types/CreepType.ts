/**
 * 低级采集者
 */
const HARVESTER_LOW: CreepType = {
  role: 'harvester',
  body: [WORK, CARRY, CARRY, MOVE, MOVE],
  cost: 300,
};
/**
 * 采集者
 */
const HARVESTER: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, WORK, MOVE],
  cost: 350,
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
  body: [WORK, WORK, CARRY, MOVE],
  cost: 300,
};
/**
 * 中级升级者
 */
const UPGRADER_PLUS: CreepType = {
  role: 'upgrader',
  body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
  cost: 550,
};
const UPGRADER_PRO: CreepType = {
  role: 'upgrader',
  body: [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE],
  cost: 600,
};
/**
 * 超级升级者
 */
const UPGRADER_ULTRA: CreepType = {
  role: 'upgrader',
  body: [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
  cost: 750,
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
/**
 * 高级运输者
 */
const TRANSPORTER_PRO: CreepType = {
  role: 'transporter',
  body: [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
  cost: 650,
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
  TRANSPORTER, TRANSPORTER_PLUS, TRANSPORTER_PRO,
  UPGRADER, UPGRADER_PLUS, UPGRADER_PRO, UPGRADER_ULTRA,
  BUILDER, BUILDER_PLUS,
  REPAIRER,
  COMMUNICATOR, TEMP,
};
