import { useState, useEffect } from "react";

const App = () => {
  const [url, setUrl] = useState<string>("");
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    if ("" === url) {
      setSrc("");
      return;
    }

    const urlParams = new URLSearchParams(new URL(url).search);
    const videoId = urlParams.get("v");

    if (!videoId) {
      setSrc("");
      return;
    }

    const embedUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    setSrc(embedUrl);
  }, [url]);

  return (
    <div className="m-10 p-10 bg-slate-600 rounded shadow">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-4 rounded w-full text-center text-white outline-none bg-slate-500"
        placeholder="Enter YouTube video URL"
      />

      {src !== "" && (
        <div className="mt-4 py-8 px-[350px] bg-slate-500 rounded shadow">
          <img src={src} alt="" className="w-full" />
        </div>
      )}
    </div>
  );
};

export default App;
