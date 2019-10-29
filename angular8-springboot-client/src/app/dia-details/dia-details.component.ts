import { Dia } from '../dia';
import { Component, OnInit, Input } from '@angular/core';
import { DiaService } from '../dia.service';
import { DiaListComponent } from '../dia-list/dia-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dia-details',
  templateUrl: './dia-details.component.html',
  styleUrls: ['./dia-details.component.css']
})
export class DiaDetailsComponent implements OnInit {

  id: number;
  dia: Dia;

  constructor(private route: ActivatedRoute,private router: Router,
    private diaService: DiaService) { }

  ngOnInit() {
    this.dia = new Dia();

    this.id = this.route.snapshot.params['id'];
    
    this.diaService.getDia(this.id)
      .subscribe(data => {
        console.log(data)
        this.dia = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['dias']);
  }
}
