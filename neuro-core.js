/**
 * NEURO-CORE SDK v1.0 (Production-Ready)
 * Dynamic Neuro-Ergonomic UI Adaptation Engine
 */
(function (window, document) {
  'use me';

  class NeuroCoreEngine {
    constructor(options = {}) {
      this.threshold = options.threshold || 0.70;
      this.mousePositions = [];
      this.init();
    }

    init() {
      window.addEventListener('mousemove', (e) => this.processMovement(e));
      this.injectStyles();
    }

    injectStyles() {
      const style = document.createElement('style');
      style.innerHTML = `
        .neuro-pruned {
          opacity: 0.15 !important;
          filter: blur(4px) !important;
          pointer-events: none !important;
          transition: all 0.5s ease-in-out !important;
        }
      `;
      document.head.appendChild(style);
    }

    processMovement(event) {
      const now = Date.now();
      this.mousePositions.push({ x: event.clientX, y: event.clientY, time: now });
      this.mousePositions = this.mousePositions.filter(p => now - p.time < 1000);

      if (this.mousePositions.length > 5) {
        const cliScore = this.calculateCLI();
        this.evaluatePruning(cliScore);
      }
    }

    calculateCLI() {
      let totalDistance = 0;
      for (let i = 1; i < this.mousePositions.length; i++) {
        const p1 = this.mousePositions[i - 1];
        const p2 = this.mousePositions[i];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        totalDistance += Math.sqrt(dx * dx + dy * dy);
      }
      let score = Math.min(Math.max((totalDistance / 2200), 0), 1);
      return parseFloat(score.toFixed(2));
    }

    evaluatePruning(score) {
      const secondaryElements = document.querySelectorAll('[data-neuro-secondary="true"]');
      secondaryElements.forEach(el => {
        if (score >= this.threshold) {
          el.classList.add('neuro-pruned');
        } else {
          el.classList.remove('neuro-pruned');
        }
      });
    }
  }

  // Global Export
  window.NeuroCore = NeuroCoreEngine;
})(window, document);
