# useDataNew Rollout Plan

## Executive Summary

This document outlines the phased deployment strategy for migrating collection widgets from the legacy `useData` hook to the improved `useDataNew` hook. The rollout follows a conservative, test-driven approach to minimize risk and ensure production stability.

## Objectives

- **Primary Goal**: Replace `useData` with `useDataNew` across all collection widgets
- **Success Criteria**: Zero behavioral regressions, equal or better performance
- **Timeline**: 5-week phased rollout with monitoring at each stage
- **Rollback Plan**: Immediate revert capability if error rate exceeds 1%

## Prerequisites

- [ ] All TypeScript compilation errors resolved
- [ ] All existing tests pass (`npm test`)
- [ ] Integration testing completed for all target widgets
- [ ] Documentation (README.md, JSDoc) complete and peer-reviewed
- [ ] Performance benchmarks establish baseline metrics
- [ ] Monitoring infrastructure configured for error tracking

## Target Widgets

The following widgets will be migrated (in order):

1. **SwitchCollectionWidget** - Simplest widget, lowest risk
2. **StateCollectionWidget** - Core widget, moderate complexity
3. **ButtonGroupCollectionWidget** - Multi-state logic, higher complexity
4. **SliderCollectionWidget** - Slider-specific properties, highest complexity
5. **CheckboxCollectionWidget** - Similar to Switch
6. **RadioGroupCollectionWidget** - Similar to ButtonGroup
7. **SelectCollectionWidget** - Dropdown variant
8. **DialogCollectionWidget** - Modal interaction variant
9. **GaugeCollectionWidget** - Visualization variant
10. **Light2CollectionWidget** - Complex state visualization

## Phase 1: Preparation (Week 1)

### Objectives
- Finalize all preparatory work
- Establish monitoring baselines
- Create feature flag infrastructure

### Tasks

#### 1.1 Code Completion
- [ ] Complete all refactoring of StyleData properties
- [ ] Resolve all ESLint/Prettier warnings
- [ ] Run full TypeScript strict mode compilation
- [ ] Update all JSDoc comments to meet standards

#### 1.2 Testing Infrastructure
- [ ] Set up automated integration test suite
- [ ] Configure continuous integration (CI) pipeline
- [ ] Establish performance baseline metrics:
  - Initial render time
  - Re-render on state update
  - Re-render on prop change
  - Memory footprint

#### 1.3 Feature Flag Implementation
Create a feature flag in widget configuration to enable gradual rollout:

```typescript
// In src-widgets/src/lib/featureFlags.ts (create if needed)
export interface FeatureFlags {
    useDataNewEnabled: boolean;
    useDataNewWidgets: string[]; // List of widget types to migrate
}

// In CollectionContext or widget components
const shouldUseNewHook =
    featureFlags.useDataNewEnabled &&
    featureFlags.useDataNewWidgets.includes(widgetType);

const hookToUse = shouldUseNewHook ? useDataNew : useData;
```

#### 1.4 Monitoring Setup
Configure monitoring dashboards:

- **Error Tracking**: Sentry or similar for runtime errors
- **Performance Metrics**: Chrome DevTools Performance API integration
- **Usage Analytics**: Track widget render counts, hook invocation frequency
- **Alerting**: Automated alerts if error rate > 0.5%

#### 1.5 Rollback Procedure Documentation
Document step-by-step rollback process:

1. Disable feature flag for affected widgets
2. Deploy configuration update
3. Verify error rate returns to normal
4. Investigate root cause
5. Apply fix and re-test before re-enabling

### Deliverables
- [ ] Feature flag infrastructure deployed
- [ ] Monitoring dashboards operational
- [ ] Rollback procedure documented and tested
- [ ] Baseline metrics collected

### Exit Criteria
- All tasks completed
- Code review approved by senior developer
- Test coverage > 80% for useDataNew module

---

## Phase 2: Canary Deployment (Week 2)

### Objectives
- Deploy to 10% of users
- Validate production behavior matches testing
- Detect any edge cases missed in testing

### Tasks

#### 2.1 Widget Selection
Start with **SwitchCollectionWidget** (lowest complexity, lowest risk):

```typescript
// In widget configuration or feature flag service
featureFlags = {
    useDataNewEnabled: true,
    useDataNewWidgets: ['SwitchCollectionWidget'],
    rolloutPercentage: 10, // 10% of users
};
```

#### 2.2 Deployment
- [ ] Update feature flag configuration to enable 10% rollout
- [ ] Deploy configuration change (no code changes needed)
- [ ] Monitor for 48 hours

#### 2.3 Monitoring Checklist
Daily monitoring for 2 days:

- [ ] **Day 1**:
  - Check error rate (target: < 0.1%)
  - Verify performance metrics within 5% of baseline
  - Review user feedback channels (GitHub issues, forum)
  - Check console errors in browser DevTools

- [ ] **Day 2**:
  - Continued monitoring of error rate
  - Performance regression testing
  - Sample 10 users for visual inspection of widgets

#### 2.4 Success Criteria
- Error rate < 0.1% above baseline
- Performance metrics within ±5% of baseline
- Zero critical bugs reported
- No visual regressions detected

#### 2.5 Decision Point
If success criteria met:
- **Proceed to Phase 3** (increase rollout percentage)

If success criteria NOT met:
- **ROLLBACK**: Disable feature flag
- **Root Cause Analysis**: Investigate issues
- **Fix and Re-Test**: Return to Phase 1 after fixes

### Deliverables
- [ ] Canary deployment completed
- [ ] Monitoring data collected and analyzed
- [ ] Incident report (if any issues occurred)
- [ ] Go/No-Go decision documented

---

## Phase 3: Gradual Rollout (Weeks 3-4)

### Objectives
- Incrementally increase rollout percentage
- Expand to additional widgets
- Continue monitoring for regressions

### Week 3: Expand to 25% and Add StateCollectionWidget

#### 3.1 Increase SwitchCollectionWidget Rollout
- [ ] Update feature flag: `rolloutPercentage: 25`
- [ ] Monitor for 48 hours
- [ ] Verify error rate < 0.1%

#### 3.2 Add StateCollectionWidget (10% rollout)
```typescript
featureFlags = {
    useDataNewEnabled: true,
    useDataNewWidgets: ['SwitchCollectionWidget', 'StateCollectionWidget'],
    rolloutPercentage: {
        SwitchCollectionWidget: 25,
        StateCollectionWidget: 10,
    },
};
```
- [ ] Deploy configuration update
- [ ] Monitor for 48 hours

#### 3.3 Weekly Review
- [ ] Review cumulative error rate across all widgets
- [ ] Analyze performance trends
- [ ] Check user feedback
- [ ] Document any edge cases discovered

### Week 4: Expand to 50% and Add ButtonGroupCollectionWidget

#### 4.1 Increase Existing Widgets
```typescript
rolloutPercentage: {
    SwitchCollectionWidget: 50,
    StateCollectionWidget: 50,
}
```
- [ ] Deploy and monitor for 48 hours

#### 4.2 Add ButtonGroupCollectionWidget (10% rollout)
```typescript
featureFlags.useDataNewWidgets.push('ButtonGroupCollectionWidget');
rolloutPercentage.ButtonGroupCollectionWidget = 10;
```
- [ ] Deploy and monitor for 48 hours

#### 4.3 Add SliderCollectionWidget (10% rollout)
**Note**: Slider has most complex logic - monitor extra carefully

```typescript
featureFlags.useDataNewWidgets.push('SliderCollectionWidget');
rolloutPercentage.SliderCollectionWidget = 10;
```
- [ ] Deploy and monitor for 72 hours (extended monitoring period)
- [ ] Test slider marks, min/max values, step functionality
- [ ] Verify marker icon/text properties render correctly

#### 4.4 Decision Point
If all widgets stable at 50%:
- **Proceed to Phase 4** (increase to 75%)

If any widget shows regressions:
- **Partial Rollback**: Reduce percentage for affected widget only
- **Investigate and Fix**: Targeted remediation
- **Re-Test**: Repeat rollout for fixed widget

### Deliverables
- [ ] 50% rollout achieved for initial widgets
- [ ] ButtonGroup and Slider widgets onboarded
- [ ] Performance data shows no degradation
- [ ] All discovered edge cases documented

---

## Phase 4: High-Volume Rollout (Week 5, Days 1-3)

### Objectives
- Increase rollout to 75% for stable widgets
- Add remaining widgets to migration

### Tasks

#### 4.1 Increase to 75% for Stable Widgets
```typescript
rolloutPercentage: {
    SwitchCollectionWidget: 75,
    StateCollectionWidget: 75,
    ButtonGroupCollectionWidget: 75,
    SliderCollectionWidget: 50, // Keep slider conservative
}
```
- [ ] Deploy and monitor for 48 hours

#### 4.2 Add Remaining Widgets (10% rollout each)
```typescript
featureFlags.useDataNewWidgets.push(
    'CheckboxCollectionWidget',
    'RadioGroupCollectionWidget',
    'SelectCollectionWidget',
    'DialogCollectionWidget',
    'GaugeCollectionWidget',
    'Light2CollectionWidget'
);
```
- [ ] Deploy and monitor for 72 hours

#### 4.3 High-Load Testing
- [ ] Simulate high-traffic scenarios
- [ ] Test pages with 50+ widgets
- [ ] Verify memory usage under load
- [ ] Check performance with rapid state updates

### Deliverables
- [ ] 75% rollout for early adopters
- [ ] All widgets onboarded at 10%
- [ ] High-load testing completed successfully

---

## Phase 5: Full Deployment (Week 5, Days 4-7)

### Objectives
- Deploy to 100% of users
- Deprecate legacy `useData` hook
- Complete migration

### Tasks

#### 5.1 Increase All Widgets to 100%
```typescript
rolloutPercentage: {
    SwitchCollectionWidget: 100,
    StateCollectionWidget: 100,
    ButtonGroupCollectionWidget: 100,
    SliderCollectionWidget: 100,
    CheckboxCollectionWidget: 100,
    RadioGroupCollectionWidget: 100,
    SelectCollectionWidget: 100,
    DialogCollectionWidget: 100,
    GaugeCollectionWidget: 100,
    Light2CollectionWidget: 100,
}
```
- [ ] Deploy configuration update
- [ ] Monitor for 72 hours

#### 5.2 Remove Feature Flag
After 72 hours of stable 100% deployment:

- [ ] Update widget imports to directly use `useDataNew`
- [ ] Remove feature flag infrastructure
- [ ] Deploy code changes

Example widget change:
```diff
- import useData from '../hooks/useData';
+ import useData from '../hooks/useDataNew/useDataNew';
```

#### 5.3 Deprecate Legacy Hook
Mark `useData` as deprecated:

```typescript
// In src-widgets/src/hooks/useData.ts
/**
 * @deprecated Use useDataNew from './useDataNew/useDataNew' instead.
 * This hook will be removed in version 3.0.0.
 *
 * Migration guide: See hooks/useDataNew/README.md
 *
 * @see {@link useDataNew} for the replacement hook
 */
export default function useData(oidName: string): UseDataResult {
    // ... existing implementation
}
```

#### 5.4 Update Documentation
- [ ] Update README.md to reference `useDataNew` as primary hook
- [ ] Add migration guide to repository docs
- [ ] Update JSDoc cross-references
- [ ] Create changelog entry

### Deliverables
- [ ] 100% deployment achieved
- [ ] Legacy hook deprecated (code remains for compatibility)
- [ ] Documentation updated
- [ ] Migration considered complete

---

## Phase 6: Cleanup (Future - Version 3.0.0)

### Objectives
- Remove legacy code in next major version
- Complete technical debt cleanup

### Tasks
- [ ] Remove `useData.ts` entirely
- [ ] Update all widgets to import from `useDataNew` directly
- [ ] Remove deprecated code warnings
- [ ] Publish major version release notes

**Scheduled for**: Next major version (3.0.0) release

---

## Risk Management

### Risk Matrix

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Breaking changes in widget behavior | Medium | High | Comprehensive integration testing before each phase |
| Performance regression | Low | Medium | Continuous performance monitoring, immediate rollback if degradation > 5% |
| Type safety issues | Low | Medium | Strict TypeScript compilation in CI pipeline |
| Edge case bugs | Medium | Low | Canary deployment with small user percentage first |
| User-facing errors | Low | High | Feature flag allows instant rollback without deployment |
| Memory leaks | Low | High | Memory profiling in integration tests, monitor production heap size |

### Rollback Triggers

Automatic rollback if any of the following conditions occur:

1. **Error Rate Spike**: Error rate increases > 1% above baseline
2. **Performance Degradation**: Render time increases > 10%
3. **Memory Leak Detected**: Heap size grows unbounded over 1 hour
4. **Critical Bug**: P0 severity bug reported affecting core functionality
5. **User Reports**: > 5 unique user reports of same issue within 24 hours

### Rollback Procedure

#### Immediate Actions (Within 15 minutes)
1. **Disable Feature Flag**:
   ```typescript
   featureFlags.useDataNewEnabled = false;
   ```
2. **Deploy Configuration Change**: Push to production immediately
3. **Verify Error Rate**: Confirm errors return to baseline within 5 minutes

#### Post-Rollback (Within 2 hours)
4. **Incident Report**: Document what happened, error logs, affected users
5. **Root Cause Analysis**: Identify specific code causing issue
6. **Create GitHub Issue**: Tag as "critical", assign to engineering lead
7. **Communication**: Notify stakeholders of rollback and investigation status

#### Recovery (Within 48 hours)
8. **Develop Fix**: Address root cause with targeted fix
9. **Test Fix**: Comprehensive testing of fix in dev environment
10. **Re-Deploy to Canary**: Restart rollout at Phase 2 (10% canary)
11. **Extended Monitoring**: Monitor canary for 72 hours before proceeding

---

## Monitoring & Metrics

### Key Performance Indicators (KPIs)

#### 1. Error Rate
- **Baseline**: Establish current error rate per widget
- **Target**: < 0.1% increase from baseline
- **Measurement**: Errors per 1000 widget renders
- **Alert Threshold**: > 0.5% increase

#### 2. Render Performance
- **Baseline**: Current average render time per widget type
- **Target**: Within ±5% of baseline
- **Measurement**: Time from hook invocation to component paint (ms)
- **Alert Threshold**: > 10% slower than baseline

#### 3. Memory Usage
- **Baseline**: Current heap size after 100 renders
- **Target**: No unbounded growth, < 5% increase in steady state
- **Measurement**: Chrome Performance API memory profiling
- **Alert Threshold**: Continuous growth over 30 minutes

#### 4. User Satisfaction
- **Baseline**: Current GitHub issue rate for widget bugs
- **Target**: No increase in issue reports
- **Measurement**: Issues filed per week mentioning collection widgets
- **Alert Threshold**: > 3 issues with same root cause in 48 hours

### Monitoring Tools

#### Development
- **TypeScript Compiler**: Strict mode, no errors allowed
- **ESLint**: All rules passing
- **Jest**: Unit test coverage > 80%

#### Staging
- **Chrome DevTools**: Performance profiling, memory snapshots
- **React Developer Tools**: Re-render tracking, prop diff analysis

#### Production
- **Sentry** (or similar): Error tracking with sourcemaps
- **Google Analytics** (or similar): Custom events for hook invocations
- **Prometheus + Grafana** (optional): Custom performance metrics dashboard

### Monitoring Dashboard

Create a dashboard with:

- **Error Rate Panel**: Line graph showing errors per hour per widget
- **Performance Panel**: Render time distribution (p50, p90, p99)
- **Memory Panel**: Heap size over time
- **Rollout Progress Panel**: Percentage of users on new hook per widget
- **Incident Timeline**: Visual timeline of deployment phases and any incidents

---

## Communication Plan

### Stakeholders

- **Engineering Team**: Daily updates during rollout
- **QA Team**: Test reports after each phase
- **Product Manager**: Weekly summary reports
- **Users**: Transparent communication via GitHub releases, forum posts

### Communication Schedule

| Phase | Audience | Message | Channel |
|-------|----------|---------|---------|
| Phase 1 Start | Engineering | Rollout plan finalized, preparation begins | Team Slack, Email |
| Phase 2 Start | Engineering, QA | Canary deployment initiated (10%) | Team Slack |
| Phase 2 End | Engineering, QA, PM | Canary successful, proceeding to gradual rollout | Team Slack, Status Meeting |
| Phase 3 Midpoint | All Stakeholders | 50% rollout achieved, no major issues | Email, GitHub Release Notes |
| Phase 4 Start | All Stakeholders | High-volume rollout (75%) initiated | Email |
| Phase 5 Start | All Stakeholders, Users | Full deployment (100%) initiated | GitHub Release, Forum Post |
| Phase 5 End | All Stakeholders, Users | Migration complete, legacy hook deprecated | GitHub Release, Blog Post |
| Rollback (if needed) | All Stakeholders, Users | Immediate notification with explanation and timeline | Email, GitHub Issue, Forum Post |

### Transparency Commitments

- **Public Changelog**: Document all changes in CHANGELOG.md
- **GitHub Issues**: Tag all related issues with `useDataNew-migration` label
- **Forum Updates**: Weekly post during active rollout phases
- **Release Notes**: Detailed notes for each version mentioning rollout status

---

## Testing Strategy

### Pre-Rollout Testing

#### 1. Unit Tests
```bash
npm test -- src-widgets/src/hooks/useDataNew
```

Test coverage targets:
- `resolvePriority`: 100% branch coverage
- `buildStateItem`: > 90% branch coverage
- `createSliderResolver`: 100%
- `createDefaultResolver`: 100%

#### 2. Integration Tests

Manual test cases per widget:

**SwitchCollectionWidget**:
- [ ] Switch toggles between on/off states
- [ ] Active state styling applies correctly
- [ ] Icon changes on state change
- [ ] Background color transitions work

**StateCollectionWidget**:
- [ ] All state values render correctly
- [ ] Active state detection matches current OID value
- [ ] Header/footer display properly
- [ ] Empty string handling works (fallback to oidName)

**ButtonGroupCollectionWidget**:
- [ ] Multiple buttons render for each state value
- [ ] Clicking button updates ioBroker state
- [ ] Active button has correct styling
- [ ] Per-state icons and colors apply

**SliderCollectionWidget**:
- [ ] Min/max values calculated correctly
- [ ] Slider marks appear at correct positions
- [ ] Marker icons and text render
- [ ] Value updates when slider moved
- [ ] Step value respected

#### 3. Regression Tests

Create visual regression tests using:
- **Percy.io** or **Chromatic**: Screenshot comparison
- **Jest + React Testing Library**: Snapshot tests

```typescript
import { render } from '@testing-library/react';
import { StateCollectionWidget } from './StateCollectionWidget';

describe('StateCollectionWidget visual regression', () => {
    it('matches snapshot with useDataNew', () => {
        const { container } = render(<StateCollectionWidget {...mockProps} />);
        expect(container).toMatchSnapshot();
    });
});
```

### During-Rollout Testing

#### A/B Comparison
For 10% and 25% rollout phases:

- **Control Group**: Users with `useData` (old hook)
- **Treatment Group**: Users with `useDataNew` (new hook)
- **Comparison Metrics**: Error rate, render time, user engagement

Expected outcome: No statistically significant difference between groups

#### Smoke Tests
Daily automated smoke tests in production:

1. Create test visualization with all widget types
2. Automated browser script verifies:
   - All widgets render
   - No console errors
   - State changes work
   - Visual elements present
3. Alert if any test fails

---

## Contingency Plans

### Scenario 1: Critical Bug Discovered During Canary

**Symptoms**: Error rate > 1%, affecting core widget functionality

**Response**:
1. Immediate rollback (Phase 2.5 Rollback Procedure)
2. Disable feature flag within 15 minutes
3. Hot-fix development (48-hour target)
4. Extended testing of fix (1 week)
5. Restart rollout at Phase 2 (canary)

### Scenario 2: Performance Regression

**Symptoms**: Render time > 10% slower than baseline

**Response**:
1. Assess user impact (is it noticeable? > 100ms?)
2. If severe (> 20% slower or > 100ms delay):
   - Rollback to previous percentage
   - Optimize code (investigate memoization, dependency arrays)
   - Profile with Chrome DevTools
3. If moderate (10-20% slower):
   - Continue rollout but pause at current percentage
   - Optimize in parallel
   - Re-test before proceeding

### Scenario 3: Memory Leak Detected

**Symptoms**: Heap size grows unbounded over time

**Response**:
1. **Immediate rollback** - memory leaks are critical
2. Capture heap snapshot for analysis
3. Investigate:
   - Are subscriptions cleaned up?
   - Are refs/closures leaking?
   - Is memoization working correctly?
4. Fix and add memory leak detection to CI
5. Restart rollout with extended monitoring

### Scenario 4: Slider Widget Issues

**Symptoms**: Slider-specific bugs (marks, min/max incorrect)

**Response**:
1. Rollback **only SliderCollectionWidget** (keep other widgets migrated)
2. Targeted fix for slider logic in `buildStateItem`
3. Thorough slider-specific test suite
4. Re-deploy slider separately after fix verified

---

## Success Criteria

### Phase-Level Success Criteria

Each phase must meet these criteria before proceeding:

- [ ] Error rate < baseline + 0.1%
- [ ] Performance within ±5% of baseline
- [ ] Zero P0/P1 severity bugs
- [ ] No user-reported regressions
- [ ] Monitoring data reviewed and approved

### Overall Migration Success Criteria

Migration considered successful when:

- [ ] All 10 widgets deployed at 100%
- [ ] 7 days stable operation at 100% with no incidents
- [ ] Performance equal or better than baseline
- [ ] User satisfaction maintained (issue rate unchanged)
- [ ] Legacy hook deprecated with clear migration path
- [ ] Documentation complete and accurate

---

## Post-Migration Review

### 1 Week Post-100% Deployment

- [ ] Retrospective meeting with engineering team
- [ ] Review all incidents and near-misses
- [ ] Document lessons learned
- [ ] Update rollout plan template for future migrations
- [ ] Analyze total rollout time vs. plan

### 1 Month Post-100% Deployment

- [ ] Verify long-term stability
- [ ] Assess performance trends over time
- [ ] Review user feedback
- [ ] Plan removal of legacy hook for next major version
- [ ] Publish case study or blog post on migration

---

## Appendix

### A. Example Feature Flag Configuration

```json
{
  "features": {
    "useDataNewMigration": {
      "enabled": true,
      "rollout": {
        "SwitchCollectionWidget": 100,
        "StateCollectionWidget": 100,
        "ButtonGroupCollectionWidget": 75,
        "SliderCollectionWidget": 50,
        "CheckboxCollectionWidget": 25,
        "RadioGroupCollectionWidget": 25,
        "SelectCollectionWidget": 10,
        "DialogCollectionWidget": 10,
        "GaugeCollectionWidget": 10,
        "Light2CollectionWidget": 10
      }
    }
  }
}
```

### B. Monitoring Query Examples

**Sentry Query** (error rate):
```sql
SELECT COUNT(*)
FROM errors
WHERE error.message LIKE '%useDataNew%'
  AND timestamp > NOW() - INTERVAL '1 hour'
GROUP BY widget_type
```

**Performance Tracking** (custom event):
```typescript
// Send to analytics on each hook invocation
analytics.track('useDataNew:render', {
    widget: widgetType,
    renderTime: performance.now() - startTime,
    stateCount: states.length,
    hookVersion: 'useDataNew',
});
```

### C. Rollback Script Example

```bash
#!/bin/bash
# rollback-usedatanew.sh

echo "🚨 Initiating rollback of useDataNew migration"

# Update feature flag to disable new hook
echo "Disabling feature flag..."
curl -X POST https://config-api.example.com/flags/useDataNewMigration \
  -H "Authorization: Bearer $API_TOKEN" \
  -d '{"enabled": false}'

# Verify deployment
echo "Verifying rollback..."
sleep 30
ERRORS=$(curl https://monitoring-api.example.com/errors/count?window=5m)

if [ "$ERRORS" -lt 10 ]; then
  echo "✅ Rollback successful - error rate normal"
else
  echo "⚠️ Errors still elevated - manual intervention required"
fi

# Notify team
echo "Sending notifications..."
# Add Slack/email notification here
```

### D. Performance Benchmarking Script

```typescript
// benchmark-usedatanew.ts
import { performance } from 'perf_hooks';
import { renderHook } from '@testing-library/react-hooks';
import useDataNew from './useDataNew/useDataNew';
import useData from './useData';

const iterations = 1000;

function benchmark(hookFn: Function, name: string) {
    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
        renderHook(() => hookFn('oid'));
    }

    const end = performance.now();
    const avgTime = (end - start) / iterations;

    console.log(`${name}: ${avgTime.toFixed(3)}ms per render`);
    return avgTime;
}

const oldTime = benchmark(useData, 'useData (legacy)');
const newTime = benchmark(useDataNew, 'useDataNew');
const diff = ((newTime - oldTime) / oldTime) * 100;

console.log(`\nPerformance difference: ${diff > 0 ? '+' : ''}${diff.toFixed(2)}%`);
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-21 | Development Team | Initial rollout plan created |

---

## Approval

**Plan Approved By**:
- [ ] Engineering Lead: ___________________ Date: ___________
- [ ] QA Lead: ___________________ Date: ___________
- [ ] Product Manager: ___________________ Date: ___________

**Rollout Authorized**:
- [ ] CTO/Technical Director: ___________________ Date: ___________
