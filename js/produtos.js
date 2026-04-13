// Vilanculo Mobiliário - Base de Dados de Produtos
// Categorias: cozinhas, armarios, camas

const produtosDB = {
  cozinhas: [
    {
      id: "coz-001",
      nome: "Cozinha Moderna Branca",
      nomeEn: "Modern White Kitchen",
      preco: 12500,
      imagem: "images/produtos/cozinha1.jpg",
      estado: "sob-encomenda",
      descricao: "Cozinha planejada em MDF branco com detalhes em carvalho. Inclui armários suspensos, balcão inferior e iluminação LED. Design limpo e funcional para ambientes modernos.",
      descricaoEn: "Planned kitchen in white MDF with oak details. Includes overhead cabinets, lower counter and LED lighting. Clean and functional design for modern environments."
    },
    {
      id: "coz-002",
      nome: "Cozinha Nogueira Compacta",
      nomeEn: "Compact Walnut Kitchen",
      preco: 9800,
      imagem: "images/produtos/cozinha2.jpg",
      estado: "disponivel",
      descricao: "Cozinha compacta em madeira nogueira escura, ideal para espaços pequenos. Armários modulares com design inteligente e acabamento premium.",
      descricaoEn: "Compact dark walnut wood kitchen, ideal for small spaces. Modular cabinets with smart design and premium finish."
    },
    {
      id: "coz-003",
      nome: "Cozinha Luxo Ilha Central",
      nomeEn: "Luxury Kitchen with Island",
      preco: 18500,
      imagem: "images/produtos/cozinha3.jpg",
      estado: "sob-encomenda",
      descricao: "Cozinha luxuosa em tons de bege e carvalho claro com ilha central espaçosa. Armários do teto ao chão, acabamento de alto padrão e design contemporâneo.",
      descricaoEn: "Luxurious kitchen in beige and light oak tones with spacious central island. Floor-to-ceiling cabinets, high-end finish and contemporary design."
    },
    {
      id: "coz-004",
      nome: "Cozinha Industrial Moderna",
      nomeEn: "Modern Industrial Kitchen",
      preco: 14200,
      imagem: "images/produtos/cozinha4.jpg",
      estado: "disponivel",
      descricao: "Cozinha industrial com armários em madeira escura e elementos em metal. Design urbano sofisticado com bancada de concreto e iluminação pendente.",
      descricaoEn: "Industrial kitchen with dark wood cabinets and metal elements. Sophisticated urban design with concrete counter and pendant lighting."
    },
    {
      id: "coz-005",
      nome: "Cozinha Rústica Carvalho",
      nomeEn: "Rustic Oak Kitchen",
      preco: 15800,
      imagem: "images/produtos/cozinha5.jpg",
      estado: "sob-encomenda",
      descricao: "Cozinha rústica moderna em madeira carvalho com bancada de madeira maciça. Design campestre elegante com ilha central e ambiente acolhedor familiar.",
      descricaoEn: "Modern rustic kitchen in oak wood with solid wood countertop. Elegant country design with central island and cozy family atmosphere."
    },
    {
      id: "coz-006",
      nome: "Cozinha Minimalista Cinza",
      nomeEn: "Minimalist Gray Kitchen",
      preco: 11200,
      imagem: "images/produtos/cozinha1.jpg",
      estado: "disponivel",
      descricao: "Cozinha minimalista em tons de cinza e branco. Design clean com linhas retas, ideal para apartamentos e espaços modernos.",
      descricaoEn: "Minimalist kitchen in gray and white tones. Clean design with straight lines, ideal for apartments and modern spaces."
    },
    {
      id: "coz-007",
      nome: "Cozinha Clássica Branca",
      nomeEn: "Classic White Kitchen",
      preco: 13500,
      imagem: "images/produtos/cozinha2.jpg",
      estado: "sob-encomenda",
      descricao: "Cozinha clássica em branco puro com detalhes em molduras. Design atemporal que combina elegância e funcionalidade.",
      descricaoEn: "Classic kitchen in pure white with frame details. Timeless design that combines elegance and functionality."
    },
    {
      id: "coz-008",
      nome: "Cozinha Contemporânea",
      nomeEn: "Contemporary Kitchen",
      preco: 16800,
      imagem: "images/produtos/cozinha3.jpg",
      estado: "disponivel",
      descricao: "Cozinha contemporânea com mistura de materiais e texturas. Design inovador para quem busca exclusividade.",
      descricaoEn: "Contemporary kitchen with mix of materials and textures. Innovative design for those seeking exclusivity."
    }
  ],
  armarios: [
    {
      id: "arm-001",
      nome: "Guarda-Roupa Carvalho Deslizante",
      nomeEn: "Oak Sliding Wardrobe",
      preco: 8500,
      imagem: "images/produtos/armario1.jpg",
      estado: "disponivel",
      descricao: "Guarda-roupas embutido em madeira carvalho claro com portas deslizantes. Interior organizado com prateleiras, cabides e gavetas. Design minimalista elegante.",
      descricaoEn: "Built-in wardrobe in light oak wood with sliding doors. Organized interior with shelves, hangers and drawers. Elegant minimalist design."
    },
    {
      id: "arm-002",
      nome: "Roupeiro Nogueira 4 Portas",
      nomeEn: "4-Door Walnut Wardrobe",
      preco: 7200,
      imagem: "images/produtos/armario2.jpg",
      estado: "sob-encomenda",
      descricao: "Roupeiro alto de madeira nogueira escura com design contemporâneo. Portas de abrir com puxadores discretos em metal e acabamento premium.",
      descricaoEn: "Tall dark walnut wood wardrobe with contemporary design. Swing doors with discreet metal handles and premium finish."
    },
    {
      id: "arm-003",
      nome: "Closet Planejado Branco",
      nomeEn: "Planned White Closet",
      preco: 9500,
      imagem: "images/produtos/armario3.jpg",
      estado: "disponivel",
      descricao: "Closet planejado branco com detalhes em madeira. Sistema completo de organização com gavetas, prateleiras, cabides e iluminação LED.",
      descricaoEn: "Planned white closet with wood details. Complete organization system with drawers, shelves, hangers and LED lighting."
    },
    {
      id: "arm-004",
      nome: "Armário Multiuso com Vidro",
      nomeEn: "Multi-purpose Cabinet with Glass",
      preco: 4500,
      imagem: "images/produtos/armario4.jpg",
      estado: "disponivel",
      descricao: "Armário multiuso alto em madeira branca com portas de vidro. Design contemporâneo com prateleiras ajustáveis e acabamento brilhante.",
      descricaoEn: "Tall multi-purpose cabinet in white wood with glass doors. Contemporary design with adjustable shelves and glossy finish."
    },
    {
      id: "arm-005",
      nome: "Buffet Sala de Jantar",
      nomeEn: "Dining Room Buffet",
      preco: 5800,
      imagem: "images/produtos/armario5.jpg",
      estado: "sob-encomenda",
      descricao: "Buffet baixo para sala de jantar em madeira escura. Design moderno com gavetas e portas, pés altos em metal e acabamento sofisticado.",
      descricaoEn: "Low buffet for dining room in dark wood. Modern design with drawers and doors, tall metal feet and sophisticated finish."
    },
    {
      id: "arm-006",
      nome: "Armário de Canto",
      nomeEn: "Corner Cabinet",
      preco: 3200,
      imagem: "images/produtos/armario1.jpg",
      estado: "disponivel",
      descricao: "Armário de canto espaçoso em madeira carvalho. Solução inteligente para aproveitar espaços, com prateleiras internas.",
      descricaoEn: "Spacious corner cabinet in oak wood. Smart solution to utilize spaces, with internal shelves."
    },
    {
      id: "arm-007",
      nome: "Sapateira com Espelho",
      nomeEn: "Shoe Cabinet with Mirror",
      preco: 2800,
      imagem: "images/produtos/armario2.jpg",
      estado: "disponivel",
      descricao: "Sapateira vertical com espelho na porta frontal. Organização prática para calçados com design elegante.",
      descricaoEn: "Vertical shoe cabinet with mirror on front door. Practical organization for footwear with elegant design."
    },
    {
      id: "arm-008",
      nome: "Estante Livros Moderna",
      nomeEn: "Modern Bookshelf",
      preco: 3900,
      imagem: "images/produtos/armario3.jpg",
      estado: "sob-encomenda",
      descricao: "Estante alta para livros em madeira com design moderno. Prateleiras amplas e resistentes para sua biblioteca.",
      descricaoEn: "Tall bookshelf in wood with modern design. Wide and resistant shelves for your library."
    }
  ],
  camas: [
    {
      id: "cama-001",
      nome: "Cama Casal Escandinava",
      nomeEn: "Scandinavian Double Bed",
      preco: 6800,
      imagem: "images/produtos/cama1.jpg",
      estado: "disponivel",
      descricao: "Cama de casal moderna em madeira carvalho com cabeceira estofada em tecido bege. Design escandinavo elegante e confortável.",
      descricaoEn: "Modern double bed in oak wood with upholstered headboard in beige fabric. Elegant and comfortable Scandinavian design."
    },
    {
      id: "cama-002",
      nome: "Base Cama Minimalista",
      nomeEn: "Minimalist Bed Base",
      preco: 4500,
      imagem: "images/produtos/cama2.jpg",
      estado: "disponivel",
      descricao: "Base de cama moderna em madeira nogueira escura. Design minimalista sem cabeceira, estrutura baixa e sólida com acabamento liso premium.",
      descricaoEn: "Modern bed base in dark walnut wood. Minimalist design without headboard, low and solid structure with smooth premium finish."
    },
    {
      id: "cama-003",
      nome: "Cama Solteiro Juvenil",
      nomeEn: "Youth Single Bed",
      preco: 3200,
      imagem: "images/produtos/cama3.jpg",
      estado: "disponivel",
      descricao: "Cama de solteiro juvenil em madeira carvalho claro com cabeceira curva. Design moderno simples e funcional.",
      descricaoEn: "Youth single bed in light oak wood with curved headboard. Simple and functional modern design."
    },
    {
      id: "cama-004",
      nome: "Cama King Size Luxo",
      nomeEn: "Luxury King Size Bed",
      preco: 12500,
      imagem: "images/produtos/cama4.jpg",
      estado: "sob-encomenda",
      descricao: "Cama king size luxuosa em madeira com cabeceira alta estofada em veludo verde. Design clássico moderno com roupa de cama premium.",
      descricaoEn: "Luxurious king size bed in wood with high headboard upholstered in green velvet. Modern classic design with premium bedding."
    },
    {
      id: "cama-005",
      nome: "Cama Queen com Gavetas",
      nomeEn: "Queen Bed with Drawers",
      preco: 7800,
      imagem: "images/produtos/cama1.jpg",
      estado: "disponivel",
      descricao: "Cama queen size com gavetas embutidas na base. Solução inteligente para quartos pequenos, em madeira carvalho.",
      descricaoEn: "Queen size bed with built-in drawers in base. Smart solution for small rooms, in oak wood."
    },
    {
      id: "cama-006",
      nome: "Cama Plataforma Japonesa",
      nomeEn: "Japanese Platform Bed",
      preco: 5600,
      imagem: "images/produtos/cama2.jpg",
      estado: "sob-encomenda",
      descricao: "Cama plataforma em estilo japonês, baixa e ampla. Design zen em madeira escura para ambientes tranquilos.",
      descricaoEn: "Platform bed in Japanese style, low and wide. Zen design in dark wood for tranquil environments."
    },
    {
      id: "cama-007",
      nome: "Cama Beliche Infantil",
      nomeEn: "Children's Bunk Bed",
      preco: 6200,
      imagem: "images/produtos/cama3.jpg",
      estado: "disponivel",
      descricao: "Cama beliche infantil em madeira carvalho com escada integrada. Design seguro e divertido para quartos de crianças.",
      descricaoEn: "Children's bunk bed in oak wood with integrated ladder. Safe and fun design for children's rooms."
    },
    {
      id: "cama-008",
      nome: "Cama Box Conjugada",
      nomeEn: "Box Spring Bed",
      preco: 4800,
      imagem: "images/produtos/cama4.jpg",
      estado: "disponivel",
      descricao: "Cama box conjugada com estrutura reforçada. Conforto e durabilidade em design moderno.",
      descricaoEn: "Box spring bed with reinforced structure. Comfort and durability in modern design."
    }
  ]
};

// Galeria de trabalhos realizados
const galeriaDB = [
  {
    id: "gal-001",
    imagem: "images/galeria/trabalho1.jpg",
    titulo: "Sala de Estar Completa",
    tituloEn: "Complete Living Room",
    categoria: "sala"
  },
  {
    id: "gal-002",
    imagem: "images/galeria/trabalho2.jpg",
    titulo: "Quarto com Closet Integrado",
    tituloEn: "Bedroom with Integrated Closet",
    categoria: "quarto"
  },
  {
    id: "gal-003",
    imagem: "images/galeria/trabalho3.jpg",
    titulo: "Cozinha Moderna Instalada",
    tituloEn: "Modern Kitchen Installed",
    categoria: "cozinha"
  },
  {
    id: "gal-004",
    imagem: "images/galeria/trabalho4.jpg",
    titulo: "Escritório Home Office",
    tituloEn: "Home Office",
    categoria: "escritorio"
  }
];

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.produtosDB = produtosDB;
  window.galeriaDB = galeriaDB;
}