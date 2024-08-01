export default function AvatarComponent({ url }: { url: string }) {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <img
          className="rounded-full max-w-96 w-[70%]"
          src={url}
          alt={"avatar"}
        />
      </div>
    </>
  );
}
