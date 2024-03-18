/* eslint-disable react-hooks/rules-of-hooks */
import { UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
const userProfile = () => {
  const { user } = useClerk();
  console.log(user?.emailAddresses[0]?.emailAddress);
  return (
    <>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default userProfile;
