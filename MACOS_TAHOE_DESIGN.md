# macOS Tahoe (macOS 26) Liquid Glass Design System

## Overview

macOS Tahoe, released September 15, 2025, introduced **Liquid Glass** - Apple's most significant visual overhaul since iOS 7. The design language creates reflective, glossy elements that dynamically react to content and scrolling.

## Core Principles

### 1. Translucency & Vibrancy
- Menus and widgets appear translucent with blurry versions of content beneath
- Elements dynamically reflect colors from their surroundings
- Translucent effects extend to: desktop icons, folders, Dock, navigation, menus, toolbars, Control Center

### 2. Liquid Refraction
- **Key Feature**: When one element moves over another (slider, dialog, etc.), there's a liquid-like refraction effect
- Elements appear to bend light like actual glass
- Creates depth and physicality

### 3. Rounded Everything
- Buttons are more curved and less flat
- Toolbars and sidebars have softened rounded corners
- Menu elements are fully rounded
- Even app icons have increased corner radius

### 4. Adaptive Sizing
- Toolbars and sidebars automatically adjust size to fit content
- Dynamic spacing based on content density
- Fluid layouts that respond to window size

### 5. Depth Through Light & Shadow
- More pronounced depth effects
- Softer, more diffused shadows
- Multiple shadow layers for realism
- Light plays across surfaces

## Technical Specifications

### Standard Liquid Glass CSS
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.7);  /* 70% opacity - more opaque than previous */
  backdrop-filter: blur(10px);
  border-radius: 16px;                    /* Standard corner radius */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);  /* Softer shadows */
}
```

### Progressive Blur System (Advanced)
Apple uses multiple blur layers for depth:
```css
/* Far layer - 40px blur for background depth */
backdrop-filter: blur(40px);
opacity: 0.3;

/* Mid layer - 20px blur with saturation boost */
backdrop-filter: blur(20px) saturate(180%);

/* Near layer - 10px blur with tint */
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.08);
```

### Rounded Corners Hierarchy
- **Large panels**: `border-radius: 24px` (0.75rem)
- **Standard cards**: `border-radius: 16px` (0.5rem)
- **Buttons**: `border-radius: 12px` (0.375rem)
- **Small chips**: `border-radius: 8px` (0.25rem)

### Shadow System
Liquid Glass uses softer, more diffused shadows:
```css
/* Light shadow for elevation */
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);

/* Medium shadow for cards */
box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);

/* Deep shadow for modals */
box-shadow: 0 16px 60px rgba(0, 0, 0, 0.12);
```

### Animation System
**Spring-based animations** are key to Liquid Glass:
```css
/* Don't use: ease, ease-in-out */
/* Do use: Spring physics */

/* Framer Motion spring config */
transition: {
  type: "spring",
  stiffness: 300,
  damping: 30
}

/* CSS approximation */
transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
```

## Key UI Patterns

### 1. Floating Elements
- Menu bar is fully transparent
- Dock has adjustable transparency
- Elements "float" above backgrounds with depth

### 2. Dynamic Color Reflection
- Glass elements change tint based on content beneath
- Scrolling causes color shifts in translucent materials
- Vibrancy effect reflects surrounding colors

### 3. Refraction on Overlap
When elements overlap:
- Create a "lens" effect at the intersection
- Use increased blur at overlap points
- Add subtle scale/transform animations

### 4. Content-Aware Transparency
- More transparent over light backgrounds
- Slightly more opaque over dark backgrounds
- Adaptive contrast for readability

### 5. Hover & Interaction States
```css
/* Hover: Slight lift */
transform: translateY(-2px);
box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);

/* Active: Slight press */
transform: scale(0.98);

/* Focus: Ring glow */
box-shadow: 0 0 0 4px rgba(color, 0.2);
```

## Implementation Checklist

### ✅ Already Implemented
- [x] Progressive blur system (40px → 20px → 10px)
- [x] Vibrancy with saturate(180%)
- [x] Multi-layer glass panels
- [x] Gradient overlays
- [x] Top shine (light refraction simulation)
- [x] Color variants (default, accent, blue)

### 🔄 Needs Enhancement
- [ ] Increase opacity to 70% (currently using lower values)
- [ ] Soften shadows (currently too harsh)
- [ ] Add spring-based animations (currently using ease)
- [ ] Implement refraction effects on overlap
- [ ] Add hover lift animations
- [ ] Increase border-radius consistency to 16px-24px
- [ ] Add dynamic color reflection on scroll
- [ ] Implement adaptive transparency based on background

### ➕ New Additions Needed
- [ ] Refraction component for overlapping elements
- [ ] Spring animation utilities
- [ ] Dynamic tint system based on scroll position
- [ ] Floating effect for navigation/buttons
- [ ] Content-aware transparency helper

## Comparison: Current vs. Tahoe Standard

| Property | Current Implementation | macOS Tahoe Standard | Action |
|----------|----------------------|---------------------|--------|
| Background opacity | 5-10% | 70% | Increase |
| Border radius | 12-24px | 16-24px | Standardize to 16px |
| Shadows | Multiple, various | 0 4px 30px rgba(0,0,0,0.05) | Soften |
| Animations | Cubic bezier | Spring physics | Add spring |
| Blur | 10-40px progressive | 10px standard | Keep progressive (advanced) |
| Refraction | None | On overlap | Add |
| Hover | Scale only | Lift + glow | Enhance |

## Color Integration

### With Brand Colors
Since we have navy blue and emerald green brand colors:

**Blue Liquid Glass** (Navy #0A2147):
```css
background: rgba(10, 33, 71, 0.7);  /* 70% navy */
backdrop-filter: blur(10px) saturate(180%);
border: 1px solid rgba(10, 33, 71, 0.2);
box-shadow: 0 4px 30px rgba(10, 33, 71, 0.12);
```

**Emerald Liquid Glass** (Emerald-500):
```css
background: rgba(16, 185, 129, 0.7);  /* 70% emerald */
backdrop-filter: blur(10px) saturate(180%);
border: 1px solid rgba(16, 185, 129, 0.2);
box-shadow: 0 4px 30px rgba(16, 185, 129, 0.12);
```

## Best Practices

1. **Don't overdo it** - Not every element needs Liquid Glass
2. **Maintain contrast** - Ensure text is readable on glass
3. **Use hierarchy** - Deeper glass for more important elements
4. **Performance** - Limit backdrop-filter usage, it's expensive
5. **Accessibility** - Respect `prefers-reduced-transparency`

## Resources

- macOS Tahoe was announced WWDC 2025 (June 9, 2025)
- Released publicly September 15, 2025
- Biggest visual overhaul since iOS 7 (2013)
- Called "Liquid Glass" officially by Apple
