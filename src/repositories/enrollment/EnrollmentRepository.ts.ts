import { Enrollment } from "@prisma/client";
import { EnrollmentModel } from "../../models/Enrollment/EnrollmentModel";
import { AbstractEnrollmentRepository } from "./AbstractEnrollmentRepository";
import prisma from "../../config/prismaDB";

export class EnrollmentRepositoryPG implements AbstractEnrollmentRepository {
  create(data: EnrollmentModel): Promise<Enrollment> {
    return prisma.enrollment.create({ data });
  }
  get(id: string): Promise<Enrollment | null> {
    return prisma.enrollment.findUnique({ where: { id } });
  }
  update(data: EnrollmentModel): Promise<Enrollment> {
    return prisma.enrollment.update({
      where: { id: data.id },
      data,
    });
  }
}
