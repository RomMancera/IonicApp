import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonAvatarPage } from './ion-avatar.page';

describe('IonAvatarPage', () => {
  let component: IonAvatarPage;
  let fixture: ComponentFixture<IonAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonAvatarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
