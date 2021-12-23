import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from "src/app/api.service";
import { LoginUser } from "./login.model";

@Injectable({
    providedIn: "root",
})
export class LoginService {
    constructor(private httpClient: HttpClient) { }

    login(data: LoginUser): Observable<any> {
        return this.httpClient.post<any>(ApiService.saveLoginURL, data);
    }
    // saveEventsList(admin: CalendarEvents): Observable<any> {
    //     return this.httpClient.post<any>(ApiService.saveCalendarEventsURL, admin);
    // }

    // getStdList(): Observable<CalendarEvents[]> {
    //     return this.httpClient.get<any>(ApiService.getCalendarEventsURL);
    // }
    // removeEventData(id) {
    //     let bnr = {
    //         id: id
    //     }
    //     return this.httpClient.post<any>(ApiService.removeEventListURL, bnr);
    // }
    // saveAttandanceList(admin): Observable<any> {
    //     return this.httpClient.post<any>(ApiService.saveStudentAttandanceURL, admin);
    // }
    // getAttandanceList(id): Observable<any> {
    //     let data = {
    //         id: id
    //     }
    //     return this.httpClient.post<any>(ApiService.getStudentAttandanceURL, data);
    // }


}
