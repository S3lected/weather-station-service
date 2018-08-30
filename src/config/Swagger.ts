import * as fs from 'fs';
import * as path from 'path';

import { initializeMiddleware } from 'swagger-tools';
import * as passport from 'passport';

export function setupSwagger(app) {
  // resolve the spec
  const spath = path.resolve('./dist/spec.json');
  const file = fs.readFileSync(spath, 'utf8');

  // This assumes you're in the root of the swagger-tools
  const swaggerObject = JSON.parse(file);

  // Configure non-Swagger related middleware and server components prior to Swagger middleware
  initializeMiddleware(swaggerObject, (swaggerMiddleware) => {
    app.use(swaggerMiddleware.swaggerUi());
    app.use(swaggerMiddleware.swaggerMetadata());
   //  app.use(setupSwaggerSecurity(swaggerMiddleware));
    app.use(swaggerMiddleware.swaggerValidator({
      validateResponse: true
    }));

  });


 
};

function setupSwaggerSecurity(middleware) {
  return middleware.swaggerSecurity({
    jwt_token: (req, authOrSecDef, scopes, callback) => {
      passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) callback(new Error('Error in passport authenticate'));
        if (!user) callback(new Error('Failed to authenticate oAuth token'));
        req.user = user;
        return callback();
      })(req, null, callback);
    }
  });
};