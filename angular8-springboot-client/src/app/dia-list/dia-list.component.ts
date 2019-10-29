import { DiaService } from '../dia.service';
import { Dia } from '../dia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dia-list',
  templateUrl: './dia-list.component.html',
  styleUrls: ['./dia-list.component.css']
})
export class DiaListComponent implements OnInit {

  dias: Dia[];

  constructor(private diaService: DiaService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  ngOnDestroy() {
  }

  async reloadData() {
    this.dias = await this.diaService.getDiasList();
    console.log(this.dias);
  }

  deleteDia(id: number) {
    this.diaService.deleteDia(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  diaDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateDia(id: number) {
    this.router.navigate(['update', id]);
  }
}
