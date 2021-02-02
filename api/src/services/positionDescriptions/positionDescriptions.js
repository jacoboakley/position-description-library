import { db } from 'src/lib/db'

export const positionDescriptions = () => {
  return db.positionDescription.findMany()
}

export const positionDescription = ({ id }) => {
  return db.positionDescription.findUnique({
    where: { id },
  })
}

export const createPositionDescription = ({ input }) => {
  return db.positionDescription.create({
    data: input,
  })
}

export const updatePositionDescription = ({ id, input }) => {
  return db.positionDescription.update({
    data: input,
    where: { id },
  })
}

export const deletePositionDescription = ({ id }) => {
  return db.positionDescription.delete({
    where: { id },
  })
}
