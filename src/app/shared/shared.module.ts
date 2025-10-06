

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ContainsPipe } from './pipes/contains.pipe';




@NgModule({
  declarations: [
    HighlightDirective,
    ContainsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective  ,// ← Important : exporter la directive
    ContainsPipe // ← Important : exporter le pipe
  ]
})
export class SharedModule { }



