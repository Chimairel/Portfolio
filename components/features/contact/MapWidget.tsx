export function MapWidget() {
  return (
    <div className="w-full h-64 md:h-80 relative bg-muted flex items-center justify-center font-mono text-muted-foreground overflow-hidden">
  
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.3861035506411!2d123.94626714990173!3d10.247251440899591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af1451c0809%3A0x415701b7e3ad5b0d!2sSr.%20San%20Roque!5e0!3m2!1sen!2sph!4v1774541492686!5m2!1sen!2sph"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale contrast-125 opacity-80"
      ></iframe>
      
      <div className="absolute top-4 left-4 bg-background text-foreground border-2 border-border px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_var(--color-border)] pointer-events-none">
         Tracking... [CORDOVA_CEBU]
      </div>
    </div>
  );
}