import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";
function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mx-auto w-full max-w-lg p-3">
      <h1 className="my-7 text-clip text-3xl font-semibold">profile</h1>
      <form className="flex flex-col gap-4">
        <div className="h-32 w-32 cursor-pointer self-center overflow-hidden rounded-full shadow-md">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="h-full w-full rounded-full border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="mt-5 flex justify-between text-red-500">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default DashProfile;
