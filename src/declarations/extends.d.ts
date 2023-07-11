interface CreepMemory {
  /**
   * 角色
   */
  role: string,
  /**
   * 分组
   */
  group: number,
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
    builder: number
  };
}
