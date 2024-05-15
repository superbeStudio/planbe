export const getUser = async () => {
  const res = await fetch("https://planbe-backend.p-e.kr/api/user/1");
  return res.json();
};

export default async function Goal() {
  const res = await getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Goal
      </div>
    </main>
  );
}
