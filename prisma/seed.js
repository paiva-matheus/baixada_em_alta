const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  const tokens = [
    {
      name: 'admin-token',
      token: 'admin-development-token-123456789',
    },
    {
      name: 'editor-token', 
      token: 'editor-development-token-987654321',
    },
  ];

  for (const tokenData of tokens) {
    await prisma.accessToken.upsert({
      where: { token: tokenData.token },
      update: {},
      create: tokenData,
    });
  }

  const sampleNews = [
    {
      title: 'Nova obra de infraestrutura em Santos',
      description: 'Prefeitura anuncia investimentos em melhorias urbanas para a região central de Santos.',
      content: `
        <p>A <strong>Prefeitura de Santos</strong> anunciou hoje um pacote de investimentos em infraestrutura que beneficiará diretamente a região central da cidade.</p>
        
        <h2>Detalhes do Investimento</h2>
        <p>O projeto contempla as seguintes melhorias:</p>
        <ul>
          <li>Recapeamento de 15 quilômetros de vias</li>
          <li>Instalação de nova iluminação LED</li>
          <li>Melhoria na rede de drenagem</li>
          <li>Criação de novas áreas verdes</li>
        </ul>
        
        <h2>Cronograma</h2>
        <p>As obras devem começar no próximo mês e ter duração prevista de <em>18 meses</em>.</p>
        
        <blockquote>
          "Este é um investimento histórico para nossa cidade", declarou o prefeito em entrevista.
        </blockquote>
      `,
      news_url: 'https://exemplo.com/noticia-santos-infraestrutura',
      image_url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop',
    },
    {
      title: 'Novo terminal de ônibus em São Vicente',
      description: 'Terminal moderno vai atender milhares de passageiros diariamente na região da Baixada Santista.',
      content: `
        <p>São Vicente ganhará um <strong>novo terminal de ônibus</strong> que promete revolucionar o transporte público na região.</p>
        
        <h2>Características do Terminal</h2>
        <p>A nova estrutura contará com:</p>
        <ul>
          <li>20 plataformas de embarque</li>
          <li>Área comercial integrada</li>
          <li>Estacionamento para 300 veículos</li>
          <li>Acessibilidade completa</li>
        </ul>
        
        <p>O terminal foi projetado para atender <strong>50 mil passageiros por dia</strong> e será integrado ao sistema de transporte metropolitano.</p>
        
        <h2>Sustentabilidade</h2>
        <p>O projeto inclui placas solares, sistema de captação de água da chuva e área verde de 2 mil m².</p>
      `,
      news_url: 'https://exemplo.com/noticia-sao-vicente-terminal',
      image_url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop',
    },
    {
      title: 'Festival de verão movimenta economia local',
      description: 'Evento cultural na Baixada Santista atrai turistas e gera empregos na região.',
      content: `
        <p>O <strong>Festival de Verão da Baixada Santista</strong> está movimentando a economia local e atraindo milhares de turistas para a região.</p>
        
        <h2>Números do Festival</h2>
        <ul>
          <li>150 mil visitantes esperados</li>
          <li>200 artistas locais e nacionais</li>
          <li>50 food trucks e barracas</li>
          <li>1.200 empregos temporários criados</li>
        </ul>
        
        <p>O evento, que acontece em diversas praias da região, conta com shows musicais, feira de artesanato e atividades esportivas.</p>
        
        <h2>Impacto Econômico</h2>
        <p>Segundo a <em>Secretaria de Turismo</em>, o festival deve gerar uma receita de aproximadamente <strong>R$ 25 milhões</strong> para a economia local.</p>
      `,
      news_url: 'https://exemplo.com/noticia-festival-verao',
      image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    },
  ];

  for (const newsData of sampleNews) {
    await prisma.news.create({
      data: newsData,
    });
  }

  tokens.forEach(token => {
    console.log(`  - ${token.name}: ${token.token}`);
  });
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });