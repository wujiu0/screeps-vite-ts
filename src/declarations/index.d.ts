interface CreepType {
  role: roleType,
  body: BodyPartConstant[],
  cost: number
}


type roleType = 'harvester' | 'upgrader' | 'builder';
