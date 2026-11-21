import * as React from 'react';

// ---- ChatBubble (components/ChatBubble/ChatBubble.d.ts) ----
export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Who is speaking. assistant: a neutral AI. aleem: Aleem himself (AIUX tile). cory: the admissions case-study mascot. system: a centred quiet note. @default "cory" */
  from?: 'assistant' | 'aleem' | 'cory' | 'user' | 'system';
  /** Message content. */
  children?: React.ReactNode;
  /** Optional timestamp shown under the bubble. */
  time?: React.ReactNode;
  /** Reserve/show the avatar gutter. @default true */
  showAvatar?: boolean;
  /** Delivery state for user messages: sending dims the bubble, failed shows a red edge, "Not sent" and Retry. */
  status?: 'sending' | 'sent' | 'failed';
  /** Called by the Retry link when status is failed. */
  onRetry?: () => void;
  /** @default "Retry" */
  retryLabel?: string;
  /** @default "Not sent" */
  failedLabel?: string;
}

/**
 * One message in the Aleem chat widget, mascot bubble at inline-start or brand-gradient
 * user bubble at inline-end; mirrors automatically in RTL. Carries delivery status.
 */
export function ChatBubble(props: ChatBubbleProps): JSX.Element;

// ---- FeatureCard (components/FeatureCard/FeatureCard.d.ts) ----
/**
 * Benefit card with icon tile, heading, copy and capability tags, lifts on hover.
 * Used in the "Why teams choose Aleem" grid.
 * @startingPoint section="Content" subtitle="Benefit card with icon + tags" viewport="380x280"
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node shown in the tinted tile (e.g. <Icon name="zap" size={24} />). */
  icon?: React.ReactNode;
  /** Card heading. */
  title: React.ReactNode;
  /** Body copy. */
  children?: React.ReactNode;
  /** Short capability tags listed at the foot of the card. */
  tags?: string[];
}

/**
 * Benefit card with icon tile, heading, copy and capability tags.
 */
export function FeatureCard(props: FeatureCardProps): JSX.Element;

// ---- StatCard (components/StatCard/StatCard.d.ts) ----
/**
 * Headline metric block: the big-number treatment used across hero,
 * "How Aleem Works", and ROI sections.
 * @startingPoint section="Content" subtitle="Big-number brand metric" viewport="280x150"
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric, e.g. "<60s", "94%", "$2.4M". */
  value: React.ReactNode;
  /** Caption under the number. */
  label: React.ReactNode;
  /** Optional smaller line below the label. */
  sub?: React.ReactNode;
  /** Paint the number with the brand gradient. @default false */
  gradient?: boolean;
  /** "start" follows reading direction ("left" is an alias). @default "start" */
  align?: 'start' | 'left' | 'center';
}

/**
 * Headline metric block with optional gradient number.
 */
export function StatCard(props: StatCardProps): JSX.Element;

// ---- Testimonial (components/Testimonial/Testimonial.d.ts) ----
export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  /** Headline result, e.g. "847%". */
  metric?: React.ReactNode;
  /** Label beside the metric, e.g. "ROI in Year 1". */
  metricLabel?: React.ReactNode;
  /** The quotation (no surrounding quote marks needed). */
  quote: React.ReactNode;
  /** Person's name. */
  name: React.ReactNode;
  /** Title / institution. */
  role?: React.ReactNode;
  /** Optional headshot URL; falls back to initials. */
  photo?: string;
}

/**
 * Customer testimonial with a leading gradient metric and attribution.
 */
export function Testimonial(props: TestimonialProps): JSX.Element;

// ---- TypingIndicator (components/TypingIndicator/TypingIndicator.d.ts) ----
export interface TypingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Announced to screen readers. @default "Aleem is typing" */
  label?: React.ReactNode;
  /** @default true */
  showAvatar?: boolean;
  /** Avatar kind of whoever is typing. @default "cory" */
  avatar?: 'assistant' | 'aiux' | 'cory';
}

/** Three pulsing dots in a Aleem bubble while a reply is being composed. */
export function TypingIndicator(props: TypingIndicatorProps): JSX.Element;

// ---- Avatar (components/Avatar/Avatar.d.ts) ----
export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL (used when kind is "image"). */
  src?: string;
  /** Name, drives initials fallback and alt text. */
  name?: string;
  /** What to render. aiux: the AIUX logo tile (Aleem himself). assistant: a neutral AI spark on the brand gradient. cory / cory-light: the admissions case-study mascot. @default "cory" */
  kind?: 'aiux' | 'assistant' | 'cory' | 'cory-light' | 'image' | 'initials';
  /** Pixel size (square). @default 40 */
  size?: number | string;
  /** Add a subtle separating ring. @default false */
  ring?: boolean;
  /** Presence dot at the corner. */
  status?: 'online' | 'away' | 'busy' | 'offline';
  /** Accessible text for the dot. @default status */
  statusLabel?: string;
}

/**
 * Rounded-tile avatar. Defaults to the dark Aleem mascot so the assistant
 * reads consistently; also supports photos (`kind="image"`) and initials.
 * A photo that fails to load falls back to initials automatically.
 */
export function Avatar(props: AvatarProps): JSX.Element;

// ---- Badge (components/Badge/Badge.d.ts) ----
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "brand" */
  tone?: 'brand' | 'cyan' | 'success' | 'warning' | 'danger' | 'neutral' | 'ink' | 'onInk';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Pill-shaped status / metric label.
 */
export function Badge(props: BadgeProps): JSX.Element;

// ---- Button (components/Button/Button.d.ts) ----
/**
 * Aleem call-to-action button, pill-shaped with soft elevation.
 * @startingPoint section="Core" subtitle="Pill CTA with brand-gradient primary" viewport="460x130"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'ink' | 'secondary' | 'ghost' | 'danger' | 'dangerGhost' | 'onInk' | 'onInkSolid';
  /** Control size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Node before the label (inline-start: left in LTR, right in RTL). Preferred over iconLeft. */
  iconStart?: React.ReactNode;
  /** Node after the label (inline-end). Preferred over iconRight. */
  iconEnd?: React.ReactNode;
  /** Alias of iconStart, kept for compatibility. */
  iconLeft?: React.ReactNode;
  /** Alias of iconEnd, kept for compatibility. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** Show a spinner and block interaction. Under reduced motion: static dots + visible label. @default false */
  loading?: boolean;
  /** Screen-reader text while loading. @default "Loading" */
  loadingLabel?: string;
  /** Render as an anchor pointing here (keeps button styling). */
  href?: string;
  children?: React.ReactNode;
}

/**
 * Aleem CTA button: `primary` carries the AA-safe blue→cyan gradient
 * (`--gradient-brand-deep`). Hover tints, keyboard focus shows a ring,
 * press scales to 0.97. Use one primary per view.
 */
export function Button(props: ButtonProps): JSX.Element;

// ---- Chip (components/Chip/Chip.d.ts) ----
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected / active state (solid navy). @default false */
  selected?: boolean;
  /** Called with the next selected value when clicked. */
  onToggle?: (next: boolean, e: React.MouseEvent) => void;
  /** Leading icon. */
  icon?: React.ReactNode;
  /** Show a trailing × remove button (its own focusable control). @default false */
  removable?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  /** aria-label of the remove button. @default "Remove {label}" */
  removeLabel?: string;
  /** Dim and block interaction. @default false */
  disabled?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

/**
 * Selectable pill for filters and tags. Use Badge for read-only labels.
 */
export function Chip(props: ChipProps): JSX.Element;

// ---- IconButton (components/IconButton/IconButton.d.ts) ----
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name, required. */
  label: string;
  /** @default "secondary" */
  variant?: 'primary' | 'ink' | 'secondary' | 'ghost' | 'onInk';
  /** 36 / 44 / 52px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Ghost only: pressed/active tint. @default false */
  active?: boolean;
  /** Dim and block interaction. @default false */
  disabled?: boolean;
  /** Spinner replaces the icon; interaction blocked. @default false */
  loading?: boolean;
  /** Screen-reader text while loading. @default "Loading" */
  loadingLabel?: string;
  /** The icon. */
  children?: React.ReactNode;
}

/**
 * Round icon-only button (close, play, menu, theme toggle). 44px default hit target.
 */
export function IconButton(props: IconButtonProps): JSX.Element;

// ---- Alert (components/Alert/Alert.d.ts) ----
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Meaning of the message. danger uses role=alert (assertive); others role=status. @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Short bold lead line. */
  title?: React.ReactNode;
  /** Body copy. One or two sentences; say what happened and what to do next. */
  children?: React.ReactNode;
  /** Buttons rendered under the copy (Button size="sm" variant="secondary" or "ghost"). */
  action?: React.ReactNode;
  /** Show a dismiss button that calls this. */
  onDismiss?: () => void;
  /** @default "Dismiss" */
  dismissLabel?: string;
  /** Replace the tone glyph. */
  icon?: React.ReactNode;
  /** Tighter padding for use inside cards and forms. @default false */
  compact?: boolean;
}

/** Inline feedback banner on tinted feedback surfaces (`--surface-*` / `--border-*` / `--text-*` per tone). Works in both themes. */
export function Alert(props: AlertProps): JSX.Element;

export interface FeedbackIconProps { tone?: 'info' | 'success' | 'warning' | 'danger'; size?: number; }
/** The shared 20px tone glyph used by Alert, Toast and Dialog. */
export function FeedbackIcon(props: FeedbackIconProps): JSX.Element;

// ---- Dialog (components/Dialog/Dialog.d.ts) ----
export interface DialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Render when true; unmounts when false. */
  open: boolean;
  /** Escape, scrim click and the close button call this. */
  onClose?: () => void;
  /** Heading (h2, aria-labelledby). */
  title?: React.ReactNode;
  /** One-line context under the title (aria-describedby). */
  description?: React.ReactNode;
  /** Body: form fields, content. */
  children?: React.ReactNode;
  /** Buttons, end-aligned. Secondary first, then the one primary. */
  actions?: React.ReactNode;
  /** Panel width 420 / 560 / 720. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** danger adds the red glyph tile for destructive confirms. @default "default" */
  tone?: 'default' | 'danger';
  /** Allow Escape / scrim / × to close. Set false while a submit is in flight. @default true */
  dismissible?: boolean;
  /** @default "Close" */
  closeLabel?: string;
  /** Element to focus on open (defaults to the first field or button). */
  initialFocusRef?: React.RefObject<HTMLElement>;
}

/** Accessible modal: --z-modal scrim, focus trap, Escape, focus return, scroll lock, enter animation. */
export function Dialog(props: DialogProps): JSX.Element | null;

// ---- EmptyState (components/EmptyState/EmptyState.d.ts) ----
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** assistant: AI spark tile + first-person copy. aleem: AIUX tile. cory: admissions mascot. neutral: icon tile + product copy. @default "cory" */
  voice?: 'assistant' | 'aleem' | 'cory' | 'neutral';
  /** Icon for voice="neutral" (e.g. <Icon name="search" />). Ignored for cory. */
  icon?: React.ReactNode;
  /** Spot illustration instead of the mascot tile: empty, search, error, offline, success, not-found. Overrides voice art. */
  scene?: 'empty' | 'search' | 'error' | 'offline' | 'success' | 'connect' | 'invite' | 'launch' | 'not-found';
  /** What is empty, as a short statement. */
  title?: React.ReactNode;
  /** Why, and what fills it. One or two sentences. */
  children?: React.ReactNode;
  /** The one primary action that fills the space. */
  action?: React.ReactNode;
  /** Optional quieter alternative (ghost / secondary). */
  secondaryAction?: React.ReactNode;
  /** sm for list and panel insets. @default "md" */
  size?: 'sm' | 'md';
  /** card draws a dashed frame; plain is bare. @default "card" */
  variant?: 'card' | 'plain';
  /** On-ink colours for navy panels. @default false */
  onInk?: boolean;
}

/** Empty / first-run / no-results block: mascot or icon, title, one line, one action. */
export function EmptyState(props: EmptyStateProps): JSX.Element;

// ---- Toast (components/Toast/Toast.d.ts) ----
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** One inline action, e.g. <Button size="sm" variant="onInk">Undo</Button>. */
  action?: React.ReactNode;
  /** Called when the timer ends or the user dismisses. Required for auto-dismiss. */
  onDismiss?: () => void;
  /** Milliseconds before auto-dismiss; 0 keeps it until dismissed. Pauses on hover/focus. @default 6000 */
  duration?: number;
  /** @default "Dismiss" */
  dismissLabel?: string;
}

/** Brief post-action confirmation on an ink surface (theme-stable). Place inside <ToastRegion>. */
export function Toast(props: ToastProps): JSX.Element;

export interface ToastRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which bottom corner. @default "end" */
  position?: 'start' | 'center' | 'end';
  /** aria-label of the region. @default "Notifications" */
  label?: string;
  children?: React.ReactNode;
}

/** Fixed aria-live stack for Toasts at --z-toast. One per page. */
export function ToastRegion(props: ToastRegionProps): JSX.Element;

// ---- Tooltip (components/Tooltip/Tooltip.d.ts) ----
export interface TooltipProps {
  /** The short text shown. 1 to 4 words; never essential instructions. */
  label: React.ReactNode;
  /** Exactly one focusable element. Receives aria-describedby. */
  children: React.ReactElement;
  /** @default "top" */
  placement?: 'top' | 'bottom';
  /** Show delay in ms. @default 250 */
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

/** Ink tooltip on hover and keyboard focus, centred over the trigger, Escape to hide. */
export function Tooltip(props: TooltipProps): JSX.Element;

// ---- Checkbox (components/Checkbox/Checkbox.d.ts) ----
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message (replaces hint, red border, aria-invalid). For required consents. */
  error?: React.ReactNode;
  /** Controlled value. */
  checked?: boolean;
  /** @default false */
  defaultChecked?: boolean;
  /** Mixed state (dash). @default false */
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Labelled checkbox, 20px box, brand-blue fill, focus ring, indeterminate support. */
export function Checkbox(props: CheckboxProps): JSX.Element;

// ---- Input (components/Input/Input.d.ts) ----
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Field label. */
  label?: React.ReactNode;
  /** Helper text under the field. */
  hint?: React.ReactNode;
  /** Error message (overrides hint, turns the field red). */
  error?: React.ReactNode;
  /** Warning message (amber border): valid but worth a second look, e.g. a non-.edu email. */
  warning?: React.ReactNode;
  /** Success message (green border). */
  success?: React.ReactNode;
  /** Validating / looking up: spinner at inline-end, aria-busy. @default false */
  loading?: boolean;
  /** Disable the field. @default false */
  disabled?: boolean;
  /** Icon inside the field at inline-start (follows reading direction). */
  iconStart?: React.ReactNode;
  /** Icon inside the field at inline-end. */
  iconEnd?: React.ReactNode;
  /** Alias of iconStart. */
  iconLeft?: React.ReactNode;
  /** Alias of iconEnd. */
  iconRight?: React.ReactNode;
  /** Show a required asterisk. @default false */
  required?: boolean;
  /** Render a multi-line textarea. @default false */
  multiline?: boolean;
}

/**
 * Labelled text field with blue focus ring, matches the demo-request forms.
 */
export function Input(props: InputProps): JSX.Element;

// ---- Select (components/Select/Select.d.ts) ----
export interface SelectOption { value: string; label: React.ReactNode; disabled?: boolean; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Success message (green border). */
  success?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  /** Options are being fetched: disabled, spinner, loadingMessage placeholder. @default false */
  loading?: boolean;
  /** @default "Loading…" */
  loadingMessage?: string;
  /** Shown (disabled) when options is empty. @default "No options yet" */
  emptyMessage?: string;
  /** Shown as a disabled first option when no value is set. */
  placeholder?: string;
  /** Strings or {value,label} objects. */
  options: Array<string | SelectOption>;
}

/** Native select dressed like Input, same label/hint/error/focus treatment. */
export function Select(props: SelectProps): JSX.Element;

// ---- Toggle (components/Toggle/Toggle.d.ts) ----
export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message (replaces hint, red track border). E.g. "Couldn't save. Try again." */
  error?: React.ReactNode;
  /** Controlled value. */
  checked?: boolean;
  /** @default false */
  defaultChecked?: boolean;
  disabled?: boolean;
  /** Pending: knob shows a spinner, clicks ignored, aria-busy. Use while the setting saves. @default false */
  loading?: boolean;
  /** Screen-reader text while loading. @default "Saving" */
  loadingLabel?: string;
  onChange?: (checked: boolean, e: React.MouseEvent) => void;
  /** 36×20 / 44×24. @default "md" */
  size?: 'sm' | 'md';
  /** Label after the switch (end) or before it (start, for settings rows). Follows reading direction. "left"/"right" are aliases. @default "end" */
  labelPosition?: 'start' | 'end' | 'left' | 'right';
}

/** Switch (role="switch") for settings that apply immediately. Gradient when on. */
export function Toggle(props: ToggleProps): JSX.Element;

// ---- Icon (components/Icon/Icon.d.ts) ----
export type IconName =
  | 'check' | 'close' | 'plus' | 'minus' | 'menu' | 'more' | 'more-vertical'
  | 'arrow-right' | 'arrow-left' | 'arrow-up' | 'arrow-down' | 'arrow-up-right' | 'arrow-right-left'
  | 'chevron-down' | 'chevron-up' | 'chevron-right' | 'chevron-left' | 'external-link' | 'log-in' | 'log-out'
  | 'download' | 'upload' | 'refresh' | 'repeat' | 'search' | 'filter' | 'settings' | 'copy' | 'pencil' | 'trash' | 'link' | 'paperclip' | 'list' | 'grid' | 'loader'
  | 'message' | 'messages' | 'message-dots' | 'send' | 'mail' | 'phone' | 'phone-incoming' | 'phone-call' | 'mic' | 'headset' | 'video' | 'bell' | 'bell-off' | 'inbox' | 'volume' | 'mute' | 'wifi-off'
  | 'clock' | 'timer' | 'calendar' | 'calendar-check' | 'zap' | 'sparkles' | 'target' | 'lightbulb' | 'brain' | 'plug' | 'rocket'
  | 'user' | 'users' | 'graduation-cap' | 'building' | 'home' | 'pin' | 'globe' | 'heart' | 'star' | 'thumbs-up' | 'eye' | 'pointer'
  | 'file' | 'file-plus' | 'file-text' | 'clipboard-list' | 'clipboard-check' | 'chart' | 'trending-up' | 'dollar' | 'percent' | 'tag' | 'image' | 'bookmark' | 'lock' | 'shield'
  | 'info' | 'help' | 'warning' | 'alert' | 'check-circle' | 'x-circle'
  | 'sun' | 'moon' | 'play' | 'pause';

export interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'name'> {
  /** Icon name from the Aleem set. Common Lucide names (x, refresh-cw, messages-square, alert-triangle...) resolve via aliases. */
  name: IconName | string;
  /** Pixel size (square). 16 inline with text, 20 in controls, 24 in feature tiles, 32 in hero tiles. @default 20 */
  size?: number;
  /** Draw the 20% currentColor tint under the stroke. Turn off at 16px or on busy backgrounds. @default true */
  duotone?: boolean;
  /** Stroke width in grid units. 1.75 at 20 to 24px; 2 at 16px. @default 1.75 */
  strokeWidth?: number;
  /** Accessible name when the icon stands alone (no visible label). Omit when a label sits next to it. */
  label?: string;
}

/** Aleem icon: owned duotone set on a 24px grid, currentColor, RTL-aware for directional glyphs. */
export function Icon(props: IconProps): JSX.Element;
/** Every icon name, in display order. */
export const ICON_NAMES: IconName[];
/** Lucide / legacy name → Aleem name. */
export const ICON_ALIASES: Record<string, IconName>;

// ---- Illustration (components/Illustration/Illustration.d.ts) ----
export type IllustrationScene =
  | 'empty' | 'search' | 'error' | 'offline' | 'success'
  | 'connect' | 'invite' | 'launch'
  | 'not-found' | 'hero' | 'cover' | 'email';

export interface IllustrationProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'width'> {
  /** Which spot scene. empty / search for EmptyState; error / offline for Alert panels and 404-style pages;
   *  success after a flow; connect / invite / launch for onboarding steps; hero, cover, email for marketing surfaces. @default "empty" */
  scene?: IllustrationScene;
  /** Rendered width (px or CSS length). Height follows 4:3. 120 in small empty states, 200 default, 320+ in heroes and covers. @default 200 */
  width?: number | string;
  /** Cyan brand glow behind the scene. Turn off over a page that already has a glow. @default true */
  glow?: boolean;
  /** On-ink palette (light tile, cyan lines) for navy panels, dark slides, email headers. @default false */
  onInk?: boolean;
  /** Accessible description when the scene carries meaning on its own. Omit when the title next to it already says it. */
  label?: string;
}

/** Aleem spot illustration: solid mascot tile plus duotone props from the icon set, tokens for every colour. */
export function Illustration(props: IllustrationProps): JSX.Element;
/** Every scene name. */
export const ILLUSTRATION_SCENES: IllustrationScene[];

// ---- ProgressBar (components/ProgressBar/ProgressBar.d.ts) ----
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value; omit for an indeterminate sweep. */
  value?: number;
  /** @default 100 */
  max?: number;
  /** Text above the bar; also the accessible name. */
  label?: React.ReactNode;
  /** Show the rounded percentage at inline-end. @default false */
  showValue?: boolean;
  /** 4px or 8px tall. @default "md" */
  size?: 'sm' | 'md';
  /** @default "brand" */
  tone?: 'brand' | 'success' | 'warning' | 'danger';
}

/** role=progressbar with aria-valuenow; brand gradient fill, pill track on `--surface-skeleton`. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;

// ---- Skeleton (components/Skeleton/Skeleton.d.ts) ----
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** text: one or more bars (ragged, last one shorter). rect: a block. circle: an avatar. pill: a chip or button. @default "text" */
  variant?: 'text' | 'rect' | 'circle' | 'pill';
  width?: number | string;
  height?: number | string;
  /** Number of bars for text. @default 1 */
  lines?: number;
  /** Width of each text bar, repeating, e.g. ['92%', '58%']. */
  lineWidths?: Array<number | string>;
  /** Text bar height: caption 0.7em, body 0.9em, title 1.25em, heading 1.7em, metric 2.6em. @default "body" */
  size?: 'caption' | 'body' | 'title' | 'heading' | 'metric';
  /** Override corner radius. */
  radius?: number | string;
  /** wave: one shine that crosses the page in step. pulse: a calm fade. none: still. Reduced motion is always still. @default "wave" */
  animation?: 'wave' | 'pulse' | 'none';
  /** On-ink tint for navy panels. @default false */
  onInk?: boolean;
}

/** One skeleton bone (aria-hidden). Put aria-busy and a spoken label on the region: LoadingRegion or StateView do it for you. */
export function Skeleton(props: SkeletonProps): JSX.Element;

export interface SkeletonPresetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which real component to mirror. @default "list" */
  kind?: 'project-card' | 'feature-card' | 'stat' | 'ai-answer' | 'chat' | 'list' | 'timeline' | 'table' | 'form' | 'article';
  /** How many to draw (table counts its header row). Defaults per kind. */
  count?: number;
  /** project-card: the first one spans two columns, like the real bento. @default false */
  featured?: boolean;
  /** table: number of columns. @default 4 */
  columns?: number;
  animation?: 'wave' | 'pulse' | 'none';
  onInk?: boolean;
}

/** A ready-made skeleton with the same geometry as the component it stands in for, so nothing jumps on arrival. */
export function SkeletonPreset(props: SkeletonPresetProps): JSX.Element;

// ---- Spinner (components/Spinner/Spinner.d.ts) ----
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. @default 20 */
  size?: number;
  /** Announced text; shown visually with showLabel or when reduced motion is on. @default "Loading" */
  label?: React.ReactNode;
  /** @default false */
  showLabel?: boolean;
  /** brand: action blue. current: inherits text colour. onInk: white. @default "brand" */
  tone?: 'brand' | 'current' | 'onInk';
}

/** Spinning ring (role=status). Falls back to static dots + visible label under prefers-reduced-motion. */
export function Spinner(props: SpinnerProps): JSX.Element;

// ---- Card (components/Card/Card.d.ts) ----
/**
 * Blank surface tile for bento grids, covers, and panels.
 * @startingPoint section="Surfaces" subtitle="Generic card, default, sunken, outline, ink, brand" viewport="520x240"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "default" */
  variant?: 'default' | 'sunken' | 'outline' | 'ink' | 'brand';
  /** Inner padding step, or any CSS length. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg' | string;
  /** Lift + deepen shadow on hover. @default false */
  interactive?: boolean;
  /** Focus-ring border for selected tiles. @default false */
  selected?: boolean;
  /** Show skeleton bones instead of children and set aria-busy; the card keeps its size. @default false */
  loading?: boolean;
  /** Your own bones while loading (e.g. a SkeletonPreset). */
  skeleton?: React.ReactNode;
  /** Render as a link. */
  href?: string;
  /** Override the element tag (e.g. "article", "li"). */
  as?: string;
  children?: React.ReactNode;
}

/**
 * Card: the one primitive behind bento tiles, case-study covers, and panels.
 * `ink` carries the brand's off-edge cyan glow and theme-stable on-ink text.
 */
export function Card(props: CardProps): JSX.Element;

// ---- DirectionToggle (components/DirectionToggle/DirectionToggle.d.ts) ----
export interface DirectionToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 36 / 44 / 52px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "secondary" */
  variant?: 'secondary' | 'onInk';
  /** lang written to <html> in RTL. @default "ar" */
  rtlLang?: string;
  /** lang written to <html> in LTR. @default "en" */
  ltrLang?: string;
  /** localStorage key. @default "cory-dir" */
  storageKey?: string;
  /** Segment labels. @default { ltr: "LTR", rtl: "RTL" } */
  labels?: { ltr: React.ReactNode; rtl: React.ReactNode };
  onChange?: (dir: 'ltr' | 'rtl') => void;
}

/**
 * Two-segment LTR / RTL switch. Sets dir + lang on <html>, persists the choice,
 * and dispatches a `cory:direction` window event for scripts that cache layout.
 */
export function DirectionToggle(props: DirectionToggleProps): JSX.Element;

// ---- MediaFrame (components/MediaFrame/MediaFrame.d.ts) ----
export interface MediaFrameProps extends React.HTMLAttributes<HTMLElement> {
  /** Image or video URL. Omit for a striped placeholder. */
  src?: string;
  /** Video poster image. */
  poster?: string;
  /** Alt text (image) / placeholder label. */
  alt?: string;
  /** CSS aspect-ratio. @default "16 / 9" */
  ratio?: string;
  /** Treat `src` as a video with play / mute controls. @default false */
  video?: boolean;
  /** Autoplay muted (video only). @default false */
  autoplay?: boolean;
  /** @default true */
  loop?: boolean;
  /** Caption under the frame. */
  caption?: React.ReactNode;
  /** Corner radius. @default "var(--radius-xl)" */
  radius?: string;
  /** object-fit. @default "cover" */
  fit?: 'cover' | 'contain';
  /** Content pinned to the bottom inline-start corner over a navy gradient scrim (titles on covers). */
  overlay?: React.ReactNode;
  /** What a failed image says (it also offers Try again). @default "This image didn't load" */
  errorLabel?: string;
  /** Called when the image fails to load. */
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Rounded media tile with fixed aspect ratio, images, video with play/mute,
 * case-study covers with overlay titles.
 */
export function MediaFrame(props: MediaFrameProps): JSX.Element;

// ---- Tabs (components/Tabs/Tabs.d.ts) ----
export interface TabItem { value: string; label: React.ReactNode; icon?: React.ReactNode; count?: number | string; /** Not selectable; skipped by arrow keys. */ disabled?: boolean; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Controlled value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** underline (nav), segmented (sliding pill in a trough), pills (filter bar). @default "underline" */
  variant?: 'underline' | 'segmented' | 'pills';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Equal-width tabs across the container. @default false */
  fullWidth?: boolean;
  /** aria-label for the tablist. */
  label?: string;
}

/**
 * Tabs / segmented control / filter bar with an animated active indicator.
 * Roving tabindex, arrow keys (mirrored in RTL), Home/End, per-item disabled.
 */
export function Tabs(props: TabsProps): JSX.Element;

// ---- ThemeToggle (components/ThemeToggle/ThemeToggle.d.ts) ----
export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 36 / 44 / 52px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "secondary" */
  variant?: 'secondary' | 'ghost' | 'onInk';
  /** localStorage key. @default "cory-theme" */
  storageKey?: string;
}

/**
 * Light/dark switch: sets `data-theme` on <html>, persists the choice,
 * defaults to the OS preference.
 */
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;

// ---- ConfidenceMeter (components/ConfidenceMeter/ConfidenceMeter.d.ts) ----
export interface ConfidenceMeterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Score from 0 to 1. Sets the level (0.8+ high, 0.5+ medium) unless `level` is given. */
  value?: number;
  /** Explicit level. Overrides `value` for the pips and words. */
  level?: 'high' | 'medium' | 'low';
  /** Replaces the default words ("High confidence"). */
  label?: React.ReactNode;
  /** Show the percentage after the words. @default false */
  showValue?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** White pips and text for navy panels. @default false */
  onInk?: boolean;
}

/** How sure an AI result is: five pips plus words, never colour alone. */
export function ConfidenceMeter(props: ConfidenceMeterProps): JSX.Element;

/** Maps a 0 to 1 score onto "high" | "medium" | "low" using the system thresholds. */
export function confidenceLevel(value?: number): 'high' | 'medium' | 'low';

// ---- AIResponse (components/AIResponse/AIResponse.d.ts) ----
export interface AISource {
  title: React.ReactNode;
  url?: string;
  /** Shown under the title, e.g. "w3.org/TR/WCAG22". */
  domain?: string;
}

export interface AIResponseProps extends React.HTMLAttributes<HTMLElement> {
  /** The answer. Put <Citation n={1} /> markers where a source backs a claim. */
  children?: React.ReactNode;
  /** Header label. @default "AI answer" */
  label?: React.ReactNode;
  /** Optional model or assistant name shown beside the label. */
  model?: React.ReactNode;
  /** 0 to 1. Shows a ConfidenceMeter with the percentage. */
  confidence?: number;
  /** Explicit confidence level when there is no score. */
  confidenceLevel?: 'high' | 'medium' | 'low';
  /** Numbered in the order the citations use them. */
  sources?: AISource[];
  /** streaming: caret + Stop, sources hidden. error: message + Try again. @default "done" */
  status?: 'streaming' | 'done' | 'error';
  onStop?: () => void;
  onRetry?: () => void;
  onCopy?: () => void;
  onRegenerate?: () => void;
  /** Controlled feedback state. */
  feedback?: 'up' | 'down' | null;
  onFeedback?: (value: 'up' | 'down' | null) => void;
  /** Footer note. Pass "" to hide. @default "AI can make mistakes. Check the sources before you act on this." */
  disclaimer?: React.ReactNode;
  /** @default "I couldn't finish this answer." */
  errorMessage?: React.ReactNode;
}

/** One AI answer built to earn trust: AI label, confidence, inline citations, sources and feedback. */
export function AIResponse(props: AIResponseProps): JSX.Element;

export interface CitationProps extends React.HTMLAttributes<HTMLElement> {
  /** The source number, matching its place in `sources`. */
  n: number;
  href?: string;
  /** Source title, used for the tooltip and accessible name. */
  title?: string;
}

/** Inline numbered citation marker. Links to the source when `href` is set. */
export function Citation(props: CitationProps): JSX.Element;

export interface SourceListProps extends React.HTMLAttributes<HTMLDivElement> {
  sources?: AISource[];
  /** @default "Sources" */
  title?: React.ReactNode;
}

/** Numbered source tiles, used by AIResponse and available for custom layouts. */
export function SourceList(props: SourceListProps): JSX.Element | null;

// ---- AgentSteps (components/AgentSteps/AgentSteps.d.ts) ----
export interface AgentStep {
  title: React.ReactNode;
  status: 'done' | 'running' | 'waiting' | 'error' | 'pending';
  detail?: React.ReactNode;
  /** Elapsed or clock time, kept left-to-right. */
  time?: React.ReactNode;
  /** A control under the step, usually for a waiting step. */
  action?: React.ReactNode;
}

export interface AgentStepsProps extends React.HTMLAttributes<HTMLElement> {
  steps: AgentStep[];
  title?: React.ReactNode;
  summary?: React.ReactNode;
  /** Tighter spacing for side panels. @default false */
  compact?: boolean;
}

/** A live, step-by-step log of what an agent is doing. Status is an icon plus a word. */
export function AgentSteps(props: AgentStepsProps): JSX.Element;

// ---- ApprovalCard (components/ApprovalCard/ApprovalCard.d.ts) ----
export interface ApprovalCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Who is asking. @default "Agent" */
  agent?: React.ReactNode;
  /** What will happen, as an action ("Move 4 design reviews to Thursday"). */
  title: React.ReactNode;
  /** One sentence of consequence. */
  children?: React.ReactNode;
  /** Label and value rows: what is affected, when, why. */
  details?: Array<{ label: React.ReactNode; value: React.ReactNode }>;
  /** @default "low" */
  risk?: 'low' | 'medium' | 'high';
  /** true: "You can undo this". false: "This cannot be undone". Omit to say nothing. */
  reversible?: boolean;
  /** @default "pending" */
  status?: 'pending' | 'approved' | 'rejected';
  onApprove?: () => void;
  /** Shows the Edit button when set. */
  onEdit?: () => void;
  onReject?: () => void;
  /** @default "Approve" */
  approveLabel?: React.ReactNode;
  /** @default "Edit" */
  editLabel?: React.ReactNode;
  /** @default "Don't do it" */
  rejectLabel?: React.ReactNode;
  /** Shown after a decision ("Approved, by Aleem"). */
  decidedBy?: React.ReactNode;
}

/** Human in the loop: an agent proposes an action and waits for a person to approve, edit or reject it. */
export function ApprovalCard(props: ApprovalCardProps): JSX.Element;

// ---- PromptInput (components/PromptInput/PromptInput.d.ts) ----
export interface PromptInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Called with the trimmed text on Enter or Send. */
  onSubmit?: (value: string) => void;
  /** While true, Send becomes Stop. @default false */
  busy?: boolean;
  onStop?: () => void;
  disabled?: boolean;
  /** @default "Ask anything about my work" */
  placeholder?: string;
  /** Visually hidden label. @default "Message" */
  label?: string;
  /** Starter prompts, shown while the field is empty. */
  suggestions?: string[];
  maxLength?: number;
  /** @default "Enter to send, Shift + Enter for a new line" */
  hint?: React.ReactNode;
  /** Unique per page. @default "prompt-input" */
  id?: string;
}

/** The composer for talking to an AI: auto-grows, Enter to send, suggestions, Stop while answering. */
export function PromptInput(props: PromptInputProps): JSX.Element;

// ---- ProjectCard (components/ProjectCard/ProjectCard.d.ts) ----
export interface ProjectCardProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  /** The outcome, as a headline. */
  title: React.ReactNode;
  href?: string;
  /** Cover image. Without one, the card draws the brand pill pattern. */
  image?: string;
  imageAlt?: string;
  client?: React.ReactNode;
  role?: React.ReactNode;
  year?: React.ReactNode;
  /** One sentence on what changed. */
  summary?: React.ReactNode;
  /** One real, measured number. */
  metric?: { value: React.ReactNode; label: React.ReactNode };
  tags?: string[];
  /** Spans two columns in .cory-bento with a 21:9 ink cover. @default false */
  featured?: boolean;
  /** Label on the cover ("Design system", "Coming soon"). */
  status?: React.ReactNode;
  /** @default 3 */
  headingLevel?: 2 | 3 | 4;
}

/** A case study card for the portfolio grid. The whole card is one link. */
export function ProjectCard(props: ProjectCardProps): JSX.Element;

// ---- Timeline (components/Timeline/Timeline.d.ts) ----
export interface TimelineItem {
  period: React.ReactNode;
  title: React.ReactNode;
  org?: React.ReactNode;
  place?: React.ReactNode;
  summary?: React.ReactNode;
  highlights?: React.ReactNode[];
  /** Marks the present role with the signal dot and "Now". */
  current?: boolean;
}

export interface TimelineProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
  /** @default 3 */
  headingLevel?: 2 | 3 | 4;
}

/** Experience or milestones, newest first. */
export function Timeline(props: TimelineProps): JSX.Element;

// ---- Accordion (components/Accordion/Accordion.d.ts) ----
export interface AccordionItem {
  id?: string;
  title: React.ReactNode;
  content: React.ReactNode;
  /** Quiet text before the chevron, e.g. "2 min read". */
  meta?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow several panels open at once. @default false */
  multiple?: boolean;
  /** Ids (or indexes as strings) open on first render. */
  defaultOpen?: string[];
  /** card: separate tiles. list: hairline dividers. @default "card" */
  variant?: 'card' | 'list';
  /** @default 3 */
  headingLevel?: 2 | 3 | 4 | 5;
  onToggle?: (id: string, open: boolean) => void;
}

/** Expandable sections with real buttons, aria-expanded and arrow-key movement between headers. */
export function Accordion(props: AccordionProps): JSX.Element;

// ---- RadioGroup (components/RadioGroup/RadioGroup.d.ts) ----
export interface RadioOption {
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  /** Card variant only: quiet text at the inline end ("Open"). */
  meta?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Group name; generated when omitted. */
  name?: string;
  /** @default "default" */
  variant?: 'default' | 'card';
  /** @default "vertical" */
  orientation?: 'vertical' | 'horizontal';
  required?: boolean;
  disabled?: boolean;
}

/** One choice from 2 to 5 visible options; native radios in a fieldset. */
export function RadioGroup(props: RadioGroupProps): JSX.Element;

// ---- Textarea (components/Textarea/Textarea.d.ts) ----
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
  /** Starting height in lines. @default 4 */
  rows?: number;
  /** Lines before it scrolls. @default 12 */
  maxRows?: number;
  /** Grow with the text. false restores the resize handle. @default true */
  autoResize?: boolean;
  maxLength?: number;
  /** When to show the counter. @default "near" (from 80% of maxLength) */
  showCount?: 'near' | 'always' | 'never';
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/** Multi-line text field matching Input, with auto-grow and a near-limit counter. */
export function Textarea(props: TextareaProps): JSX.Element;


// ---- LoadingRegion (components/LoadingRegion/LoadingRegion.d.ts) ----
export interface LoadingRegionProps extends React.HTMLAttributes<HTMLElement> {
  /** True while the data is on its way. */
  loading?: boolean;
  /** What to show while loading: a SkeletonPreset or your own Skeletons. */
  skeleton?: React.ReactNode;
  children?: React.ReactNode;
  /** Spoken when loading starts, e.g. "Loading case studies". @default "Loading" */
  label?: string;
  /** Spoken when it finishes. @default "Loaded" */
  doneLabel?: string;
  /** Show nothing for this long, so fast loads feel instant. @default 300 */
  delay?: number;
  /** Once shown, keep the skeleton at least this long, so it never flashes. @default 600 */
  minDuration?: number;
  /** On a refetch, keep the current content (dimmed, with an "Updating" hint) instead of a skeleton. @default true */
  keepPrevious?: boolean;
  /** Text of the refetch hint. @default "Updating" */
  refreshing?: React.ReactNode;
  /** Element tag. @default "div" */
  as?: string;
}

/** Applies the loading timing rules (300 ms delay, 600 ms minimum, 200 ms fade) with aria-busy and spoken status. */
export function LoadingRegion(props: LoadingRegionProps): JSX.Element;

// ---- ErrorState (components/ErrorState/ErrorState.d.ts) ----
export interface ErrorStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Sets the icon, tone and default copy. @default "error" */
  kind?: 'error' | 'offline' | 'timeout' | 'not-found' | 'permission' | 'server';
  /** Overrides the default title. */
  title?: React.ReactNode;
  /** Overrides the default message. */
  children?: React.ReactNode;
  /** Adds a Try again button. */
  onRetry?: () => void;
  /** @default "Try again" */
  retryLabel?: string;
  /** Shows "Trying again…" with a turning icon. @default false */
  retrying?: boolean;
  /** Extra actions beside Try again (e.g. a Button to go home or ask for access). */
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  /** Error code or message, in a collapsed "Technical details". */
  details?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** card: bordered tile. plain: no frame. @default "card" */
  variant?: 'card' | 'plain';
  onInk?: boolean;
}

/** A region that failed: what happened, that nothing was lost, and the one action that fixes it. role=alert. */
export function ErrorState(props: ErrorStateProps): JSX.Element;

// ---- StateView (components/StateView/StateView.d.ts) ----
export interface StateViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which state the region is in. @default "ready" */
  status?: 'loading' | 'refreshing' | 'ready' | 'empty' | 'partial' | 'error' | 'offline' | 'timeout' | 'not-found' | 'permission' | 'server';
  /** The real content (ready, partial, refreshing). */
  children?: React.ReactNode;
  /** A SkeletonPreset kind, or your own skeleton node. @default "list" */
  skeleton?: SkeletonPresetProps['kind'] | React.ReactNode;
  skeletonCount?: number;
  /** Spoken loading and done labels. */
  label?: string;
  doneLabel?: string;
  /** Props for the EmptyState (title, children, action, icon, scene…). */
  empty?: Partial<EmptyStateProps> & { children?: React.ReactNode };
  /** Props for the ErrorState (title, children, details, action…). */
  error?: Partial<ErrorStateProps>;
  /** The warning shown above children when status is "partial". */
  partial?: { title?: React.ReactNode; children?: React.ReactNode; action?: React.ReactNode };
  onRetry?: () => void;
  retrying?: boolean;
  /** Keep the region this tall in every state, so switching never jolts the page. */
  minHeight?: number | string;
}

/** One region, every state, one prop: loading, refreshing, ready, empty, partial and six kinds of error. */
export function StateView(props: StateViewProps): JSX.Element;

// ---- SiteHeader (components/SiteHeader/SiteHeader.d.ts) ----
export interface SiteHeaderLink { label: React.ReactNode; href: string; /** Marks the current page. */ current?: boolean; }
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Replaces the default AIUX mark and "Aleem". */
  brand?: React.ReactNode;
  /** @default "/" */
  brandHref?: string;
  /** Primary links; five or fewer. */
  links?: SiteHeaderLink[];
  /** The one action, e.g. a small Button. Moves into the menu on phones. */
  action?: React.ReactNode;
  /** Always-visible tools, e.g. ThemeToggle. */
  tools?: React.ReactNode;
  /** Pin to the top. @default true */
  sticky?: boolean;
  /** Target of "Skip to content"; false to omit. @default "#main" */
  skipTo?: string | false;
  /** @default "Menu" */
  menuLabel?: string;
  /** aria-label of the nav. @default "Main" */
  label?: string;
}

/** Site top bar: brand, links, one action; folds to a menu below 760px; includes a skip link. */
export function SiteHeader(props: SiteHeaderProps): JSX.Element;

// ---- Breadcrumb (components/Breadcrumb/Breadcrumb.d.ts) ----
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** The trail, root first. The last item is the current page and needs no href. */
  items?: Array<{ label: React.ReactNode; href?: string }>;
  /** Longer trails collapse the middle. @default 4 */
  maxItems?: number;
  /** @default "Breadcrumb" */
  label?: string;
}

/** Where this page sits; the last item is the current page. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;

// ---- Pagination (components/Pagination/Pagination.d.ts) ----
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page, from 1. @default 1 */
  page?: number;
  /** Total pages. @default 1 */
  count?: number;
  onChange?: (page: number) => void;
  /** Numbers shown on each side of the current page. @default 1 */
  siblings?: number;
  /** "Page 2 of 9" between the arrows. @default false */
  compact?: boolean;
  /** Render real links. */
  hrefFor?: (page: number) => string;
  /** @default "Pagination" */
  label?: string;
}

/** Page through a list: Previous, numbers with ellipses, Next. */
export function Pagination(props: PaginationProps): JSX.Element;

// ---- Table (components/Table/Table.d.ts) ----
export interface TableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  /** End-aligned, tabular figures. */
  numeric?: boolean;
  align?: 'start' | 'center' | 'end';
  sortable?: boolean;
  width?: number | string;
  nowrap?: boolean;
  /** Custom cell. */
  render?: (row: Row, index: number) => React.ReactNode;
}
export interface TableProps<Row = any> extends React.HTMLAttributes<HTMLDivElement> {
  columns?: TableColumn<Row>[];
  rows?: Row[];
  /** Names the table; always set it. */
  caption?: React.ReactNode;
  /** Keep the caption for screen readers only. @default false */
  captionHidden?: boolean;
  /** Controlled sort. */
  sort?: { key: string; dir: 'asc' | 'desc' };
  onSort?: (next: { key: string; dir: 'asc' | 'desc' }) => void;
  rowKey?: (row: Row) => string | number;
  /** Draw skeleton rows. @default false */
  loading?: boolean;
  /** @default 5 */
  skeletonRows?: number;
  /** Shown when there are no rows. @default "Nothing to show yet." */
  empty?: React.ReactNode;
  /** Replaces the rows with an alert. */
  error?: React.ReactNode;
  dense?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  /** Narrowest the table gets before it scrolls sideways. @default 132px per column */
  minWidth?: number | string;
}

/** Data table with sorting, numeric alignment, loading, empty and error rows; scrolls sideways on phones. */
export function Table<Row = any>(props: TableProps<Row>): JSX.Element;

// ---- SiteFooter (components/SiteFooter/SiteFooter.d.ts) ----
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Replaces the default AIUX mark and "Aleem". */
  brand?: React.ReactNode;
  tagline?: React.ReactNode;
  /** Link columns; each becomes a nav named by its title. */
  columns?: Array<{ title: string; links: Array<{ label: string; href: string; external?: boolean }> }>;
  /** Social links, written as words. */
  social?: Array<{ label: string; href: string }>;
  /** Copyright or legal line. */
  legal?: React.ReactNode;
  /** Extra content under the tagline. */
  children?: React.ReactNode;
}

/** Site footer: brand, link columns, social links, legal line. */
export function SiteFooter(props: SiteFooterProps): JSX.Element;

// ---- Menu (components/Menu/Menu.d.ts) ----
export type MenuItem =
  | { separator: true }
  | { label: React.ReactNode; icon?: string; hint?: React.ReactNode; href?: string; danger?: boolean; disabled?: boolean; onSelect?: (e: React.SyntheticEvent) => void; separator?: false };
export interface MenuProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onSelect'> {
  /** Button text and the menu's name. @default "More" */
  label?: React.ReactNode;
  items?: MenuItem[];
  /** Replaces the button content. */
  trigger?: React.ReactNode;
  /** Which edge of the button the menu lines up with. @default "start" */
  align?: 'start' | 'end';
  /** @default "bottom" */
  placement?: 'bottom' | 'top';
  /** Called with the chosen item. */
  onSelect?: (item: MenuItem, e: React.SyntheticEvent) => void;
}

/** Dropdown of actions on one thing, with full keyboard support. */
export function Menu(props: MenuProps): JSX.Element;

// ---- Stepper (components/Stepper/Stepper.d.ts) ----
export interface StepperProps extends React.HTMLAttributes<HTMLElement> {
  steps?: Array<{ label: React.ReactNode; description?: React.ReactNode; error?: boolean }>;
  /** Index of the current step, from 0. @default 0 */
  current?: number;
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** "Step 2 of 4: Details" with a bar. @default false */
  compact?: boolean;
  /** Makes completed steps clickable. */
  onStepClick?: (index: number) => void;
  /** @default "Progress" */
  label?: string;
}

/** Progress through a short ordered flow. */
export function Stepper(props: StepperProps): JSX.Element;

// ---- DateField (components/DateField/DateField.d.ts) ----
export interface DateFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
  /** @default "date" */
  type?: 'date' | 'datetime-local' | 'time' | 'month';
  /** ISO string, e.g. "2026-11-21". */
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Native date input styled like Input. */
export function DateField(props: DateFieldProps): JSX.Element;

// ---- SignalPattern (components/SignalPattern/SignalPattern.d.ts) ----
export interface SignalPatternProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 5 */
  rows?: number;
  /** A different, repeatable arrangement per seed. @default 1 */
  seed?: number;
  /** ink: on navy. light: on white or page. brand: on the brand gradient. @default "ink" */
  tone?: 'ink' | 'light' | 'brand';
  /** The travelling signal. Always still under reduced motion. @default true */
  animate?: boolean;
  /** Average pills per row. @default 3 */
  density?: number;
  height?: number | string;
  /** Which side the rows hang from. @default "start" */
  align?: 'start' | 'end';
}

/** The brand's signature graphic: pill rows with a travelling signal. Decorative. */
export function SignalPattern(props: SignalPatternProps): JSX.Element;

// ---- Hero (components/Hero/Hero.d.ts) ----
export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: React.ReactNode;
  /** The headline. A string lets `highlight` work. */
  title?: React.ReactNode;
  /** The one phrase of the title that takes the brand gradient. */
  highlight?: string;
  /** The supporting sentence. */
  children?: React.ReactNode;
  /** One primary Button, optionally one secondary. */
  actions?: React.ReactNode;
  /** Second column. Defaults to the SignalPattern on an ink panel. */
  art?: React.ReactNode;
  /** Up to three real numbers. */
  proof?: Array<{ value: React.ReactNode; label: string }>;
  /** @default "split" */
  layout?: 'split' | 'center';
  /** @default 1 */
  headingLevel?: 1 | 2 | 3;
}

/** Page opening: one idea, one gradient phrase, one action, optional proof and art. */
export function Hero(props: HeroProps): JSX.Element;
