import * as React from 'react';

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
