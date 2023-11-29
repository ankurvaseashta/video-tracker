import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-stat-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stat-filters.component.html',
  styleUrl: './stat-filters.component.scss'
})

export class StatsFiltersComponent {
  filters:FormGroup<{
    search : FormControl<string | null>;
    region : FormControl<string | null>;
    date : FormControl<string | null>;
    age : FormControl<number | null>;
  }>

  constructor(fb:FormBuilder) {
    this.filters = fb.group({
      search: [''],
      region: ['', Validators.required],
      date:[''],
      age:[0]
    })
  }

  submit(){
    console.log('Forms Values ', this.filters.value);
  }

}
