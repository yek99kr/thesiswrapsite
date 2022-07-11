import ReactPlayer from "react-player";

const final = () => {
  return (
    <>
      <img className=" m-auto pb-10 w-[28vw]" src="/p1.1/final1.jpg" />

      <div className="grid place-content-center pb-10">
        <ReactPlayer
          loop
          controls={true}
          width="50vw"
          height="50vw"
          url="https://vimeo.com/684258767"
        />
        <ReactPlayer
          loop
          controls={true}
          width="50vw"
          height="50vw"
          url="https://vimeo.com/684258795"
        />
      </div>

      <img className="m-auto pb-10 w-[28vw]" src="/p1.1/final2.jpg" />

      <div className="grid grid-cols-3 w-full pb-10">
        <ReactPlayer
          loop
          controls={true}
          width="100%"
          url="https://vimeo.com/684258810"
        />
        <ReactPlayer
          loop
          controls={true}
          width="100%"
          url="https://vimeo.com/684258834"
        />
        <ReactPlayer
          loop
          controls={true}
          width="100%"
          url="https://vimeo.com/684258847"
        />
      </div>
    </>
  );
};

export default final;
