interface MEIInfo {
    title: string;
    description: string;
    details: string[];
    highlight?: boolean;
  }
  
  const meiInformation: MEIInfo[] = [
    {
      title: 'O que é o MEI?',
      description: 'Microempreendedor Individual é uma modalidade empresarial simplificada',
      details: [
        'Modalidade criada para formalizar pequenos negócios',
        'Faturamento máximo de R$ 81.000,00 por ano',
        'Registro gratuito e processo simplificado',
        'CNPJ próprio e direitos previdenciários',
        'Pode ter no máximo 1 funcionário'
      ],
      highlight: true
    },
    {
      title: 'Vantagens do MEI',
      description: 'Benefícios de se tornar um Microempreendedor Individual',
      details: [
        'Tributação simplificada com valor fixo mensal',
        'Emissão de nota fiscal para empresas',
        'Direito a aposentadoria, auxílio-doença e salário-maternidade',
        'Facilidade para abrir conta bancária empresarial',
        'Acesso a linhas de crédito específicas para MEI',
        'Participação em licitações públicas'
      ]
    },
    {
      title: 'Obrigações do MEI',
      description: 'Responsabilidades e deveres que deve cumprir',
      details: [
        'Pagamento mensal do DAS-MEI até o dia 20',
        'Entrega da Declaração Anual Simplificada (DASN-SIMEI)',
        'Manter registro de receitas mensais',
        'Emitir nota fiscal quando solicitada',
        'Cumprir normas sanitárias e municipais da atividade',
        'Manter dados atualizados no Portal do Empreendedor'
      ]
    },
    {
      title: 'Valores do DAS-MEI 2025',
      description: 'Contribuição mensal fixa do Microempreendedor Individual',
      details: [
        'Comércio e Indústria: R$ 71,60 (INSS + ICMS)',
        'Prestação de Serviços: R$ 75,60 (INSS + ISS)',
        'Comércio e Serviços: R$ 76,60 (INSS + ICMS + ISS)',
        'Pagamento até o dia 20 de cada mês',
        'Valores incluem INSS, ICMS e/ou ISS',
        'Reajuste anual baseado no salário mínimo'
      ]
    },
    {
      title: 'Atividades Permitidas',
      description: 'Lista de atividades que podem ser exercidas como MEI',
      details: [
        'Mais de 400 atividades liberadas',
        'Comércio: vendedor, lojista, ambulante',
        'Serviços: cabeleireiro, eletricista, consultor',
        'Indústria: confecção, alimentos, artesanato',
        'Verificar lista completa no Portal do Empreendedor',
        'Algumas atividades regulamentadas exigem registro profissional'
      ]
    },
    {
      title: 'Direitos Previdenciários',
      description: 'Benefícios do INSS disponíveis para o MEI',
      details: [
        'Aposentadoria por idade (65 anos homem, 62 anos mulher)',
        'Aposentadoria por invalidez',
        'Auxílio-doença após 12 meses de contribuição',
        'Salário-maternidade de 4 meses',
        'Auxílio-reclusão para dependentes',
        'Pensão por morte para dependentes'
      ]
    },
    {
      title: 'Como se Formalizar',
      description: 'Passo a passo para se tornar MEI',
      details: [
        'Acesse o Portal do Empreendedor (gov.br/mei)',
        'Tenha CPF e título de eleitor em dia',
        'Escolha sua atividade principal',
        'Preencha os dados pessoais e do negócio',
        'Confirme o endereço comercial',
        'Baixe e imprima o Certificado de MEI'
      ]
    },
    {
      title: 'Crescimento do Negócio',
      description: 'O que fazer quando ultrapassar os limites do MEI',
      details: [
        'Desenquadramento automático ao superar R$ 97.200/ano',
        'Migração para Microempresa (ME) ou EPP',
        'Prazo até janeiro do ano seguinte para regularizar',
        'Novo regime tributário (Simples Nacional)',
        'Necessidade de contador para gestão fiscal',
        'Mais obrigações, mas também mais oportunidades'
      ]
    }
  ];
  
  export default function MEIPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Guia Completo MEI
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tudo que você precisa saber sobre o Microempreendedor Individual (MEI) no Brasil. 
              Informações atualizadas para 2025.
            </p>
          </div>
  
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 mb-12 text-white">
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex-1 min-w-0 mr-6">
                <h2 className="text-2xl font-bold mb-2">
                  Formalize seu negócio gratuitamente
                </h2>
                <p className="text-green-100">
                  Mais de 15 milhões de brasileiros já são MEI. Junte-se a eles e tenha CNPJ, 
                  direitos previdenciários e tributação simplificada.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 lg:mt-0">
                <div className="text-center">
                  <div className="text-3xl font-bold">R$ 75,90</div>
                  <div className="text-sm text-green-200">por mês*</div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="grid gap-8">
            {meiInformation.map((info, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-sm border overflow-hidden ${
                  info.highlight
                    ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        info.highlight
                          ? 'bg-blue-500'
                          : index % 2 === 0
                          ? 'bg-green-500'
                          : 'bg-baixada-blue'
                      }`}>
                        {info.highlight ? (
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-white font-bold text-lg">
                            {index + 1}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h2 className={`text-2xl font-semibold mb-3 ${
                        info.highlight
                          ? 'text-blue-900 dark:text-blue-200'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {info.title}
                      </h2>
                      
                      <p className={`mb-6 text-lg ${
                        info.highlight
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {info.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {info.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start space-x-3"
                          >
                            <svg
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                info.highlight
                                  ? 'text-blue-500'
                                  : 'text-green-500'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={`${
                              info.highlight
                                ? 'text-blue-800 dark:text-blue-200'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Pronto para se formalizar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                O processo é 100% gratuito e online. Em poucos minutos você terá seu CNPJ 
                e poderá começar a emitir notas fiscais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.gov.br/mei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  Portal do Empreendedor
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www8.receita.fazenda.gov.br/simplesnacional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Portal Simples Nacional
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L5.216 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                  Informações Importantes
                </h4>
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  As informações apresentadas são baseadas na legislação vigente para 2025. 
                  Valores e regras podem sofrer alterações. Sempre consulte o Portal do Empreendedor 
                  para informações atualizadas e tire dúvidas específicas com um contador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }