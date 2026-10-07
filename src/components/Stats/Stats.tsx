import "./Stats.css";

type Stat = {
  id: number;
  value: string;
  label: string;
};

function Stats() {
  const stats: Stat[] = [
    {
      id: 1,
      value: "1,200+",
      label: "Professional usta",
    },
    {
      id: 2,
      value: "5,000+",
      label: "Bajarilgan xizmat",
    },
    {
      id: 3,
      value: "4.9/5",
      label: "O‘rtacha reyting",
    },
    {
      id: 4,
      value: "98%",
      label: "Mamnun mijoz",
    },
  ];

  return (
    <section className="stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.id}>
          <strong>{stat.value}</strong>

          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

export default Stats;