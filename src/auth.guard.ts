import * as base64  from 'js-base64';
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(req) {
    if(!req.headers.authorization){
        return false;
    }
    const authorization =  base64.decode(req.headers.authorization.slice(5 , req.headers.authorization.length))
    const colon = authorization.indexOf(':');
    const username = authorization.slice(0, colon);
    const password = authorization.slice(colon+1, authorization.length);

    if(username === 'myusername' && password === '123456'){
        return true
    }
    return false;
  }
}
