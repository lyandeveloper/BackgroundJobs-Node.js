import Queue from 'bull';
import redisConfig from '../../config/redis';

import RegisterMail from '../jobs/RegisterMail';

const mailQueue = new Queue(RegisterMail.key, redisConfig);

export default mailQueue;