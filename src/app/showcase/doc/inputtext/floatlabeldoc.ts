import { Component } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'floatlabel-doc',
    template: `
        <app-docsectiontext>
            <p>A floating label appears on top of the input field when focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <span class="p-float-label">
                <input pInputText id="username" [(ngModel)]="value" />
                <label for="username">Username</label>
            </span>
        </div>
        <app-code [code]="code" selector="input-text-floatlabel-demo"></app-code>
    `
})
export class FloatLabelDoc {
    value: string | undefined;

    code: Code = {
        basic: `<span class="p-float-label">
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</span>`,

        html: `
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <input pInputText id="username" [(ngModel)]="value" />
        <label for="username">Username</label>
    </span>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-floatlabel-demo',
    templateUrl: './input-text-floatlabel-demo.html'
})
export class InputTextFloatlabelDemo {
    value: string | undefined;
}`
    };
}
