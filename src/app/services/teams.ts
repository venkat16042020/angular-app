import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Team } from '../model/teams/teams.type';

// Define the API response structure
interface ReqResResponse {
  data: Team[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://reqres.in/api/users?page=2';

  /**
   * Fetches teams and extracts the data array
   */
  getTeams(): Observable<Team[]> {
    return this.http.get<ReqResResponse>(this.apiUrl, {
      headers: {
        'x-api-key': 'free_user_3FqfQkDKIHcJ16Hi54eA6M2Jx8V',
        'Content-Type': 'application/json'
      }
    }).pipe(
      map(response => response.data)
    );
  }
}
