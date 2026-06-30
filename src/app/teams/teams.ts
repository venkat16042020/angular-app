import { Component, OnInit, inject } from '@angular/core';
import { TeamsService } from '../services/teams';
import { Team } from '../model/teams/teams.type';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.html',
  styleUrls: ['./teams.css'],
})
export class Teams implements OnInit {
  private teamsService = inject(TeamsService);
  teamsServiceData: Team[] = [];

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe({
      next: (data) => {
        this.teamsServiceData = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
