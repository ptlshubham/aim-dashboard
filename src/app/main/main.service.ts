import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
	 apiUrl = `https://crm-api-dev.aiminspect.com/api/v1/crm/dashboard`;

  constructor(
	private httpClient: HttpClient,
  ) { }

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
