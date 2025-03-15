import { NgModule } from '@angular/core';
import { BlasteroidsLicensesPage } from './blasteroids/blasteroids-licenses.page';
import { VortexLicensesPage } from './vortex/vortex-licenses.page';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './licenses.routes';

@NgModule({
    imports: [RouterLink, CommonModule, RouterModule.forChild(routes), BlasteroidsLicensesPage, VortexLicensesPage],
    providers: [],
    bootstrap: [],
})
export class LicensesModule {}
