# Presidential Dumpsters Color System

## Brand Colors

### Primary Blue (Navy)
- **Dark Navy**: `#061633` - Main background, darkest areas
- **Medium Navy**: `#0A2147` - Gradient middle, cards, panels
- **Usage**: Background gradients, dark sections, footer

### Primary Green (Emerald)
- **Emerald 400**: `text-emerald-400` - Highlights, status indicators, prices
- **Emerald 500**: `emerald-500` - Step completion, borders
- **Emerald 600**: `emerald-600` - Primary buttons, CTAs, active states
- **Emerald 700**: `emerald-700` - Button hover states
- **Usage**: Calls-to-action, active states, success indicators, accent colors

## Neutral Colors

### White (Content & Glass)
- **Solid White**: `white` - Text, solid backgrounds
- **White 95%**: `white/95` - Nearly opaque glass
- **White 90%**: `white/90` - Form backgrounds
- **White 80%**: `white/80` - Badge text
- **White 70%**: `white/70` - Secondary text
- **White 60%**: `white/60` - Tertiary text
- **White 50%**: `white/50` - Subtle text
- **White 40%**: `white/40` - Very subtle text, credits
- **White 20%**: `white/20` - Borders, separators
- **White 15%**: `white/15` - Glass borders (Liquid Glass)
- **White 10%**: `white/10` - Subtle glass, badges
- **White 5%**: `white/5` - Very subtle glass backgrounds

### Slate (Form Elements)
- **Slate 900**: `slate-900` - Form text (dark)
- **Slate 700**: `slate-700` - Form labels, inactive buttons
- **Slate 600**: `slate-600` - Inactive step text
- **Slate 500**: `slate-500` - Inactive badge text
- **Slate 400**: `slate-400` - Placeholder text
- **Slate 200**: `slate-200` - Form borders
- **Slate 100**: `slate-100` - Inactive badges
- **Slate 50**: `slate-50` - Button hover (light)

### Red (Errors)
- **Red 500**: `red-500` - Error text
- **Red 400**: `red-400` - Error borders
- **Red 50**: `red-50/50` - Error backgrounds

## Liquid Glass System

### Default Glass (White)
- Border: `rgba(255, 255, 255, 0.15)`
- Gradient: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`
- Tint: `rgba(255, 255, 255, 0.08)`
- Shine: `rgba(255,255,255,0.4)`
- Shadow: Standard depth shadows

### Accent Glass (Emerald)
- Border: `rgba(16, 185, 129, 0.25)` - emerald-500 at 25%
- Gradient: `linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(255,255,255,0.05) 100%)`
- Tint: `rgba(16, 185, 129, 0.06)`
- Shine: `rgba(16,185,129,0.35)`
- Shadow: Emerald-tinted depth shadows

### Blue Glass (Navy) - **MISSING - NEEDS TO BE ADDED**
- Border: `rgba(10, 33, 71, 0.3)` - #0A2147 at 30%
- Gradient: `linear-gradient(135deg, rgba(10,33,71,0.1) 0%, rgba(6,22,51,0.05) 100%)`
- Tint: `rgba(10, 33, 71, 0.08)`
- Shine: `rgba(10,33,71,0.4)`
- Shadow: Blue-tinted depth shadows

## Component-Specific Colors

### Navigation
- Background: LiquidGlassNav with white glass
- Text: `text-white`
- Phone button: `border-white/20`, hover `border-white/40 bg-white/10`

### Buttons

#### Primary (Emerald)
- Base: `bg-emerald-600 text-white`
- Hover: `bg-emerald-700`
- Shadow: `shadow-emerald-600/30`, hover `shadow-emerald-600/40`
- Ring: `ring-emerald-400/50`
- Active: `bg-emerald-800`

#### Secondary (White Glass)
- Base: `border-white/20 bg-white/10 text-white`
- Hover: `border-white/40 bg-white/20`

### Form Elements

#### Inputs (Light backgrounds)
- Base: `border-slate-200 bg-white text-slate-900`
- Focus: `border-emerald-600 bg-emerald-50/30 ring-emerald-500/20`
- Placeholder: `placeholder:text-slate-400`
- Error: `border-red-400 bg-red-50/50 focus:border-red-500 ring-red-500/20`

#### Step Cards
- Active: `border-emerald-500/60 bg-white shadow-emerald-500/10`
- Complete: `border-emerald-400/50 bg-white`
- Inactive: `border-slate-200 bg-white/95`

#### Step Badges
- Complete: `bg-emerald-500 text-white`
- Incomplete: `bg-slate-100 text-slate-500`

### Feature Cards

#### Accent Card (Green highlight)
- Border: `border-emerald-200/30`
- Background: `bg-emerald-500/10 backdrop-blur-sm`
- Shadow: `shadow-emerald-500/10`
- Text: `text-white`, secondary `text-white/70`

#### Default Card (White glass)
- Border: `border-white/10`
- Background: `bg-white/10 backdrop-blur-sm`
- Shadow: `shadow-white/5`
- Text: `text-white`, secondary `text-white/70`

### Footer
- Background: `bg-[#061633]/60 backdrop-blur-md`
- Border: `border-white/10` (top), `border-white/5` (section divider)
- Text: `text-white/70`, hover `text-white` or `text-emerald-400`
- Links: `text-white/70 hover:text-white` or `hover:text-emerald-400`

## Problems Identified

### Inconsistencies
1. ❌ **No blue-accented glass variant** - we have white and emerald, but no navy blue accent
2. ❌ **Inconsistent feature card styles** - some pages use different opacity levels
3. ❌ **Form card border issue** - LiquidGlassPanel might need better rounding inheritance
4. ❌ **Mixed glass opacity** - using both `white/10` and `white/5` inconsistently

### Missing Elements
1. **Blue Liquid Glass variant** for features that should emphasize the navy brand color
2. **Consistent card pattern** across all location pages
3. **Unified shadow system** - need consistent depth across components

## Recommendations

### 1. Add Blue Glass Variant
Create a "blue" variant for LiquidGlassCard and LiquidGlassPanel that uses the navy blue tints instead of white/emerald.

### 2. Establish Card Hierarchy
- **Hero accent cards**: Use LiquidGlassCard variant="accent" (emerald) for primary features
- **Secondary cards**: Use LiquidGlassCard variant="blue" for secondary features
- **Default cards**: Use LiquidGlassCard variant="default" (white) for neutral content

### 3. Fix Form Rounding
Ensure the LiquidGlassPanel properly propagates `rounded-3xl` to all internal layers and doesn't have conflicting backgrounds.

### 4. Consistent Shadows
- Small cards: `shadow-lg`
- Medium panels: `shadow-xl`
- Large hero elements: `shadow-2xl`
- Always include colored shadow tint matching the element's accent color

## Implementation Plan

1. **Add blue variant** to LiquidGlassPanel and LiquidGlassCard
2. **Update homepage** to use all three variants properly
3. **Update location pages** for consistent card styling
4. **Fix form border/background** issue
5. **Audit and fix** all shadows for consistency
6. **Update FAQ/sizing guide** pages to match
