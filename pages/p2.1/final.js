import ReactPlayer from "react-player";

const final = () => {
  return (
    <>
      <img className=" m-auto  w-[28vw]" src="/p1.2/final1.jpg" />
      <div className="grid place-content-center pb-10">
        <ReactPlayer
          width="50vw"
          height="50vw"
          url="https://vimeo.com/703545832"
          className="m-2"
          loop
        />
        <ReactPlayer
          width="50vw"
          height="50vw"
          url="https://vimeo.com/703545838"
          className="m-2"
          loop
        />
      </div>
    </>
  );
};

export default final;
