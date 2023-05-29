import { EnrollmentModel } from "../../models/Enrollment/EnrollmentModel";
import { Enrollment } from "@prisma/client";

export abstract class AbstractEnrollmentRepository {
  abstract create(data: EnrollmentModel): Promise<Enrollment>;
  abstract get(id: string): Promise<Enrollment | null>;
  abstract update(data: EnrollmentModel): Promise<Enrollment>;
}
