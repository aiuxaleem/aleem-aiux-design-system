import * as React from 'react';

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
