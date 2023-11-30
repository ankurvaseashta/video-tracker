import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stat-filters.component.html',
  styleUrl: './stat-filters.component.scss',
})
export class StatsFiltersComponent {
  filters: FormGroup<{
    search: FormControl<string | null>;
    region: FormControl<string | null>;
    startdate: FormControl<string | null>;
    enddate: FormControl<string | null>;
    ageGroup1: FormControl<any | null>;
    ageGroup2: FormControl<any | null>;
    ageGroup3: FormControl<any | null>;
    ageGroup4: FormControl<any | null>;
  }>;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      search: [''],
      region: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      ageGroup1: [''],
      ageGroup2: [''],
      ageGroup3: [''],
      ageGroup4: [''],
    });
  }

  submit() {
    console.log('Forms Values ', this.filters.value);
  }
}
