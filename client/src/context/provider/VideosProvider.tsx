import { VideosContext } from "../VideosContext";

export const VideoProvider = ({ children }: any) => {
  return (
    <VideosContext.Provider
      value={{
        hello: "world",
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
