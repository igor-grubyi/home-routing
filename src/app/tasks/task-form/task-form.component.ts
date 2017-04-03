import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Task } from './../../models/task';
import { TaskArrayService } from './../services/task-array.service';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  task: Task;
  private sub: Subscription;

  constructor(
    private tasksService: TaskArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.task = new Task(null, '', null, null);
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      // NaN - for new task, id - for edit
      if (id) {
        this.tasksService.getTask(id)
          .then(task => this.task = Object.assign({}, task))
          .catch((err) => console.log(err));
      }
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveTask() {
    const task = new Task(
      this.task.id,
      this.task.action,
      this.task.priority,
      this.task.estHours
    );

    if (task.id) {
      this.tasksService.updateTask(task);
    } 
    else {
      this.tasksService.addTask(task);
    }
    
    this.router.navigate(['home']);
  }

  goBack(): void {
    this.router.navigate(['home']);
  }
}

