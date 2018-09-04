import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroService } from './registro/registro.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './registro/form.component';
import { FormsModule } from '@angular/forms';
import { SalidaComponent } from './registro/salida.component';



const routes: Routes = [
  {path: '', redirectTo: '/registro', pathMatch: 'full'},
  {path: 'registro', component: RegistroComponent},
  {path: 'registro/form', component: FormComponent},
  {path: 'registro/form/:placa', component: FormComponent},
  {path: 'registro/salida', component: SalidaComponent},
  {path: 'registro/salida/:placa', component: SalidaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    FormComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
