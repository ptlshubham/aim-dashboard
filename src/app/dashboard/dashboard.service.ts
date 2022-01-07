import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

	apiUrl = `https://crm-api-dev.aiminspect.com/api/v1/crm/dashboard`;

	constructor(
	  private httpClient: HttpClient,
	) { 
		this.getUSState().subscribe(data => {
			
		});
	}

	public getUSState(): Observable<any> {
		return this.httpClient.get("./assets/JSON/US-State.json");
	
	  }
  getOverdueRequests(){
	let newParams =  {
		limit: 25,offset: 0,
		sortBy: 'confirmationNo',
		sortDirection: 'descending',
		export: false
	};
	  return this.httpClient.get(this.apiUrl+'/overdue-requests',{
		params: {
			limit: 25,offset: 0,
			sortBy: 'confirmationNo',
			sortDirection: 'descending',
			export: false
		}});
  }
}
