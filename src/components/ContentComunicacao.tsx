import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import JSConfetti from 'js-confetti';

const ContentComunicacao = () => {
    const container = useRef<HTMLDivElement>(null);
    const jsConfettiRef = useRef<JSConfetti | null>(null);

    useGSAP(() => {
        // Initialize confetti only once
        if (!jsConfettiRef.current) {
            jsConfettiRef.current = new JSConfetti();
        }

        const cards = gsap.utils.toArray('.card-section-com') as HTMLElement[];

        cards.forEach((card) => {
            gsap.fromTo(card,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1,
                        onEnter: () => {
                            if (card.closest('section')?.id === 'com-11' && jsConfettiRef.current) {
                                jsConfettiRef.current.addConfetti({
                                    emojis: ['🎉', '✨', '🎊'],
                                    emojiSize: 32,
                                    confettiNumber: 60,
                                });
                            }
                        }
                    }
                }
            );
        });
    }, { scope: container });

    return (
        <div ref={container} className="bg-[var(--color-bg-dark)]">
            <section id="comunicacao" className="scroll-section py-24 px-6 lg:px-20 min-h-screen border-b border-white/5 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Comunicação para <span className="text-brand-blue">Igrejas</span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed text-justify md:text-center mt-4">
                        Em sua essência, comunicação para igrejas é um conjunto de metodologias cujo objetivo master é divulgar as ações do ministério por dentro e por fora dos portões do templo. Ela gera aderência simétrica do público com o propósito que está sendo pregado daquele púlpito, não roubando os holofotes, mas amplificando-os e gerando empatia real pela Casa.
                    </p>
                    <p className="text-text-secondary text-lg leading-relaxed text-justify md:text-center mt-4">
                        Transmitir com excelência e se comunicar bem é o padrão estabelecido, uma verdadeira sobrevivência conectiva para manter todo o corpo nutrido.
                    </p>
                </div>
            </section>

            {[
                {
                    id: 'com-1',
                    num: 1,
                    title: 'O que é Comunicação para Igrejas (na veia)',
                    desc: 'É a vitrine contínua de projetos da base e da sua comunidade. É também aquela divulgação diária gerando sinergia no rol dos membros.',
                    items: [
                        'Tudo deve ecoar a mensagem, nada deve "desmentir" o que é ministrado as portas abertas aos finais de semana.',
                        'Muito além das curtidas, o sucesso engloba circulação de PDF avisos no grupo forte da senhora de intercessão também. O off-line vive!',
                        'A meta de chegada é causar envolvimento (físico, monetário ou espiritual) entre as duas pontas da engrenagem cristã.'
                    ]
                },
                {
                    id: 'com-2',
                    num: 2,
                    title: 'Marketing e a Vontade de Deus (Derrubando Tabus)',
                    desc: 'Por décadas o termo marketing dentro das denominações foi interpretado como perigoso ou até nocivo se comparado a fé cega em Deus.',
                    items: [
                        'Táticas de atração na internet jamais substituirão o agir sobrenatural do Espírito.',
                        'O mercado quer vender produtos. O ministério quer anunciar a salvação gratuita ao preço de sangue! Logo, a forma digital de alcançar pessoas precisa transpirar os valores.',
                        'Use cases de mega e pequenas igrejas do mundo servindo de referências sobre alavancagem.'
                    ]
                },
                {
                    id: 'com-3',
                    num: 3,
                    title: 'A Comunicação é 100% Sobre a Mensagem',
                    desc: 'A agência de comunicação cristã existe em virtude da ressurreição, não do entretenimento. Logo o topo do funil é Ele.',
                    items: [
                        'Evite enaltecer personalidades (famosa idolatria secular gospel mascarada).',
                        'Transborde visuais bonitos como meio logístico, nunca como seu deus no pedestal! Cuidado para não viverem em função do look de Instagram perdendo a vida da comunhão.'
                    ]
                },
                {
                    id: 'com-4',
                    num: 4,
                    title: 'Como Começar Seu Projeto (Sem Chá das 5)',
                    desc: 'Crie um comitê se não tem nada: Coloque uma pessoa com perfil de Social media que produza os cartazes. Esse é o faroleiro digital.',
                    items: [
                        'Passo do início: Faca o mapeamento das aflições na secretaria da igreja e da vontade pastora, recrute e junte num primeiro grupo beta.',
                        'Começar amador mas ungido é superior a paralisar. Use filmadoras gratuitas ou Ringlights disponíveis por voluntários.'
                    ]
                },
                {
                    id: 'com-5',
                    num: 5,
                    title: 'Selecionando os Pedaços do Quebra-Cabeças na Equipe',
                    desc: 'Formação do core team: Pessoas hábeis mas sem lealdade destroem mais rápido por dentro do que pessoas cruas moldáveis sem aptidões natas.',
                    items: [
                        'Pontuação Básica: Sujeição a uma autoridade pastoral, humilde e ensinável à instrução, e que pule a procrastinação.',
                        'Caçando Talentos dentro da ovelharia própria sem depender de forasteiros sempre é um grande trunfo duradouro.'
                    ]
                },
                {
                    id: 'com-6',
                    num: 6,
                    title: 'Liderando O Bando Por Resultados',
                    desc: 'Líderes de mídia e do tech time necessitam unificar e destravar o trampo de quem compõe os processos.',
                    items: [
                        'Em tese o cabeça é a grande mola, que tira obstáculo para o editor final dar o enter na entrega final.',
                        'Compreender se fulano tem fôlego para design com mais calma ou pra foto na guerra e delegando para a caixinha correspondente.'
                    ]
                },
                {
                    id: 'com-7',
                    num: 7,
                    title: 'Organizando As Engrenagens e Atividades',
                    desc: 'Delineie claramente a missão e comemore vitórias macro-comuns juntos, usando Trello/Notion.',
                    items: [
                        'Adote de urgência o calendário em post, para evitar os imprevistos gerando estresse na galera.',
                        'Os famosos check ins (ou debriefing) depois da pancadaria pesada nos fins de semana.',
                        'Direcionar grandes passos e trilhos como meses temáticos.'
                    ]
                },
                {
                    id: 'com-8',
                    num: 8,
                    title: 'Gestão Operacional Num Mega Evento (A Cobertura)',
                    desc: 'Ponto focal de uma conferência de avivamento exige muito fluxo e foco do setor e precisa tá bem escamada e dividida.',
                    items: [
                        'O checklist padrão das cargas na bateria da Sony, cartões SD zerado, pastas na nuvens ou discos organizados.',
                        'Aprender a lidar no jogo do estresse para evitar falas em alto e bom som (comporte com diplomacia num desvio surpresa para a cobertura na contingência não surtar)!',
                        'Finalize na pós com reels frenéticos sucatados pra fazer overdeliver.'
                    ]
                },
                {
                    id: 'com-9',
                    num: 9,
                    title: 'A Alimentação Diária (O Que Vai Nos Feeds)',
                    desc: 'Evite da tela espelhar quadro maçantes em todos dias iguais de arte das campanhas religiosas. Exponha cultos as coisas orgânicas e íntimas como a equipe da faxina nas câmeras do dia dia (B-Roll).',
                    items: [
                        'Use post de quebra em carrossel e ensinos discipular com bíblia exposta e muito Call-to-actions(Chamadas para agir!), engajando. Isso treme o algoritimo!',
                        'Observe as abas de métricas para viradas cruciais ao longo de temporadas sem dó (Pivotando sempre!).'
                    ]
                },
                {
                    id: 'com-10',
                    num: 10,
                    title: 'A Jornada Omnichannel do Peregrino Digital',
                    desc: 'A estratégia global se traduz por se aproximar nos ambientes físicos nas revistas, e também nos portais on. Com o mesmo rosto em diversas janelas!',
                    items: [
                        'O papel ofício levado pela senhora da igreja contínua em formato Qrcode no informativo dela direto para ouvir o sermon via Spotify na segunda sem tropeço digital geracional.',
                        'Cuidado a manter na fachada exterior da base sede local, paleta visual correlata as coisas geradoras dos posts de IG.'
                    ]
                },
                {
                    id: 'com-11',
                    num: 11,
                    title: 'Conclusão Das Matérias de Redação e Tecnologia',
                    desc: 'Comunicação base da cruz no pilar evangélico refaz vidas despedaçadas a quilômetros! Você opera nas frentes da evangelização diárias, sem aplausos imediatos contíguos aos pastores!',
                    items: [
                        'Você traduz através da digitação para as audiência frias no ambiente escuro do mundo sobre o tesouro maravilhoso guardado pelos remidos ali por décadas sem luz externa.'
                    ]
                },
                {
                    id: 'com-12',
                    num: 12,
                    title: 'Carlinhos, Ninguém é o Tudo Ao Mesmo Tempo',
                    desc: 'No fim das contas a máxima e os propósitos do trabalho incansável: "Ninguém faz algo grande sozinho, se faz sozinho é porque não é algo grande… Carlitos Paes."',
                    items: [
                        'Fica cravado nas almas do comunicadores multimídias das igreja atuais as bases de trabalhar como a equipe dos irmãos em cristo. Somar é sempre as chaves da conquista!'
                    ]
                },
            ].map((item) => (
                <section key={item.id} id={item.id} className="scroll-section flex items-center justify-center min-h-screen px-6 py-20 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                    <div className="card-section-com w-full max-w-4xl bg-bg-card/80 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] transform-origin-center">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            <span className="text-brand-blue">{item.num}.</span> {item.title}
                        </h3>
                        <p className="text-text-secondary text-lg md:text-xl mb-8 font-medium italic border-l-4 border-brand-blue pl-4 py-2 bg-white/5 rounded-r-lg">
                            "{item.desc}"
                        </p>
                        <ul className="space-y-4 text-text-secondary text-base md:text-lg">
                            {item.items.map((i, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></div>
                                    <span className="text-white/80 leading-relaxed">{i}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ContentComunicacao;
