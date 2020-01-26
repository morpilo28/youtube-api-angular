import { HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHandler } from "@angular/common/http";
import { Observable } from 'rxjs';
import { MembersAreaService } from '../services/members-area/members-area.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class apiTokenInterceptor implements HttpInterceptor {

    constructor(private membersAreaService: MembersAreaService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!(req.url.indexOf(environment.youTubeBaseUrl) > -1)) {
            const _req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.membersAreaService.getCurrentUser().token)
            })
            return next.handle(_req);
        } else {
            return next.handle(req);
        }
    }
}