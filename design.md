# Vilanculo Mobiliário - Design Document

## Paleta de Cores

### Cores Principais
- **Branco**: `#FFFFFF` - Fundo principal
- **Bege Claro**: `#F5F0EB` - Fundos secundários, cards
- **Bege Médio**: `#E8E0D8` - Bordas sutis, divisores
- **Marrom Escuro**: `#3D2B1F` - Texto principal, títulos
- **Marrom Médio**: `#6B4E3D` - Texto secundário, ícones
- **Marrom Claro**: `#A68B7C` - Detalhes, hover states

### Cores de Destaque
- **Verde WhatsApp**: `#25D366` - Botões WhatsApp, CTA flutuante
- **Verde WhatsApp Hover**: `#128C7E` - Estado hover do WhatsApp

### Cores de Estado
- **Disponível**: `#22C55E` - Badge verde
- **Sob Encomenda**: `#F59E0B` - Badge laranja/amarelo

## Tipografia

### Fontes
- **Títulos**: `Playfair Display` - Elegante, serifada
- **Corpo**: `Inter` - Moderna, legível
- **Alternativa**: `system-ui, -apple-system, sans-serif` - Fallback

### Hierarquia
- **H1 (Hero)**: 48px / 3rem, font-weight: 700, letter-spacing: -0.02em
- **H2 (Seções)**: 36px / 2.25rem, font-weight: 600
- **H3 (Cards)**: 20px / 1.25rem, font-weight: 600
- **Body**: 16px / 1rem, font-weight: 400, line-height: 1.6
- **Small**: 14px / 0.875rem, font-weight: 400
- **Caption**: 12px / 0.75rem, font-weight: 500

## Espaçamento

### Seções
- **Padding vertical**: 80px (desktop), 60px (tablet), 40px (mobile)
- **Max-width container**: 1280px
- **Container padding**: 24px (desktop), 16px (mobile)

### Grid de Produtos
- **Gap**: 24px (desktop), 16px (tablet), 12px (mobile)
- **Columns**: 3 (desktop), 2 (tablet), 1 (mobile)

### Componentes
- **Card border-radius**: 12px
- **Button border-radius**: 8px
- **Input border-radius**: 6px
- **Modal border-radius**: 16px

## Animações

### Transições
- **Default**: `all 0.3s ease`
- **Fast**: `all 0.2s ease`
- **Slow**: `all 0.5s ease`

### Scroll Reveal
- **Fade up**: opacity 0 → 1, translateY 30px → 0
- **Duration**: 600ms
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Stagger**: 100ms entre elementos

### Hover Effects
- **Cards**: translateY(-4px), box-shadow increase
- **Buttons**: scale(1.02), brightness increase
- **Images**: scale(1.05) with overflow hidden

### Modal
- **Open**: opacity 0 → 1, scale(0.95) → scale(1)
- **Duration**: 300ms
- **Backdrop**: opacity 0 → 1, background rgba(0,0,0,0.5)

## Componentes

### Botões

**Primário (WhatsApp)**
- Background: `#25D366`
- Color: `#FFFFFF`
- Padding: 14px 28px
- Border-radius: 8px
- Font-weight: 600
- Hover: background `#128C7E`, transform scale(1.02)

**Secundário**
- Background: `#3D2B1F`
- Color: `#FFFFFF`
- Padding: 12px 24px
- Border-radius: 8px
- Hover: background `#6B4E3D`

**Outline**
- Background: transparent
- Border: 2px solid `#3D2B1F`
- Color: `#3D2B1F`
- Hover: background `#3D2B1F`, color `#FFFFFF`

### Cards de Produto
- Background: `#FFFFFF`
- Border: 1px solid `#E8E0D8`
- Border-radius: 12px
- Overflow: hidden
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Hover shadow: `0 8px 24px rgba(0,0,0,0.12)`

### Badges de Estado
- **Disponível**: bg `#DCFCE7`, text `#166534`, border `#22C55E`
- **Sob Encomenda**: bg `#FEF3C7`, text `#92400E`, border `#F59E0B`
- Padding: 4px 12px
- Border-radius: 20px
- Font-size: 12px
- Font-weight: 600

## Layout

### Header
- Position: fixed
- Background: transparent → `#FFFFFF` (on scroll)
- Height: 80px
- Shadow on scroll: `0 2px 10px rgba(0,0,0,0.05)`
- Z-index: 1000

### Hero
- Height: 100vh (min 600px)
- Background: gradient overlay on image
- Gradient: `linear-gradient(to right, rgba(61,43,31,0.85) 0%, rgba(61,43,31,0.4) 100%)`
- Content: left-aligned, max-width 600px

### Navegação
- Logo: left
- Menu: center
- Language toggle + CTA: right
- Mobile: hamburger menu

## Responsividade

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small**: < 480px

### Adaptações Mobile
- Hero: centered text, smaller font sizes
- Grid: single column
- Header: hamburger menu
- Modal: full-screen
- Floating button: smaller, positioned 16px from edges
