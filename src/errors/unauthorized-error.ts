import httpStatus from "http-status";

export function unauthorizedError(message: string){
  return {
    name: "UnauthorizedError",
    status: httpStatus.UNAUTHORIZED,
    message,
  };
}
