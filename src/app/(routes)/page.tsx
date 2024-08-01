import AvatarComponent from "../_components/Avatar";
import { AVATAR } from "@/app/_constants/images";
import Intro from "../_components/Intro";

export default function Home() {
  return (
    <main className="">
      <AvatarComponent url={AVATAR.main} />
      <Intro />
    </main>
  );
}
