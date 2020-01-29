import { NgModule } from '@angular/core';
import { ComponentsLibraryComponent } from './components-library.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ComponentsLibraryComponent, FooterComponent],
  imports: [
  ],
  exports: [ComponentsLibraryComponent]
})
export class ComponentsLibraryModule { }
