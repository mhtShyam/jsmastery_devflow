import { auth } from "@/auth";

const Home = async() => {
  const session = await auth();
  console.log(session)
  return (
    <div className="text-3xl font-black text-white">next js ultimate course</div>
  );
}

export default Home;
