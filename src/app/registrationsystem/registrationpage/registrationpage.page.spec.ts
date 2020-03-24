import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationpagePage } from './registrationpage.page';

describe('RegistrationpagePage', () => {
  let component: RegistrationpagePage;
  let fixture: ComponentFixture<RegistrationpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
