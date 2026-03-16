import {setupWorker} from "msw/browser";
import {petHandlers} from "src/mocks//handlers/petHandlers";
import {userHandlers} from "src/mocks/handlers/userHandlers";

export const worker = setupWorker(...petHandlers, ...userHandlers);