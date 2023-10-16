import { User } from "@clerk/nextjs/api";
import { currentUser } from "@clerk/nextjs";
import { serverClient } from "@/app/_trpc/serverClient";
import NewStoreForm from "@/components/form/NewStoreForm";

export default async function Home() {
  const user: User | null = await currentUser();

  if (user === null) {
    return <h1>Not logged in</h1>;
  }
  const { id } = user;

  const findUserStore = await serverClient.findUserStore(id);

  console.log(findUserStore);

  if (findUserStore === null) {

    return <NewStoreForm />
  }

}
