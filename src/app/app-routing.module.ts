import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PenjualanComponent } from './penjualan/penjualan.component';
import { HomeComponent } from './home/home.component';
import { BarangComponent } from './barang/barang.component';
import { KategoriComponent } from './kategori/kategori.component';
import { SatuanComponent } from './satuan/satuan.component';
import { PenerimaanComponent } from './penerimaan/penerimaan.component';


const routes: Routes = [
  {path:'user',component:UserComponent,children:[
    {path:'buyer',component:PenjualanComponent}
  ]},
  {path:'admin',component:HomeComponent,children:[
    {path:'masterbarang',component:BarangComponent},
    {path:'masterkategori',component:KategoriComponent},
    {path:'satuan',component:SatuanComponent},
    {path:'penerimaan',component:PenerimaanComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
