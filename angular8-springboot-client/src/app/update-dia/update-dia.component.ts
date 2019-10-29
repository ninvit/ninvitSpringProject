import { Component, OnInit } from '@angular/core';
import { Dia } from '../dia';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaService } from '../dia.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-update-dia',
  templateUrl: './update-dia.component.html',
  styleUrls: ['./update-dia.component.css']
})
export class UpdateDiaComponent implements OnInit {

  id: number;
  dia: Dia;

  constructor(private route: ActivatedRoute, private router: Router,
              private diaService: DiaService) { }

  ngOnInit() {
    this.dia = new Dia();

    this.id = this.route.snapshot.params.id;

    this.diaService.getDia(this.id)
      .subscribe(data => {
        console.log(data);
        this.dia = data;
      }, error => console.log(error));
  }

  updateDia() {
    this.diaService.updateDia(this.id, this.dia).pipe(take(1))
    .subscribe(() => {
      this.dia = new Dia();
      this.gotoList();
    }, error => console.log(error));
}

  onSubmit() {
    this.updateDia();
  }

  gotoList() {
    this.router.navigate(['/dias']);
  }
}
