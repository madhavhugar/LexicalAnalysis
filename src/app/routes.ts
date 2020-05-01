import { json } from 'express';
import { indexRouter } from './controllers/index.controller';
import { errorHandler } from './middleware/error-handler';
import swagger from 'swagger-ui-express';
const swaggerDocument = require('./swagger.json');

export function initRoutes(app: any) {
    app.use(json());
    app.use('/', indexRouter);
    app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));
    app.use(errorHandler);
}
