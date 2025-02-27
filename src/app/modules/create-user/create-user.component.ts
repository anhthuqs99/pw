import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-create-user',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './create-user.component.html',
	styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
	public userForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
		job: new FormControl('', Validators.required),
	});

	constructor(private userService: UserService) {}

	public async createNewUser(): Promise<void> {
		if (this.userForm.valid) {
			const userData = this.userForm.value as { name: string; job: string };
			try {
				await this.userService.createUser(userData);
			} catch (error) {
				console.log(error);
			}
		}
	}
}
