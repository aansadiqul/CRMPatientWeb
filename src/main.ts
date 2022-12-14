import { LicenseManager } from '@ag-grid-enterprise/all-modules';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

LicenseManager.setLicenseKey("CompanyName=Nineyard Solutions LLC,LicensedApplication=Nineyard,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-024289,ExpiryDate=15_February_2023_[v2]_MTY3NjQxOTIwMDAwMA==e247949a9ce968dfe5fd6a05bfdad3f6");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
