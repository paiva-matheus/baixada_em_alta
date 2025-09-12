import { WorkerRights } from '@/types';

const workerRights: WorkerRights[] = [
  {
    title: 'Carteira de Trabalho e Previdência Social (CTPS)',
    description: 'Documento obrigatório para todo trabalhador brasileiro',
    details: [
      'Registro obrigatório em até 48 horas após a contratação',
      'Anotação de todas as informações contratuais',
      'Controle do histórico profissional do trabalhador',
      'Base para cálculos previdenciários e trabalhistas'
    ]
  },
  {
    title: 'Salário Mínimo',
    description: 'Valor mínimo que deve ser pago ao trabalhador mensalmente',
    details: [
      'Valor estabelecido por lei federal',
      'Reajuste anual obrigatório',
      'Base para cálculo de benefícios',
      'Não pode ser reduzido por acordo ou convenção coletiva'
    ]
  },
  {
    title: '13º Salário (Gratificação Natalina)',
    description: 'Gratificação anual equivalente a um salário',
    details: [
      'Pagamento em duas parcelas: até 30/11 e até 20/12',
      'Proporcional ao tempo trabalhado no ano',
      'Incide sobre todas as verbas salariais',
      'Direito garantido mesmo em caso de demissão'
    ]
  },
  {
    title: 'Férias Anuais',
    description: 'Período de descanso remunerado após 12 meses de trabalho',
    details: [
      '30 dias corridos de descanso remunerado',
      'Adicional de 1/3 sobre o salário de férias',
      'Pode ser dividida em até 3 períodos',
      'Prazo para concessão: até 12 meses após aquisição'
    ]
  },
  {
    title: 'Jornada de Trabalho',
    description: 'Limites legais para a duração do trabalho diário e semanal',
    details: [
      'Máximo de 8 horas diárias e 44 semanais',
      'Intervalo mínimo de 1 hora para refeição',
      'Horas extras com adicional mínimo de 50%',
      'Descanso semanal remunerado preferencialmente aos domingos'
    ]
  },
  {
    title: 'Fundo de Garantia do Tempo de Serviço (FGTS)',
    description: 'Depósito mensal de 8% do salário em conta vinculada',
    details: [
      'Depósito obrigatório pelo empregador',
      'Conta vinculada no nome do trabalhador',
      'Saque em casos específicos (demissão, aposentadoria, etc.)',
      'Rendimento com correção monetária e juros'
    ]
  },
  {
    title: 'Seguro-Desemprego',
    description: 'Benefício temporário para trabalhador desempregado',
    details: [
      'De 3 a 5 parcelas dependendo do tempo trabalhado',
      'Valor baseado na média salarial',
      'Prazo para requerimento: 7 a 120 dias após demissão',
      'Necessário ter carteira assinada por tempo mínimo'
    ]
  },
  {
    title: 'Aviso Prévio',
    description: 'Comunicação antecipada sobre o fim do contrato',
    details: [
      'Mínimo de 30 dias',
      'Adicional de 3 dias por ano trabalhado',
      'Pode ser trabalhado ou indenizado',
      'Vale para demissão sem justa causa'
    ]
  },
  {
    title: 'Segurança e Medicina do Trabalho',
    description: 'Proteção à saúde e segurança do trabalhador',
    details: [
      'Fornecimento gratuito de EPI (Equipamentos de Proteção Individual)',
      'Exames médicos admissionais, periódicos e demissionais',
      'Treinamento sobre segurança no trabalho',
      'CIPA (Comissão Interna de Prevenção de Acidentes)'
    ]
  },
  {
    title: 'Licença-Maternidade e Paternidade',
    description: 'Afastamento remunerado por ocasião do nascimento de filho',
    details: [
      'Licença-maternidade: 120 dias com salário integral',
      'Licença-paternidade: 5 dias corridos',
      'Estabilidade da gestante: confirmação da gravidez até 5 meses após parto',
      'Direito à amamentação: 2 intervalos de 30 minutos até 6 meses'
    ]
  },
  {
    title: 'Vale-Transporte',
    description: 'Auxílio para deslocamento casa-trabalho-casa',
    details: [
      'Fornecimento obrigatório quando solicitado',
      'Desconto máximo de 6% do salário básico',
      'Utilização exclusiva para locomoção trabalho',
      'Custeio do valor excedente pelo empregador'
    ]
  },
  {
    title: 'Adicional Noturno',
    description: 'Compensação pelo trabalho em período noturno',
    details: [
      'Adicional mínimo de 20% sobre a hora diurna',
      'Período noturno: 22h às 5h',
      'Hora noturna reduzida: 52 minutos e 30 segundos',
      'Aplicável também em domingos e feriados'
    ]
  }
];

export default function WorkerRightsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Direitos dos Trabalhadores CLT
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça os principais direitos garantidos pela Consolidação das Leis do 
            Trabalho (CLT) para trabalhadores com carteira assinada no Brasil.
          </p>
        </div>

        <div className="space-y-8">
          {workerRights.map((right, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-baixada-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {right.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {right.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {right.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-3"
                        >
                          <svg
                            className="w-5 h-5 text-baixada-green mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                Importante saber
              </h3>
              <p className="text-blue-800 dark:text-blue-300">
                Estes são os direitos básicos garantidos por lei. Para situações específicas 
                ou dúvidas sobre seus direitos, procure sempre orientação jurídica 
                especializada ou entre em contato com o sindicato de sua categoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}