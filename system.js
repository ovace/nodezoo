exports.name = 'nodezoo';
exports.namespace = 'nodezoo';
exports.id = '3c1703f1-35bf-446c-875f-9bb50fc9302c';

exports.topology = {
  local: {
    root: ['elasticsearch', 'redis', 'beanstalk', 'nzinfo', 'nzindex', 'nzgithub', 'nznpm', 'nzweb']
  },
  blue: {
    root: {
      awsMachine$fe: ['nzweb'],
      awsMachine$svcs: ['nzinfo', 'nzindex', 'nzgithub', 'nznpm'],
      awsMachine$inf: ['elasticsearch', 'redis', 'beanstalk']
    }
  },
  green: {
    root: {
      awsMachine$fe: ['nzweb'],
      awsMachine$svcs: ['nzinfo', 'nzindex', 'nzgithub', 'nznpm'],
      awsMachine$inf: ['elasticsearch', 'redis', 'beanstalk']
    }
  }
};

