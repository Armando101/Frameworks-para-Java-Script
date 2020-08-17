import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoSidebarComponent } from './grafico-sidebar.component';

describe('GraficoSidebarComponent', () => {
  let component: GraficoSidebarComponent;
  let fixture: ComponentFixture<GraficoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
