import React from 'react';
import { LoadingRegion } from '../status/LoadingRegion.jsx';
import { ErrorState } from './ErrorState.jsx';
import { EmptyState } from './EmptyState.jsx';
import { Alert } from './Alert.jsx';
import { SkeletonPreset } from '../status/Skeleton.jsx';

/**
 * One region, every state, one prop. `status`:
 *   loading    → the skeleton (LoadingRegion timing: 300 ms delay, 600 ms minimum, fade in)
 *   refreshing → current content stays, dimmed, with an "Updating" hint
 *   ready      → children
 *   empty      → EmptyState from `empty` (props)
 *   error | offline | timeout | not-found | permission | server → ErrorState from `error` (props) + onRetry
 *   partial    → children under a warning Alert from `partial` (props: title, children, action)
 * `skeleton` is a node, or a SkeletonPreset kind string ("project-card", "list", …).
 * Empty and error render frameless (variant="plain"), since the region usually has its own frame;
 * Try again is only offered where retrying can help (error, offline, timeout, server).
 * The region keeps one height-stable box (minHeight) so switching states never jolts the page.
 */
export function StateView({
  status = 'ready', children, skeleton = 'list', skeletonCount, label = 'Loading', doneLabel = 'Loaded',
  empty, error, partial, onRetry, retrying, minHeight, style, ...rest
}) {
  const sk = typeof skeleton === 'string' ? <SkeletonPreset kind={skeleton} count={skeletonCount} /> : skeleton;
  const box = { minHeight, minWidth: 0, ...style };
  const errorKinds = ['error', 'offline', 'timeout', 'not-found', 'permission', 'server'];
  if (errorKinds.includes(status)) {
    const canRetry = ['error', 'offline', 'timeout', 'server'].includes(status);
    return <div style={box} {...rest}><ErrorState kind={status} variant="plain" onRetry={canRetry ? onRetry : undefined} retrying={retrying} {...error} /></div>;
  }
  if (status === 'empty') {
    const { title = 'Nothing here yet', children: body, ...more } = empty || {};
    return <div style={box} {...rest}><EmptyState voice="neutral" variant="plain" title={title} {...more}>{body}</EmptyState></div>;
  }
  const loading = status === 'loading' || status === 'refreshing';
  return (
    <LoadingRegion loading={loading} skeleton={sk} label={label} doneLabel={doneLabel} keepPrevious={status === 'refreshing'} style={box} {...rest}>
      {status === 'partial' && partial && (
        <Alert tone="warning" title={partial.title} action={partial.action} style={{ marginBottom: 16 }}>{partial.children}</Alert>
      )}
      {children}
    </LoadingRegion>
  );
}
