/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BtnRace {
    }
}
declare global {
    interface HTMLBtnRaceElement extends Components.BtnRace, HTMLStencilElement {
    }
    var HTMLBtnRaceElement: {
        prototype: HTMLBtnRaceElement;
        new (): HTMLBtnRaceElement;
    };
    interface HTMLElementTagNameMap {
        "btn-race": HTMLBtnRaceElement;
    }
}
declare namespace LocalJSX {
    interface BtnRace {
    }
    interface IntrinsicElements {
        "btn-race": BtnRace;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "btn-race": LocalJSX.BtnRace & JSXBase.HTMLAttributes<HTMLBtnRaceElement>;
        }
    }
}