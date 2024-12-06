import ProfileOneImage from "../image/img/profileone.png";

export default function Login() {
  const comment = {
    title: "Great Work",
    text: `“I think Educrat is the best theme I ever seen this year. Amazing
              design, easy to customize and a design quality superlative account
              on its cloud platform for the optimized performance”`,
    profie: ProfileOneImage,
    name: "Courtney Henry",
    job: "Web Designer",
  };

  const comments = Array(2).fill(comment);

  return (
    <div className="bg-[#F0F5F1] py-20">
      <div className="container flex items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl text-black text-center pb-20">
            What our Travelers are saying
          </h1>
          <div className="flex gap-2">
            {comments.map((i) => (
              <div className="flex flex-col gap-4 bg-white py-6 px-5">
                <h1 className="text-2xl text-[#155B50]">{i.title}</h1>
                <p className="text-black font-semibold">{i.text}</p>
                <div className="flex items-center gap-4">
                  <img src={i.profie} alt="" />
                  <div className="flex flex-col">
                    <p className="text-black text-lg font-semibold">{i.name}</p>
                    <p className="text-black">{i.job}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="bg-[#7C9C3F] flex flex-col items-center w-96 pb-40 pt-20">
            <h1 className="mb-10 text-black font-bold text-3xl">
              Let us get in touch
            </h1>
            <div className="flex flex-col w-full px-10 gap-5">
              <input
                type="email"
                placeholder="Email"
                className="py-3 px-7 bg-[#C2E0CB] rounded-xl text-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="py-3 px-7 bg-[#C2E0CB] rounded-xl text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
