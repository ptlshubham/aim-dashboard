import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs'
import { Injectable, Inject } from '@angular/core';
// import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ApiService } from '../api.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        // @Inject(LOCAL_STORAGE) private storage: WebStorageService, 
        private router: Router,
        // private toastr: ToastrManager
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



        // this.router.navigate(['home']);
        // const token = localStorage.getItem('token');
		
       
        // request.clone({
        //     headers: request.headers.set('rejectUnauthorized', 'false').set('requestCert', 'false')
        //         .set('insecure', 'true')
        // })
       
        //     if (request.url != ApiService.saveLoginURL) {
				

        //         if (token == null || token == undefined) {
        //             console.log("token is null");
        //             this.router.navigate(['login']);
        //         }
		// 		else{
		// 			// request = request.clone({ headers: request.headers.set('Authorization', token) });
		// 			request = request.clone({
		// 				setHeaders: {
		// 					Authorization: `${token}`
		// 				}
		// 			});
		// 		}

               
        //     }
        return next.handle(request);
    }
}