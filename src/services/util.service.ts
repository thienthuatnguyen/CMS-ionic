import { Injectable } from "@angular/core";
import { Device } from "@ionic-native/device";
import { Platform } from "ionic-angular";

@Injectable()
export class Utils {
    constructor(
        private device: Device,
        private platform: Platform
    ) {

    }
    isIOS() {
        return this.device.platform === 'iOS';
    }
    isAndroid() {
        return this.device.platform === 'Android';
    }
    isBrowser() {
        return (this.platform.is('core') || this.platform.is('mobileweb'))
    }

    dataURIToBlob(dataURI: string) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var bb = new Blob([ab]);
        return bb;
    }
}