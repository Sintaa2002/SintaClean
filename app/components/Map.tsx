export default function MapEmbed() {
  const src = `https://www.google.com/maps?q=Zagreb Zagrebačka županija&z=10&output=embed`;

  return (
    <div className="w-full h-96">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google mapa Zagreba i Zagrebačke županije"
      />
    </div>
  );
}