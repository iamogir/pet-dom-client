import {setupWorker} from "msw/browser";
import {petHandlers} from "./handlers/petHandlers.ts";

export const worker = setupWorker(...petHandlers);