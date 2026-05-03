  import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
  import { DynamicData } from '../../Services/dynamic-data';
  import { CommonModule } from '@angular/common';
  import { User } from '../../Interfaces/User/user';
  import { Subscription } from 'rxjs';

  @Component({
    selector: 'app-dashboard',
    imports: [CommonModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
  })
  export class Dashboard implements OnInit , OnDestroy {
  isLoading = true;
    users:User[]=[];
    subscriberData!: Subscription;

    constructor(private dynamicData:DynamicData,  private cd: ChangeDetectorRef){}

    ngOnDestroy(): void {
      if (this.subscriberData) {
    this.subscriberData.unsubscribe();
  }
    }

    ngOnInit(): void {
      this.getAllUsers();
    }

    getCount(role: string): number {
    return this.users.filter(u => u.role === role).length;
  }

  getAllUsers(){
    this.subscriberData = this.dynamicData.getAllUsers().subscribe(res => {
      this.users = res;
      this.isLoading = false;
      this.cd.detectChanges(); 
      console.log(this.users);
    });
  }

  DeleteUser(id: number) {
    this.dynamicData.DeleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
      },
      error: (err) => {
        console.error('Delete failed:', err); 
      }
    });
  }

  }
