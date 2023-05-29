import httpStatus from "http-status";

export function conflictError(message: string) {
  return {
    name: "ConflictError",
    status: httpStatus.CONFLICT,
    message,
  };
}
