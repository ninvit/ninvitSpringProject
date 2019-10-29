import { DiaService } from '../dia.service';
import { Dia } from '../dia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-dia',
  templateUrl: './create-dia.component.html',
  styleUrls: ['./create-dia.component.css']
})
export class CreateDiaComponent implements OnInit {

  dia: Dia = new Dia();
  submitted = false;

  constructor(private diaService: DiaService,
              private router: Router) { }

  ngOnInit() {
  }

  newDia(): void {
    this.submitted = false;
    this.dia = new Dia();
  }

  save() {
    this.diaService.createDia(this.dia).pipe(take(1))
      .subscribe(() => {
        this.dia = new Dia();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/dias']);
  }
}
