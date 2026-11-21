import * as React from 'react';

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
