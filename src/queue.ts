import 'dotenv/config';

import Queue from './app/lib/Queue';
import RegisterMail from './app/jobs/RegisterMail';

Queue.process(RegisterMail.handle);