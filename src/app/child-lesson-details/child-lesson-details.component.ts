import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-lesson-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-lesson-details.component.html',
  styleUrl: './child-lesson-details.component.css'
})
export class ChildLessonDetailsComponent {
  @Input() lesson: any;
 
}
