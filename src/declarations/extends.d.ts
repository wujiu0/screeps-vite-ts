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
    upgrader: { count: number, next: number },
    builder: { count: number, next: number },
    communicator: { count: number, next: number },
    pioneer: { count: number, next: number },
    temp: { count: number, next: number },
  };
}
