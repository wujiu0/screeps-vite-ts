interface CreepMemory {
  /**
   * 角色
   */
  role: roleType,
  /**
   * 序号
   */
  num: number,
  /**
   * 分组
   */
  group: number,
  /**
   * 所属spawn
   */
  spawn: string,
  /**
   * upgrade状态
   */
  upgrading?: boolean,
  /**
   * build状态
   */
  building?: boolean;
  /**
   * transfer状态
   */
  transferring?: boolean;
  /**
   * repair状态
   */
  repairing?: boolean;
  /**
   * 临时creep
   */
  tmp?: boolean
}

interface SpawnMemory {
  /**
   * 初始化标志
   */
  initFlag: boolean;
  /**
   * creeps状态
   */
  creepsStatus: {
    harvester: { count: number, next: number },
    transporter: { count: number, next: number },
    upgrader: { count: number, next: number },
    builder: { count: number, next: number },
    repairer: { count: number, next: number },
    communicator: { count: number, next: number },
    pioneer: { count: number, next: number },
    temp: { count: number, next: number },
  };
}
