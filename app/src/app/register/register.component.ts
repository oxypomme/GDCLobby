import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import PlayerActions from '../store/player/player.actions';
import { selectIsPlayerLogged } from '../store/player/player.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  isLogged$: Observable<boolean>;

  constructor(private store: Store<{ count: number }>, private router: Router) {
    this.isLogged$ = store.select(selectIsPlayerLogged);
  }

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged: boolean) => {
      if (isLogged) this.router.navigate(['/']);
    });
  }

  register() {
    this.store.dispatch(
      PlayerActions.register.request({
        credentials: { username: this.username, password: this.password },
      })
    );
  }
}
