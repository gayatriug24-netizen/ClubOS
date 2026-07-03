export default function TodaysOverview() {
  const stats = [
    {
      label: "Events Today",
      value: "03",
    },
    {
      label: "Pending Reports",
      value: "02",
    },
    {
      label: "Media Uploaded",
      value: "184",
    },
    {
      label: "Active Members",
      value: "72",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#E8DED2] bg-white p-5"
        >
          <p className="text-sm text-[#8A7A6B]">
            {item.label}
          </p>

          <h3 className="mt-2 text-3xl font-semibold text-[#2B2118]">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}