export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white border border-stone-200 shadow-sm p-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-900">
            🚀 ClubOS
          </h1>

          <p className="mt-3 text-stone-500">
            AI Operating System for Student Clubs
          </p>
        </div>

        <div className="mt-10 space-y-5">

          <div>
            <label className="block mb-2 text-sm font-medium text-stone-700">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-800"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-stone-700">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-800"
            />
          </div>

          <button
            className="w-full rounded-xl bg-stone-900 py-3 text-white font-medium hover:bg-stone-800 transition"
          >
            Sign In
          </button>

        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          Powered by ClubOS
        </p>

      </div>
    </div>
  );
}