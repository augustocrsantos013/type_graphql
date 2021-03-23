import { Arg, Mutation, Query, Resolver } from "type-graphql";
//import {salvar_user} from "./salvarUser"
import { User } from "../entity/User"

@Resolver()
export class resolverUser {

  @Query(() => String)
  async hello() {
    return "query que funciona";
  }

  @Mutation(() => String)
  async register(
    @Arg("nome") nometg: string,
    @Arg("email") emailtg: string

  ) {
    const user = new User()
    user.email = emailtg;
    user.nome = nometg;
    await user.save();

    const valor: string = "valor de retorno"
    return valor;
  }


}
