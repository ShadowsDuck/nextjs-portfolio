// components/GlowBackground.jsx
export default function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,255,0.7),transparent)] blur-2xl -left-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,0,255,0.7),transparent)] blur-2xl -right-500" />
    </div>
  );
}
