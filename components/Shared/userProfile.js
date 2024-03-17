import { UserButton, auth } from "@clerk/nextjs";
const userProfile = () => {
//   console.log(auth().userId);
  return (
    <>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default userProfile;
