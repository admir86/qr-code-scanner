import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss'],
})
export class QrCodeScannerComponent implements OnInit {
  /** Titel - kann für den Benutzer nochmals als Info dienen was er scannen muss. */
  @Input()
  public title!: string;

  /** Event wenn der Benutzer den Scanner schliessen will. */
  @Output()
  public close: EventEmitter<void> = new EventEmitter<void>();

  /** Event wenn der Scan erfolgreich abgeschlossen ist. Der Wert hinter dem QR Code wird als String übergeben. */
  @Output()
  public scanSuccess: EventEmitter<string> = new EventEmitter<string>();

  /** Flag ob Kamera vorhanden. */
  public get hasCamera():boolean {
    return this.cameras?.length > 0
  }


  public barcodeFormat: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  public cameras: MediaDeviceInfo[] = [];



  constructor() {}

  ngOnInit(): void {}

  public onCamerasFound(cameras: MediaDeviceInfo[]): void {
    this.cameras = cameras;
  }


  /**
   * Event Handler vom Scanner, wird gefeuert, wenn der Scann erfolgreich durchgeführt werden konnte.
   * @param value Wert aus dem QR Code.
   */
  public onScanSuccess(value: string): void {
    this.scanSuccess.emit(value);
  }

  /** Event Handler von den Buttons die zum Schliessen des Scanner verwendet werden können. */
  public onCloseClick(): void {
    this.close.emit();
  }
}
