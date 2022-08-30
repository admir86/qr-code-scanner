import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrCodeScannerComponent } from './qr-code-scanner.component';

@NgModule({
  declarations: [QrCodeScannerComponent],
  imports: [CommonModule, ZXingScannerModule],
  exports: [QrCodeScannerComponent],
})
export class QrCodeScannerModule {}
