import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BarangComponent } from './barang/barang.component';
import { SatuanComponent } from './satuan/satuan.component';
import { KategoriComponent } from './kategori/kategori.component';
import { PenjualanComponent } from './penjualan/penjualan.component';
import { PenerimaanComponent } from './penerimaan/penerimaan.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    BarangComponent,
    SatuanComponent,
    KategoriComponent,
    PenjualanComponent,
    PenerimaanComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LandingpageComponent]
})
export class AppModule { }
