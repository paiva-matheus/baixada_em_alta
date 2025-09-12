export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre o Baixada Em Alta
            </h1>
          </div>
  
          <div className="prose prose-lg max-w-none mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Nossa Missão
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                O <strong className="text-baixada-blue dark:text-blue-400">Baixada Em Alta</strong> é uma 
                plataforma dedicada a agregar notícias relevantes para o mercado de trabalho e oportunidades 
                de emprego na região da Baixada Santista, em São Paulo.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Nossa equipe seleciona e reúne informações de diversos portais de notícias confiáveis, 
                focando em conteúdos que impactam diretamente a vida profissional dos moradores da região, 
                desde Santos e São Vicente até Guarujá, Cubatão e demais cidades.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-baixada-green rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Empregados CLT
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Informações sobre direitos trabalhistas, legislação, benefícios e 
                  oportunidades de emprego formal na região.
                </p>
              </div>
  
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-baixada-blue rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Profissionais PJ
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Conteúdo sobre empreendedorismo, contratações PJ, mercado freelancer 
                  e oportunidades de negócio na Baixada Santista.
                </p>
              </div>
            </div>
  
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                O que você encontra aqui
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    📰 Notícias Selecionadas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Conteúdo curado de portais confiáveis sobre empregos, economia local e 
                    oportunidades de carreira.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    ⚖️ Direitos Trabalhistas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Guia completo com os principais direitos garantidos pela CLT para 
                    trabalhadores brasileiros.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    🏢 Mercado Local
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Informações específicas sobre o mercado de trabalho na região da 
                    Baixada Santista.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    📈 Guia MEI
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Informações completas sobre Microempreendedor Individual, 
                    formalização e gestão do negócio.
                  </p>
                </div>
              </div>
            </div>
  
            <div className="bg-gradient-to-r from-baixada-blue to-baixada-green rounded-lg p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-4">
                Mantendo você informado sobre o mercado de trabalho local
              </h3>
              <p className="text-blue-100">
                Nossa equipe trabalha diariamente para trazer as informações mais relevantes 
                e atualizadas sobre empregos e oportunidades na Baixada Santista.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }