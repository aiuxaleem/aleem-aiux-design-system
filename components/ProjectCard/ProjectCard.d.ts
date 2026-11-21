import * as React from 'react';

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
