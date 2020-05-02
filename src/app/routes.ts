import { json } from 'express';
import { lexicalRouter } from './lexical-analysis';
import { errorHandler } from './middleware/error-handler';
import swagger from 'swagger-ui-express';
const swaggerDocument = require('./swagger.json');

export function initRoutes(app: any) {
    app.use(json());
    app.use('/complexity', lexicalRouter);
    app.use('/', swagger.serve, swagger.setup(swaggerDocument));
    app.use(errorHandler);
}
