/**
 * Vilanculo Mobiliário - JavaScript Principal
 * Funcionalidades: Idiomas, Produtos, Modal, Scroll, WhatsApp
 */

// ========================================
// CONFIGURAÇÕES GLOBAIS
// ========================================
const CONFIG = {
  whatsappNumber: '258845629930',
  produtosPorPagina: 4,
  idiomaPadrao: 'pt'
};

// ========================================
// TRADUÇÕES
// ========================================
const traducoes = {
  pt: {
    // Navegação
    navCozinhas: 'Cozinhas',
    navArmarios: 'Armários',
    navCamas: 'Camas',
    navNovidades: 'Novidades',
    navGaleria: 'Galeria',
    navSobre: 'Sobre',
    navContacto: 'Contacto',
    
    // Hero
    heroSubtitle: 'Design inteligente.',
    heroDescription: 'Madeira de qualidade.',
    heroCta: 'Solicite já o seu móvel por medida e transforme o seu espaço.',
    btnWhatsapp: 'Pedir via WhatsApp',
    
    // Seções
    secCozinhas: 'Cozinhas',
    secCozinhasSub: 'Cozinhas planejadas com design moderno e funcionalidade',
    secArmarios: 'Armários',
    secArmariosSub: 'Armários e closets personalizados para seu espaço',
    secCamas: 'Camas',
    secCamasSub: 'Camas confortáveis e elegantes para seu descanso',
    secNovidades: 'Novidades',
    secNovidadesSub: 'Conheça nossos últimos projetos e lançamentos',
    secGaleria: 'Galeria',
    secGaleriaSub: 'Trabalhos realizados e projetos concluídos',
    secSobre: 'Sobre Nós',
    secSobreSub: 'Conheça a Vilanculo Mobiliário',
    secContacto: 'Contacto',
    secContactoSub: 'Entre em contacto connosco',
    
    // Botões
    btnCarregarMais: 'Carregar mais',
    btnCarregando: 'Carregando...',
    btnVerMais: 'Ver detalhes',
    btnPedirOrcamento: 'Pedir orçamento personalizado',
    
    // Modal
    modalAcabamento: 'Acabamento:',
    modalTamanho: 'Tamanho:',
    modalCarvalho: 'Carvalho',
    modalBranco: 'Branco',
    modalNogueira: 'Nogueira',
    modalPequeno: 'Pequeno',
    modalMedio: 'Médio',
    modalGrande: 'Grande',
    
    // Estados
    estadoDisponivel: 'Disponível',
    estadoEncomenda: 'Sob encomenda',
    
    // Sobre
    sobreTitulo: 'Arte em Madeira com Paixão',
    sobreTexto1: 'A Vilanculo Mobiliário nasceu da paixão pela carpintaria e pelo design de interiores. Com anos de experiência, transformamos madeira de qualidade em móveis únicos que combinam beleza, funcionalidade e durabilidade.',
    sobreTexto2: 'Cada peça é cuidadosamente planejada e executada com atenção aos detalhes, utilizando técnicas tradicionais e materiais selecionados. Nosso compromisso é criar móveis que superem as expectativas dos nossos clientes.',
    sobreQualidade: 'Qualidade Premium',
    sobreQualidadeDesc: 'Materiais selecionados e acabamento impecável',
    sobrePersonalizacao: 'Personalização Total',
    sobrePersonalizacaoDesc: 'Móveis feitos sob medida para seu espaço',
    sobrePrazo: 'Prazo Garantido',
    sobrePrazoDesc: 'Entrega em 3 a 10 dias úteis',
    sobreSuporte: 'Suporte Dedicado',
    sobreSuporteDesc: 'Atendimento personalizado do início ao fim',
    
    // Contato
    contatoEndereco: 'Endereço',
    contatoEnderecoValor: 'Moçambique, Matola, Machava, Rua 23 número 32',
    contatoTelefone: 'Telefone',
    contatoPagamentos: 'Formas de Pagamento',
    contatoPrazo: 'Prazo de Entrega',
    contatoPrazoValor: '3 a 10 dias úteis',
    
    // Footer
    footerDesc: 'Design inteligente. Madeira de qualidade. Móveis sob medida para transformar seu espaço.',
    footerLinks: 'Links Rápidos',
    footerServicos: 'Serviços',
    footerContato: 'Contacto',
    footerDireitos: 'Todos os direitos reservados.',
    
    // WhatsApp Mensagens
    msgPedido: 'Olá, gostaria de solicitar este mobiliário:',
    msgNome: 'Nome',
    msgLink: 'Link',
    msgTamanho: 'Tamanho',
    msgAcabamento: 'Acabamento',
    msgMedida: 'Olá, gostaria de um móvel personalizado. Posso enviar as medidas e referências.'
  },
  en: {
    // Navigation
    navCozinhas: 'Kitchens',
    navArmarios: 'Wardrobes',
    navCamas: 'Beds',
    navNovidades: 'New Arrivals',
    navGaleria: 'Gallery',
    navSobre: 'About',
    navContacto: 'Contact',
    
    // Hero
    heroSubtitle: 'Smart design.',
    heroDescription: 'Quality wood.',
    heroCta: 'Request your custom furniture today and transform your space.',
    btnWhatsapp: 'Order via WhatsApp',
    
    // Sections
    secCozinhas: 'Kitchens',
    secCozinhasSub: 'Planned kitchens with modern design and functionality',
    secArmarios: 'Wardrobes',
    secArmariosSub: 'Custom wardrobes and closets for your space',
    secCamas: 'Beds',
    secCamasSub: 'Comfortable and elegant beds for your rest',
    secNovidades: 'New Arrivals',
    secNovidadesSub: 'Discover our latest projects and launches',
    secGaleria: 'Gallery',
    secGaleriaSub: 'Completed works and projects',
    secSobre: 'About Us',
    secSobreSub: 'Meet Vilanculo Mobiliário',
    secContacto: 'Contact',
    secContactoSub: 'Get in touch with us',
    
    // Buttons
    btnCarregarMais: 'Load more',
    btnCarregando: 'Loading...',
    btnVerMais: 'View details',
    btnPedirOrcamento: 'Request custom quote',
    
    // Modal
    modalAcabamento: 'Finish:',
    modalTamanho: 'Size:',
    modalCarvalho: 'Oak',
    modalBranco: 'White',
    modalNogueira: 'Walnut',
    modalPequeno: 'Small',
    modalMedio: 'Medium',
    modalGrande: 'Large',
    
    // Estados
    estadoDisponivel: 'Available',
    estadoEncomenda: 'Made to order',
    
    // Sobre
    sobreTitulo: 'Wood Art with Passion',
    sobreTexto1: 'Vilanculo Mobiliário was born from a passion for carpentry and interior design. With years of experience, we transform quality wood into unique furniture that combines beauty, functionality, and durability.',
    sobreTexto2: 'Each piece is carefully planned and executed with attention to detail, using traditional techniques and selected materials. Our commitment is to create furniture that exceeds our customers\' expectations.',
    sobreQualidade: 'Premium Quality',
    sobreQualidadeDesc: 'Selected materials and impeccable finish',
    sobrePersonalizacao: 'Total Customization',
    sobrePersonalizacaoDesc: 'Custom-made furniture for your space',
    sobrePrazo: 'Guaranteed Deadline',
    sobrePrazoDesc: 'Delivery in 3 to 10 business days',
    sobreSuporte: 'Dedicated Support',
    sobreSuporteDesc: 'Personalized service from start to finish',
    
    // Contato
    contatoEndereco: 'Address',
    contatoEnderecoValor: 'Mozambique, Matola, Machava, Street 23 number 32',
    contatoTelefone: 'Phone',
    contatoPagamentos: 'Payment Methods',
    contatoPrazo: 'Delivery Time',
    contatoPrazoValor: '3 to 10 business days',
    
    // Footer
    footerDesc: 'Smart design. Quality wood. Custom furniture to transform your space.',
    footerLinks: 'Quick Links',
    footerServicos: 'Services',
    footerContato: 'Contact',
    footerDireitos: 'All rights reserved.',
    
    // WhatsApp Mensagens
    msgPedido: 'Hello, I would like to request this furniture:',
    msgNome: 'Name',
    msgLink: 'Link',
    msgTamanho: 'Size',
    msgAcabamento: 'Finish',
    msgMedida: 'Hello, I would like a custom furniture piece. I can send measurements and references.'
  }
};

// ========================================
// ESTADO DA APLICAÇÃO
// ========================================
let estado = {
  idioma: CONFIG.idiomaPadrao,
  produtosVisiveis: {
    cozinhas: CONFIG.produtosPorPagina,
    armarios: CONFIG.produtosPorPagina,
    camas: CONFIG.produtosPorPagina
  },
  modalProduto: null,
  opcoesSelecionadas: {
    acabamento: 'carvalho',
    tamanho: 'medio'
  }
};

// ========================================
// FUNÇÕES DE IDIOMA
// ========================================
function trocarIdioma(idioma) {
  estado.idioma = idioma;
  
  // Atualizar botões de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === idioma);
  });
  
  // Atualizar todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const chave = el.dataset.i18n;
    if (traducoes[idioma][chave]) {
      el.textContent = traducoes[idioma][chave];
    }
  });
  
  // Atualizar produtos
  renderizarProdutos('cozinhas');
  renderizarProdutos('armarios');
  renderizarProdutos('camas');
  
  // Atualizar galeria
  renderizarGaleria();
  
  // Atualizar meta tags
  document.documentElement.lang = idioma === 'pt' ? 'pt-PT' : 'en';
}

function t(chave) {
  return traducoes[estado.idioma][chave] || chave;
}

// ========================================
// FUNÇÕES DE PRODUTOS
// ========================================
function formatarPreco(preco) {
  return preco.toLocaleString('pt-MZ') + ' MZN';
}

function criarCardProduto(produto) {
  const estadoKey = produto.estado === 'disponivel' ? 'estadoDisponivel' : 'estadoEncomenda';
  
  return `
    <article class="produto-card reveal" onclick="abrirModal('${produto.id}')">
      <div class="produto-imagem">
        <img src="${produto.imagem}" alt="${estado.idioma === 'pt' ? produto.nome : produto.nomeEn}" loading="lazy">
        <span class="produto-badge ${produto.estado}">${t(estadoKey)}</span>
      </div>
      <div class="produto-info">
        <h3 class="produto-nome">${estado.idioma === 'pt' ? produto.nome : produto.nomeEn}</h3>
        <p class="produto-preco">${formatarPreco(produto.preco)}</p>
      </div>
    </article>
  `;
}

function renderizarProdutos(categoria) {
  const container = document.getElementById(`grid-${categoria}`);
  if (!container) return;
  
  const produtos = window.produtosDB[categoria] || [];
  const visiveis = produtos.slice(0, estado.produtosVisiveis[categoria]);
  
  container.innerHTML = visiveis.map(criarCardProduto).join('');
  
  // Verificar se há mais produtos
  const btnLoadMore = document.getElementById(`load-more-${categoria}`);
  if (btnLoadMore) {
    const temMais = estado.produtosVisiveis[categoria] < produtos.length;
    btnLoadMore.style.display = temMais ? 'inline-flex' : 'none';
  }
  
  // Reativar animações
  initScrollReveal();
}

function carregarMais(categoria) {
  const btn = document.getElementById(`load-more-${categoria}`);
  btn.classList.add('loading');
  
  // Simular delay de carregamento
  setTimeout(() => {
    estado.produtosVisiveis[categoria] += CONFIG.produtosPorPagina;
    renderizarProdutos(categoria);
    btn.classList.remove('loading');
  }, 600);
}

function encontrarProduto(id) {
  const todasCategorias = ['cozinhas', 'armarios', 'camas'];
  for (const cat of todasCategorias) {
    const produto = window.produtosDB[cat].find(p => p.id === id);
    if (produto) return { ...produto, categoria: cat };
  }
  return null;
}

// ========================================
// FUNÇÕES DO MODAL
// ========================================
function abrirModal(produtoId) {
  const produto = encontrarProduto(produtoId);
  if (!produto) return;
  
  estado.modalProduto = produto;
  estado.opcoesSelecionadas = { acabamento: 'carvalho', tamanho: 'medio' };
  
  const modal = document.getElementById('modal-produto');
  const modalBody = document.getElementById('modal-body');
  
  const estadoKey = produto.estado === 'disponivel' ? 'estadoDisponivel' : 'estadoEncomenda';
  
  modalBody.innerHTML = `
    <div class="modal-imagem">
      <img src="${produto.imagem}" alt="${estado.idioma === 'pt' ? produto.nome : produto.nomeEn}">
    </div>
    <div class="modal-detalhes">
      <h2 class="modal-titulo">${estado.idioma === 'pt' ? produto.nome : produto.nomeEn}</h2>
      <p class="modal-preco">${formatarPreco(produto.preco)}</p>
      <span class="produto-badge ${produto.estado}" style="align-self: flex-start; margin-bottom: 16px;">${t(estadoKey)}</span>
      <p class="modal-descricao">${estado.idioma === 'pt' ? produto.descricao : produto.descricaoEn}</p>
      
      <div class="modal-opcoes">
        <div class="opcao-grupo">
          <span class="opcao-label">${t('modalAcabamento')}</span>
          <div class="opcao-botoes">
            <button class="opcao-btn active" data-tipo="acabamento" data-valor="carvalho" onclick="selecionarOpcao('acabamento', 'carvalho')">${t('modalCarvalho')}</button>
            <button class="opcao-btn" data-tipo="acabamento" data-valor="branco" onclick="selecionarOpcao('acabamento', 'branco')">${t('modalBranco')}</button>
            <button class="opcao-btn" data-tipo="acabamento" data-valor="nogueira" onclick="selecionarOpcao('acabamento', 'nogueira')">${t('modalNogueira')}</button>
          </div>
        </div>
        
        <div class="opcao-grupo">
          <span class="opcao-label">${t('modalTamanho')}</span>
          <div class="opcao-botoes">
            <button class="opcao-btn" data-tipo="tamanho" data-valor="pequeno" onclick="selecionarOpcao('tamanho', 'pequeno')">${t('modalPequeno')}</button>
            <button class="opcao-btn active" data-tipo="tamanho" data-valor="medio" onclick="selecionarOpcao('tamanho', 'medio')">${t('modalMedio')}</button>
            <button class="opcao-btn" data-tipo="tamanho" data-valor="grande" onclick="selecionarOpcao('tamanho', 'grande')">${t('modalGrande')}</button>
          </div>
        </div>
      </div>
      
      <div class="modal-acoes">
        <a href="${gerarLinkWhatsApp(produto)}" target="_blank" class="btn-modal-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          ${t('btnWhatsapp')}
        </a>
        <button class="btn-modal-orcamento" onclick="pedirOrcamentoPersonalizado()">
          ${t('btnPedirOrcamento')}
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  const modal = document.getElementById('modal-produto');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  estado.modalProduto = null;
}

function selecionarOpcao(tipo, valor) {
  estado.opcoesSelecionadas[tipo] = valor;
  
  // Atualizar UI
  document.querySelectorAll(`.opcao-btn[data-tipo="${tipo}"]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.valor === valor);
  });
  
  // Atualizar link do WhatsApp
  const btnWhatsapp = document.querySelector('.btn-modal-whatsapp');
  if (btnWhatsapp && estado.modalProduto) {
    btnWhatsapp.href = gerarLinkWhatsApp(estado.modalProduto);
  }
}

function gerarLinkWhatsApp(produto) {
  const baseUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
  const nomeProduto = estado.idioma === 'pt' ? produto.nome : produto.nomeEn;
  const urlProduto = `${window.location.origin}/produto/${produto.id}`;
  
  const acabamentoLabel = t('modal' + estado.opcoesSelecionadas.acabamento.charAt(0).toUpperCase() + estado.opcoesSelecionadas.acabamento.slice(1));
  const tamanhoLabel = t('modal' + estado.opcoesSelecionadas.tamanho.charAt(0).toUpperCase() + estado.opcoesSelecionadas.tamanho.slice(1));
  
  const mensagem = estado.idioma === 'pt' 
    ? `${t('msgPedido')}%0A%0A${t('msgNome')}: ${nomeProduto}%0A${t('msgLink')}: ${urlProduto}%0A${t('msgTamanho')}: ${tamanhoLabel}%0A${t('msgAcabamento')}: ${acabamentoLabel}`
    : `${t('msgPedido')}%0A%0A${t('msgNome')}: ${nomeProduto}%0A${t('msgLink')}: ${urlProduto}%0A${t('msgTamanho')}: ${tamanhoLabel}%0A${t('msgAcabamento')}: ${acabamentoLabel}`;
  
  return `${baseUrl}?text=${mensagem}`;
}

function pedirOrcamentoPersonalizado() {
  const baseUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
  const mensagem = encodeURIComponent(t('msgMedida'));
  window.open(`${baseUrl}?text=${mensagem}`, '_blank');
}

// ========================================
// FUNÇÕES DA GALERIA
// ========================================
function renderizarGaleria() {
  const container = document.getElementById('grid-galeria');
  if (!container || !window.galeriaDB) return;
  
  container.innerHTML = window.galeriaDB.map(item => `
    <div class="galeria-item reveal">
      <img src="${item.imagem}" alt="${estado.idioma === 'pt' ? item.titulo : item.tituloEn}" loading="lazy">
      <div class="galeria-overlay">
        <h3 class="galeria-titulo">${estado.idioma === 'pt' ? item.titulo : item.tituloEn}</h3>
      </div>
    </div>
  `).join('');
}

// ========================================
// SCROLL REVEAL
// ========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

// ========================================
// HEADER SCROLL
// ========================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  
  menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
  });
  
  // Fechar menu ao clicar em link
  navMobile.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('active');
    });
  });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// WHATSAPP FLOAT
// ========================================
function initWhatsAppFloat() {
  const btn = document.querySelector('.whatsapp-float');
  if (btn) {
    btn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(t('msgMedida'))}`;
  }
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar funções
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initWhatsAppFloat();
  
  // Renderizar produtos
  renderizarProdutos('cozinhas');
  renderizarProdutos('armarios');
  renderizarProdutos('camas');
  
  // Renderizar galeria
  renderizarGaleria();
  
  // Event listeners para idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => trocarIdioma(btn.dataset.lang));
  });
  
  // Event listener para fechar modal
  document.querySelector('.modal-close').addEventListener('click', fecharModal);
  document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) fecharModal();
  });
  
  // Fechar modal com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
  });
});

// Exportar funções globais
window.trocarIdioma = trocarIdioma;
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.selecionarOpcao = selecionarOpcao;
window.carregarMais = carregarMais;
window.pedirOrcamentoPersonalizado = pedirOrcamentoPersonalizado;