import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });



  //Probando evento click de button enviar
  it("Testing de login desde boton Login True", () => {
    component.model.username = "user1"
    component.model.password = "pass1"

    const btnEnviar = fixture.debugElement.query((By.css("#btnEnviar")))
    btnEnviar.nativeElement.click();

    expect(component.login).toEqual(true)
  })

  it("Testing de login desde boton Login False", () => {
    component.model.username = "zzz"
    component.model.password = "zzz"

    const btnEnviar = fixture.debugElement.query((By.css("#btnEnviar")))
    btnEnviar.nativeElement.click();

    expect(component.login).toEqual(false)
  })

});
