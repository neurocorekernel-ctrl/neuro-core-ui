/**
 * NEURO-CORE SDK v2.0 - TypeScript Type Definitions
 */

export interface NeuroCoreOptions {
  /**
   * Cognitive Load Index threshold for triggering pruning (0.0 to 1.0).
   * @default 0.70
   */
  threshold?: number;

  /**
   * Callback function triggered when CLI score updates.
   */
  onScoreChange?: (score: number) => void;

  /**
   * Callback function triggered when interface pruning state changes.
   */
  onPruneStateChange?: (isPruned: boolean) => void;
}

export declare class NeuroCoreEngine {
  constructor(options?: NeuroCoreOptions);

  /**
   * Current Cognitive Load Index score (0.00 to 1.00).
   */
  public currentScore: number;

  /**
   * Manually evaluates current stress score and applies dynamic pruning.
   */
  public evaluatePruning(score: number): void;

  /**
   * Resets the biometric tracking buffers.
   */
  public reset(): void;
}

declare global {
  interface Window {
    NeuroCore: typeof NeuroCoreEngine;
  }
}
