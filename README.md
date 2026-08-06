# 🧠 Neuro-Core SDK (v2.0)
> **Production-Ready Multi-Input Biometric Cognitive Load Index & Dynamic UI Pruning SDK**

Neuro-Core is an enterprise-grade biometric dynamic UI pruning engine designed for high-stress operational environments (such as Aviation EFB/iPad systems, High-Velocity E-Commerce, and Critical Dashboards).

---

## 🚀 Key Features

* **Multi-Input Biometric Processing (v2.0):** Real-time evaluation of Mouse velocity/acceleration, Touch/Gesture hesitancies (iPad/Tablet EFB), and Keyboard typing jitter.
* **Composite Cognitive Load Index ($CLI$):** Dynamic mathematical scoring ($0.00$ to $1.00$) calculated within rolling time windows.
* **Dynamic UI Pruning:** Automatic blur, opacity attenuation, or removal of non-essential secondary interface elements (`data-neuro-secondary="true"`) under high cognitive strain.
* **Enterprise Modular Architecture:** Complete TypeScript definitions (`index.d.ts`), NPM package structure (`package.json`), and Zero-Dependency CDN distribution.

---

## 📦 Quick Start & Integration

### 1. Script CDN Tag (Web / Standalone Applications)
Add the following snippet inside your HTML `<head>` or `<body>`:

```html
<script src="[https://neuro-core-gamma.vercel.app/neuro-core.js](https://neuro-core-gamma.vercel.app/neuro-core.js)"></script>
<script>
  const neuro = new NeuroCore({
    threshold: 0.70
  });
</script>
