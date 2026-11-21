// Icon wrapper: resolves to the design system's own Icon (Lucide names still work through its alias map).
function LucideIcon({ name, size = 22, style }) {
  const { Icon } = window.AleemDesignSystem_3de1ed;
  return <Icon name={name} size={size} style={style} />;
}
Object.assign(window, { LucideIcon });
