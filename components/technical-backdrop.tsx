export function TechnicalBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="technical-grid absolute inset-0" />
      <div className="absolute -right-[15%] -top-[35%] size-[52rem] rounded-full bg-signal-orange/[0.07] blur-[120px]" />
      <div className="absolute left-[8%] top-[21%] h-px w-[84%] bg-slate/25" />
      <div className="absolute bottom-[18%] left-[8%] h-px w-[84%] bg-slate/25" />
    </div>
  );
}
