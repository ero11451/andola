import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntoDetialsPage } from './into-detials.page';

describe('IntoDetialsPage', () => {
  let component: IntoDetialsPage;
  let fixture: ComponentFixture<IntoDetialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoDetialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntoDetialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
