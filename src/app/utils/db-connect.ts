import { get } from 'config';
import { connect } from 'mongoose';
import log from 'winston';


export function connectDB() {
    const db: string = get('mongodbUrl');
    connect(db, {useNewUrlParser: true})
        .then(() => {
            log.info(`Connected to database...`);
        })
        .catch(error => {
            log.error('failed to connect', error);
        });
}
