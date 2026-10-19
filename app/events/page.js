<div className="relative h-56">
  <Image
    src={ev.cover}
    alt={ev.title}
    fill
    className="object-cover group-hover:scale-105 transition duration-500"
    sizes="(max-width: 768px) 80vw, 33vw"
  />
  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
    {ev.guests}
  </div>
</div>
<div className="p-5">
  <p className="text-brand-gold text-xs uppercase tracking-wider">{ev.type}</p>
  <h3 className="text-lg text-white mt-1">{ev.title}</h3>
  <p className="text-white/50 text-sm mt-1">
    {ev.location} · {new Date(ev.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
  </p>
</div>