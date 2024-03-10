import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UpdateService } from '../services/update.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [UpdateService],
})
export class RootServiceModule {}
