import { Injectable } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import * as appEnums from '../enums/appEnums'
@Injectable({
    providedIn: 'root'
})
export class MessageHelperService {

    private options: GlobalConfig | undefined;

    constructor(
        private toastr: ToastrService
    ) { }

    showMessage(code: number, message: string) {
        if (code === appEnums.ResponseStatus.success) {
            this.toastr.success(message, 'Passion Care CRM', this.options);
        }
        else if (code === appEnums.ResponseStatus.warning) {
            this.toastr.warning(message, 'Passion Care CRM', this.options);
        }
        else if (code === appEnums.ResponseStatus.info) {
            this.toastr.info(message, 'Passion Care CRM', this.options);
        }
        else if (code === appEnums.ResponseStatus.fail) {
            this.toastr.error(message, 'Passion Care CRM', this.options);
        } else if (code != null) {
            this.toastr.error(message, 'Passion Care CRM', this.options);
        }
    }
}
