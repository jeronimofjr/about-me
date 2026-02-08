const skillsPt = [
    'Python',
    'TypeScript',
    'SQL',
    'Flask',
    'FastAPI',
    'APIs REST',
    'React',
    'Tailwind CSS',
    'NLP',
    'SpaCy',
    'NLTK',
    'Pandas',
    'DuckDB',
    'ETL',
    'PostgreSQL',
    'Clean Architecture',
    'Docker',
    'GCP',
    'Git'
];


export const myself = {
    'pt-BR': {
        sections: {
            about: 'Sobre mim',
            projects: 'Projetos',
            experience: 'Experiencia Profissional',
            stack: 'Habilidades',
            education: 'Formação',
            languages: 'Idiomas'
        },
        header: {
            name: 'Francisco Jerônimo',
            role: 'Python Developer',
            nationality: 'Brasileiro',
            location: 'Quixadá, CE',
            phone: '+55 (88) 99613-7282',
            email: 'franciscojeronimo.dev@gmail.com',
            about: [
                'Atuo no desenvolvimento de sistemas e no processamento de dados, com experiência em projetos nas áreas de saúde pública e varejo. Trabalho principalmente com automação, APIs e análise de dados para apoiar sistemas de gestão e tomada de decisão.',
                'Utilizo Python (Flask/FastAPI) e JavaScript/TypeScripty (NodeJS/React) no desenvolvimento de aplicações web, integrando serviços, bancos de dados e interfaces. Tenho experiência prática com NLP, incluindo classificação de textos, extração de informações e uso de LLMs em cenários aplicados.',
                'Na Fiocruz, atuo na na manutenção de sistemas e em desenvolvimento de pesquisas de NLP aplicado à saúde, lidando com dados de prontuários e painéis de visualização. Também desenvolvi automações e APIs para o varejo, apoiando processos internos e a modernização de serviços internos.'
            ]
        },
        actions: {
            visitProject: 'Visitar projeto',
            languageLabel: 'Idioma'
        },
        projects: [
            {
                id: '0',
                title: 'News Ner br',
                url: 'https://github.com/jeronimofjr/news-ner-br',
                tagline: 'Extração de Entidades Nomeadas (NER) a partir de notícias econômicas brasileiras',
                description: 'Este projeto implementa uma pipeline de Processamento de Linguagem Natural (NLP) para extração e análise de Entidades Nomeadas (NER) a partir de notícias brasileiras coletadas automaticamente via feeds RSS. O foco principal é analisar notícias do tema Economia, identificando quais Pessoas e Organizações aparecem com maior frequência no noticiário recente, utilizando dados reais e não estruturados.',
                bullets: [
                    'Uso de modelo pré-treinado na língua Portuguesa através da biblioteca Spacy para capturar as entidades.',
                    'Visualização das entidades através de bubble chart criado com matplotlib.',
                    'Entidades e metadados salvos em csv.'
                ]
            },
            {
                id: '1',
                title: 'Desafio API E-sus',
                url: 'https://github.com/jeronimofjr/api-esus',
                tagline: 'API REST para Acesso a Dados de Saúde.',
                description: 'desenvolvimento de uma API REST para acesso estruturado a dados de atendimentos de saúde, originalmente exportados de um sistema de terceiros em formato CSV. O objetivo é disponibilizar esses dados de forma segura, padronizada e eficiente para consumo por equipes de Ciência de Dados e outros sistemas corporativos..',
                bullets: [
                    'Uso de arquitetura em camadas (Controllers -> Services -> Repositories) em Python.',
                    'Validação de dados com Marshmallow',
                    'Docker para Conteinerização.',
                    'Testes automatizados com pytest.',
                    'Swagger para documentação',
                    'Consutas paginadas e filtros pro período e unidade de atendimento'
                ]
            },
            {
                id: '2',
                title: 'Análise de documentos de saúde com NLP',
                url: 'https://github.com/jeronimofjr/Analise-de-documentos-com-NLP',
                tagline: 'NLP',
                description: 'Uma empresa precisa identificar termos relevantes em documentos médicos de pacientes. O sistema deve permitir que médicos tenham uma visão geral do histórico sem analisar cada documento individualmente. Para isso, vamos desenvolver uma etapa que tokeniza o texto, remove stopwords, aplica lematização e realiza análise quantitativa e visual',
                bullets: [
                    'Extração e processamento de dados textuais (Regex, tokenização, lemma, remoção de ruídos e visualização) .',
                    'Aplicação de TF-IDF para análise quantitativa dos documentos.',
                    'Análise visual através de nuvem de palavras.'
                ]
            },

        ],
        experiences: [
            {
                company: 'FIOCRUZ - Fundação Oswaldo Cruz',
                location: 'Remoto',
                role: 'Desenvolvedor de Software e Ciência de Dados',
                period: '06/2024 - Presente',
                bullets: [
                    'Desenvolvimento de sistema, manutenção e criação de funcionalidades em sistemas internos.',
                    'APIs em Python/Flask criação de endpoints seguindo Clean Architecture para o Painel e-SUS APS projeto vinculado ao Ministério da Saúde',
                    'Processamento de dados, criação de ETL para geração e transformação de bases usando DuckDB e Polars.',
                    'Uso de React para desenvolvimento e melhoria de interfaces de gestão e usuários',
                    'NLP aplicado à saúde, extração de comorbidades e sintomas em prontuários médicos através de Rule-Based Matching, NER e Transformers',
                    'Criação de laning page e uso de github actions, uso de tecnologias da GCP (Compute engine, Cloud Run, Cloud SQL), além de suporte à implantação do sistema e-sus APS nas UBS que aderiram o software'
                ]
            },
            {
                company: 'HIDROBR',
                location: 'Remoto',
                role: 'Estagiário em Desenvolvimento de Software ',
                period: '03/2023 - 09/2023',
                bullets: [
                    'Processamento de dados em Python através de análise de dados hidrológicos com Pandas, GeoPandas e NumPy.',
                    'Integração com APIs públicaS, Consumo de dados da API da ANA e outras fontes externas.',
                    'Criação de API REST com Flask, manipulação de dados georreferenciados e integração com banco PostgreSQL.',
                    'Automação de interfaces desktop para o desenvolvimento de aplicações em Tkinter para cálculos e problemas de engenharia.',
                    'Implementação de interfaces com React.'
                ]
            },
            {
                company: 'Insight Data Science Lab',
                location: 'Remoto',
                role: 'Bolsista em Processamento de Linguagem Natural (NLP)',
                period: '09/2022 - 02/2023',
                bullets: [
                    'Processamento de texto, Limpeza, tokenização,  e normalização de dados de chatbots.',
                    'NLP com SpaCy e NLTK para Preparação de corpus para análises e modelos preditivos.',
                    'Geração de embeddings e uso de Word2Vec, FastText, GloVe e embeddings contextuais.',
                    'Avaliação de embeddings a partir de Análises intrínsecas e extrínsecas de qualidade semântica.',
                    'Visualização de dados, projeção de embeddings e clusters em gráficos 2D.',
                    'Deep Learning para dados  textuais,  aplicação de modelos de classificação com LSTM, BiLSTM e redes densas com Keras.'
                ]
            },
            {
                company: 'Supermercado Pinheiro',
                location: 'Remoto',
                role: 'Estagiário em Desenvolvimento de Software ',
                period: '03/2022 - 09/2022',
                bullets: [
                    'APIs em NodeJS, desenvolvimento de serviços REST com Express e Knex.js.',
                    'Arquitetura em camadas, organização do código em controller, service e repository.',
                    'Migração de serviço legado transição de PHP para NodeJS com melhoria da estrutura do código.',
                    'Autenticação e segurança, implementação de JWT em APIs RESTful.',
                    'Scripts para ETL, agendamentos, arquivos e envio de e-mails.',
                    'Criação de interfaces com React e Chakra UI para controle de produtos e paletes.'
                ]
            },
        ],
        skills: skillsPt,
        education: {
            institution: 'Universidade Federal do Estado do Ceará',
            degree: 'Ciência da Computação',
            date: '',
            languages: [
                { name: 'Portugues', level: 'Nativo' },
                { name: 'Ingles', level: 'Básico' }
            ]
        },
        footer: {
            copyright: '© 2026 Francisco Jerônimo',
            role: 'Python Developer'
        }
    }

}