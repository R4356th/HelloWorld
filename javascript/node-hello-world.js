import { createServer } from 'http';
import { on } from 'events';

const reqs = on(createServer().listen(3000), 'request';

for await (const [_, res] of reqs)
  res.end('Hello, world!');
