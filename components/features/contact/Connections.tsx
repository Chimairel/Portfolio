export function Connections() {
  const cards = [
    {
      title: "Phone Number",
      value: "+63 920 126 4097",
      sub: "Available for calls or texts after class hours and if I'm not busy.",
      icon: "[☎]"
    },
    {
      title: "Email Address",
      value: "chimairelp@gmail.com",
      sub: "My primary inbox. Best for project inquiries, collaborations, and general questions.",
      icon: "[@]"
    },
    {
      title: "Location",
      value: "Cordova, Cebu", 
      sub: "Based in Cordova, Cebu, Philippines. Kakita ka anang kapilya? Likod sa atbang ana.",
      icon: "[⌖]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
      {cards.map((card, idx) => (
        <div 
          key={idx} 
          className="border-2 border-border p-6 shadow-[4px_4px_0px_0px_var(--color-border)] bg-card flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-border)] transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{card.icon}</span>
            <h3 className="font-bold uppercase tracking-widest border-b-2 border-border pb-1">
              {card.title}
            </h3>
          </div>
          <p className="text-lg font-bold">{card.value}</p>
          <p className="text-xs text-muted-foreground opacity-80 leading-relaxed">
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  );
}