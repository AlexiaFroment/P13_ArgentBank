import { User } from "@/_interfaces/Interface"

type IdentityProps = Pick<User, "firstName" | "lastName">

export const Identity: React.FC<IdentityProps> = ({ firstName, lastName }) => {
  return (
    <h2>
      {firstName} {lastName} !
    </h2>
  )
}
