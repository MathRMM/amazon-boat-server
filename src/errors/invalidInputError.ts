import httpStatus from "http-status";
import { ZodError } from "zod";

export function invalidInput(error: ZodError){
    return {
        status: httpStatus.BAD_REQUEST,
        message: error.message
    }
}