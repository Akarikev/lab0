import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

const { getUser } = getKindeServerSession();

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const user = await getUser();
  return <div>Hello! {user?.given_name}</div>;
};

export default page;
