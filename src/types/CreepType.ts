
const HARVESTER: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, CARRY, MOVE],
  cost: 300,
};
const HARVESTER_PRO: CreepType = {
  role: 'harvester',
  body: [WORK, WORK, WORK, CARRY, MOVE, MOVE],
  cost: 450,
};
const UPGRADER: CreepType = {
  role: 'upgrader',
  body: [WORK, CARRY, MOVE],
  cost: 200,
};
const BUILDER: CreepType = {
  role: 'builder',
  body: [WORK, CARRY, MOVE],
  cost: 200,
};

export { HARVESTER, HARVESTER_PRO, UPGRADER, BUILDER };
