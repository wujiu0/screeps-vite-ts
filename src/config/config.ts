const config = {
  SPAWN_INIT_CONFIG: {
    harvester: {count: 0, next: 0},
    upgrader: {count: 0, next: 0},
    builder: {count: 0, next: 0},
    communicator: {count: 0, next: 0},
    pioneer: {count: 0, next: 0},
    temp: {count: 0, next: 0},
  },
  SPAWN_MAX_CREEP_COUNT: {
    harvester: 3,
    upgrader: 1,
    builder: 10,
    communicator: 1,
    pioneer: 1,
    temp: 99,
  },
};

export default config;
