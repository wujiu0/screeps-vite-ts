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
   * creep数量
   */
  creepsCount: {
    harvester: number,
    upgrader: number,
    builder: number,
    communicator: number,
    pioneer: number,
    temp: number,
  };
}
