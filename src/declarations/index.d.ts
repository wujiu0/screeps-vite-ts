interface CreepType {
  role: roleType,
  body: BodyPartConstant[],
  cost: number
}


type roleType = 'harvester' | 'transporter' | 'upgrader' | 'builder'
  | 'communicator' | 'repairer'
  | 'pioneer' | 'temp';
